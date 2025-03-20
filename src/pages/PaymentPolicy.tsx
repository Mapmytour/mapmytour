import PageWrapper from "@/components/PageWrapper";
import React from "react";

const PaymentPolicy = () => {
  return (
    <PageWrapper>
    <div className="p-10 font-sans text-gray-800 leading-relaxed mx-auto mt-10" style={{ maxWidth: "1300px" }}>
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Payment Policy for Map My Tour</h1>
      <p className="mb-6">
        <strong>Effective Date:</strong> 1 Mar, 2025
      </p>
      <p className="mb-6">
        At Map My Tour, we strive to provide you with a seamless and convenient booking experience. Our payment policy is
        designed to ensure clarity and transparency in how payments are processed for the travel services we offer. Please
        read the following carefully to understand your responsibilities and our terms regarding payments.
      </p>

      {/* Section 1: Booking and Payment Process */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Booking and Payment Process</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Booking Confirmation:</strong> All bookings made through our website, customer service team, or any of
          our travel consultants are subject to availability. Once your booking is confirmed, we will send you a booking
          confirmation email, outlining the details of your travel services, including your itinerary, payment amount, and
          payment deadlines.
        </li>
        <li>
          <strong>Payment Methods:</strong> We accept a variety of payment methods, including:
          <ul className="list-disc list-inside ml-6">
            <li>Credit Cards (Visa, MasterCard, American Express)</li>
            <li>Debit Cards</li>
            <li>Bank Transfers</li>
            <li>PayPal</li>
            <li>Other payment methods (as applicable)</li>
          </ul>
        </li>
        <li>
          <strong>Deposit Requirement:</strong> For most bookings, a deposit is required to confirm your reservation. The
          deposit amount varies depending on the type of service booked. Typically, a deposit of 45% is
          required for tours and packages, while full payment may be required for flights, certain hotels, or special
          packages at the time of booking.
        </li>
      </ul>

      {/* Section 2: Payment Deadlines */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Payment Deadlines</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Full Payment:</strong> Full payment is generally required 7 days before your
          departure or the start of the service. If your booking is made less than [Insert Number of Days] days before
          the departure date, full payment is due at the time of booking.
        </li>
        <li>
          <strong>Late Payments:</strong> If full payment is not received by the deadline, Map My Tour reserves the right
          to cancel your booking and charge a cancellation fee as outlined in our Cancellation Policy.
        </li>
      </ul>

      {/* Section 3: Payment Confirmation */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Payment Confirmation</h2>
      <p className="mb-6">
        Once payment is made, we will send you an updated confirmation with proof of payment and a final receipt. Please
        keep this receipt for your records. If you do not receive a payment confirmation within 24 hours, please contact
        us to ensure that your payment was processed correctly.
      </p>

      {/* Section 4: Currency and Pricing */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Currency and Pricing</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Currency:</strong> All prices on our website and in our quotes are displayed in INR.
          Payments will be processed in this currency unless otherwise stated.
        </li>
        <li>
          <strong>Currency Exchange:</strong> If you are making payment in a currency other than INR,
          please note that exchange rates may apply, and you may be subject to additional fees from your bank or payment
          provider.
        </li>
      </ul>

      {/* Section 5: Refunds */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Refunds</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Refund Eligibility:</strong> Refund eligibility is determined by our Cancellation Policy. Please review
          this policy for more details on cancellation timelines, applicable fees, and the process for requesting a
          refund.
        </li>
        <li>
          <strong>Refund Processing Time:</strong> Once a refund is approved, it may take 7
          business days for the funds to appear in your account, depending on your payment method and financial
          institution.
        </li>
      </ul>

      {/* Section 6: Additional Charges */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Additional Charges</h2>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Service Fees:</strong> Certain services, such as changes to existing bookings or special requests
          (e.g., additional services, upgrades, etc.), may incur additional fees. These fees will be clearly communicated
          at the time of your booking.
        </li>
        <li>
          <strong>Government Fees and Taxes:</strong> Any government taxes, fees, or charges (e.g., airport taxes, visa
          fees) that are applicable to your booking are not included in the package price and will be your responsibility
          to pay.
        </li>
      </ul>

      {/* Section 7: Payment Disputes */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Payment Disputes</h2>
      <p className="mb-6">
        If you have any issues with a payment, such as discrepancies or unauthorized transactions, please contact us
        immediately. We will work with you to resolve the matter promptly and ensure that the payment process is handled
        securely.
      </p>

      {/* Section 8: Security of Payment */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Security of Payment</h2>
      <p className="mb-6">
        We prioritize the security of your financial information. All payments made through our website or mobile app are
        processed via secure payment gateways, and your payment details are encrypted and protected. We do not store
        sensitive payment information on our servers.
      </p>

      {/* Section 9: Changes to Payment Policy */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Payment Policy</h2>
      <p className="mb-6">
        Map My Tour reserves the right to modify this Payment Policy at any time. Any changes will be communicated via
        our website or email, and the date of the latest update will be indicated. It is your responsibility to review
        our payment policy periodically to stay informed of any updates.
      </p>

      {/* Section 10: Contact Us */}
      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns regarding our Payment Policy, please feel free to contact us:
      </p>
      <p className="mb-6">
        <strong>Map My Tour</strong>
        <br />
        Email: <a href="mailto:info@mapmytour.in" className="text-blue-600 hover:underline">info@mapmytour.in</a>
        <br />
        Phone: <a href="tel:+919260927665" className="text-blue-600 hover:underline">+91 9260927665</a>
        <br />
        Address: Panchsheel Nagar, Chhindwara - 480001 (Near of Sdo Office Chhindwara Collectorate Office)
      </p>
    </div>
    </PageWrapper>
  );
};

export default PaymentPolicy;