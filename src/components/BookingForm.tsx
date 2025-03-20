
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingForm: React.FC = () => {
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  return (
    <div className="container mx-auto booking relative z-10">
      <div className="bg-white shadow-lg p-4 md:p-8 mx-3 md:mx-0 -mt-20 md:-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-1">
            <select className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]">
              <option value="" disabled selected>Destination</option>
              <option value="1">Destination 1</option>
              <option value="2">Destination 2</option>
              <option value="3">Destination 3</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={departDate}
              onChange={(date: Date) => setDepartDate(date)}
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              placeholderText="Depart Date"
            />
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
              className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]"
              placeholderText="Return Date"
            />
          </div>
          <div className="md:col-span-1">
            <select className="w-full p-4 border border-gray-300 text-gray-600 h-[56px]">
              <option value="" disabled selected>Duration</option>
              <option value="1">3 Days</option>
              <option value="2">5 Days</option>
              <option value="3">7 Days</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <button className="w-full bg-primary text-white p-4 hover:bg-opacity-90 transition-all font-medium h-[56px]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
