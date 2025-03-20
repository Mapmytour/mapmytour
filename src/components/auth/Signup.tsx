import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { validateIndianMobileNumber, validatePassword } from "./utils";

interface SignupFormProps {
  onLoginClick: () => void;
  onSuccess?: () => void;
}

export const SignupForm = ({ onLoginClick, onSuccess }: SignupFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({
    valid: true,
    message: "",
    validNumber: true,
  });
  const { toast } = useToast();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));

      if (id === "password") {
        const validationObj = validatePassword(value);
        setValidation((prev) => ({ ...prev, ...validationObj }));
      } else if (id === "mobile" && !validation.validNumber) {
        setValidation((prev) => ({ ...prev, validNumber: true }));
      }
    },
    [validation.validNumber]
  );

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validation.valid || !validateIndianMobileNumber(formData.mobile)) {
      toast({
        title: "Error",
        description: !validation.valid ? validation.message : "Invalid mobile number",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    try {
      const { error, data } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            mobile_number: formData.mobile,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Welcome!",
        description: "Please check your email to verify your account.",
      });

      if (data.user && onSuccess) {
        onSuccess();
      }
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: (error as { message: React.ReactNode }).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleOnblur=()=>{
    const isValid = validateIndianMobileNumber(formData.mobile);
    setValidation((prev) => ({ ...prev, validNumber: isValid }));
  }

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="space-y-6 px-4 py-6 max-h-[90vh] overflow-y-auto">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <p className="text-sm text-muted-foreground">
          Enter your details to get started
        </p>
      </div>
      <form onSubmit={handleSignup} className="space-y-4">
        {/* Input fields */}
        {["name", "email", "mobile", "password"].map((id) => (
          <div key={id} className="space-y-2 relative">
            <Label htmlFor={id}>{id=="mobile"?"Mobile Number":id.charAt(0).toUpperCase() + id.slice(1)}</Label>
            <Input
              id={id}
              type={id === "password" ? (showPassword ? "text" : "password") : id === "email" ? "email" : id === "mobile" ? "tel" : "text"}
              placeholder={id.charAt(0).toUpperCase() + id.slice(1)}
              value={formData[id]}
              onChange={handleInputChange}
              required
              className={id === "password" ? "pr-8" : ""}
              onBlur={id === "mobile"?handleOnblur:undefined}
            />
            {id === "password" && formData.password && (
              <div
                onClick={handlePasswordVisibility}
                className="absolute top-8 right-2 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
                tabIndex={0}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
            )}
            {id === "password" && formData.password && !validation.valid && (
              <p className="text-red-800 text-xs absolute -bottom-6 left-0">{validation.message}</p>
            )}
            {id === "mobile" && formData.mobile && !validation.validNumber && (
              <p className="text-red-800 text-xs absolute -bottom-5 left-0">Invalid mobile number</p>
            )}
          </div>
        ))}

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
          style={{ marginTop: "30px" }}
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>
      <div className="text-center text-sm">
        Already have an account?
        <Button variant="link" onClick={onLoginClick} className="p-0">
          Sign in
        </Button>
      </div>
    </div>
  );
};