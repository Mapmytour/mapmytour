import {
  fetchAllSubDestinations,
  fetchDestinations,
} from "@/utils/supabaseQueries";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BookingForm: React.FC = () => {
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [duration, setDuration] = useState<string>("");
  const [destination, setDestination] = useState<Record<string, unknown>>({});
const {toast}=useToast()

  const [des, setDes] = useState([]);
  const getDestinations = async () => {
    try {
      const data = await fetchAllSubDestinations();
      if (data) {
        setDes(data);
        return;
      }
    } catch (error) {
      console.log("ERROR:::", error);
    }
  };

  useEffect(() => {
    getDestinations();
  }, []);
  const nav = useNavigate();
  const handleOnSubmit = () => {
    if(!destination.id){
      toast({
        description: "Select destination to continue",
        variant: "destructive",
      });
      return
    }
    nav(`/packages/${destination.id}`, {
      state: { subDestinationName: destination.name },
    });
  };

  const handleChange = (event) => {
    const selectedId = event.target.value;
    const selectedName = des.find((e) => e.id === selectedId)?.name || "";
    
    setDestination({ id: selectedId, name: selectedName });
  };

  return (
    <div className="container mx-auto booking relative z-10">
      <div className="bg-white shadow-lg p-4 md:p-8 mx-3 md:mx-0 -mt-20 md:-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1">
            <select
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              value={(destination.id||"")as string}
              onChange={handleChange}
            >
              <option value="" disabled>
                Destination
              </option>
              {des.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={departDate}
              onChange={(date: Date) => setDepartDate(date)}
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              placeholderText="Depart Date"
              minDate={new Date()}
            />
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              placeholderText="Return Date"
              minDate={departDate || new Date()}
            />
          </div>
          <div className="md:col-span-1">
            <input
              type="tel"
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              placeholder="Ex. 7 Days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-1">
            <button
              onClick={handleOnSubmit}
              className="w-full bg-primary text-white p-4 hover:bg-opacity-90 transition-all font-medium h-[56px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
