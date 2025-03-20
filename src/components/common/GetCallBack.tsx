import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "../ui/use-toast";
export default function GetCallBack() {

       // Form states for Get A Call Back
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackDestination, setCallbackDestination] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    destination: ""
  });

  const { toast } = useToast();

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      phone: "",
      destination: "",
    };

    if (!callbackName.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!callbackPhone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(callbackPhone.trim())) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!callbackDestination.trim()) {
      errors.destination = "Destination is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the new callback_requests table
      const { error } = await supabase.from("callback_requests").insert({
        name: callbackName,
        phone_number: callbackPhone,
        destination: callbackDestination,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Request Submitted",
        description: "We will get back to you soon!",
      });

      // Reset form
      setCallbackName("");
      setCallbackPhone("");
      setCallbackDestination("");
      setFormErrors({
        name: "",
        phone: "",
        destination: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
    <div className="card border-0">
      <div className="bg-primary text-center p-4">
        <h1 className="text-white m-0">Get A Call Back</h1>
      </div>
      <div className="bg-white p-5 rounded-b">
        <form onSubmit={handleCallbackSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full p-4 border ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your name"
              value={callbackName}
              onChange={(e) => setCallbackName(e.target.value)}
              required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full p-4 border ${
                formErrors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your Mobile Number"
              value={callbackPhone}
              onChange={(e) => setCallbackPhone(e.target.value)}
              required
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.phone}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full p-4 border ${
                formErrors.destination
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Destination"
              value={callbackDestination}
              onChange={(e) => setCallbackDestination(e.target.value)}
              required
            />
            {formErrors.destination && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.destination}
              </p>
            )}
          </div>
          <div>
            <button
              className="w-full bg-primary text-white py-3 flex justify-center items-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Request Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
