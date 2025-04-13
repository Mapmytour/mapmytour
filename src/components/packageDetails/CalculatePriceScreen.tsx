import React from 'react';
import { useForm } from 'react-hook-form';

const CalculatePriceScreen = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted ✅', data);
    // You can now send this to your backend
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white  p-4 sm:p-6 md:p-10 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-6">Fill in your details.</h2>

      {/* Departure & Tour Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-medium mb-1">Departure City</label>
          <select
            {...register('departureCity', { required: true })}
            className={`w-full border rounded px-3 py-2 ${
              errors.departureCity ? 'border-red-500 bg-red-50' : ''
            }`}
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {errors.departureCity && (
            <p className="text-red-500 text-sm mt-1">Please select a departure city</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Tour Type</label>
          <select
            {...register('tourType', { required: true })}
            className={`w-full border rounded px-3 py-2 ${
              errors.tourType ? 'border-red-500 bg-red-50' : ''
            }`}
          >
            <option value="">Select Tour Type</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>
          {errors.tourType && (
            <p className="text-red-500 text-sm mt-1">Please select a tour type</p>
          )}
        </div>
      </div>

      {/* Travel Date */}
      <div className="mb-6">
        <label className="block font-medium mb-1">Date of Travel</label>
        <input
          type="date"
          {...register('travelDate', { required: true })}
          className={`w-full border rounded px-3 py-2 ${
            errors.travelDate ? 'border-red-500 bg-red-50' : ''
          }`}
        />
        {errors.travelDate && (
          <p className="text-red-500 text-sm mt-1">Travel date is required</p>
        )}
      </div>

      {/* Contact Details */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Contact Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              placeholder="Mobile"
              {...register('mobile', {
                required: true,
                pattern: /^[6-9]\d{9}$/,
              })}
              className={`w-full border rounded px-3 py-2 ${
                errors.mobile ? 'border-red-500 bg-red-50' : ''
              }`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">Enter a valid mobile number</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className={`w-full border rounded px-3 py-2 ${
                errors.email ? 'border-red-500 bg-red-50' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-6">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register('terms', { required: true })}
            className="mt-1"
          />
          <span className="text-sm text-gray-600">
            I accept the{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{' '}
            &{' '}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </span>
        </label>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">You must accept the terms</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded font-medium"
        >
          Calculate Package Price
        </button>
      </div>
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-600 mt-8 border-t pt-4">
        <a href="#">Payment terms</a>
        <a href="#">Cancellation Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </form>
  );
};

export default CalculatePriceScreen;
