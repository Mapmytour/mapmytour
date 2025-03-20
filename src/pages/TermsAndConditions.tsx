import PageWrapper from "@/components/PageWrapper";
import React from "react";

const TermsAndConditions = () => {
  return (
    <PageWrapper>
      <div
        className="p-10 font-sans text-gray-800 leading-relaxed mx-auto mt-10"
        style={{ maxWidth: "1300px" }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Terms and Conditions for Map My Tour
        </h1>
        <p className="mb-6">
          <strong>Effective Date:</strong> 1 Mar, 2025
        </p>
        <p className="mb-6">
          By accessing or using the services of Map My Tour (“we”, “our”, “us”),
          including our website, mobile apps, and any other platforms
          (collectively referred to as the "Services"), you agree to comply with
          and be bound by these Terms and Conditions. If you do not agree with
          these terms, please do not use our Services.
        </p>

        {/* Section 1: Booking and Payment */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. Booking and Payment
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Bookings:</strong> All bookings made through Map My Tour are
            subject to availability. Once a booking is confirmed, it becomes a
            binding contract between you (the "customer") and Map My Tour.
          </li>
          <li>
            <strong>Payment:</strong> Full payment or a deposit may be required
            to confirm your booking, depending on the nature of the service
            (e.g., tours, accommodation, flights). You agree to provide accurate
            payment details and authorize the payment through our secure payment
            gateway.
          </li>
          <li>
            <strong>After confirmation of any Package request:</strong> 25% of
            tour package cost required immediately to book all the respective
            services.
          </li>
          <li>
            <strong>15 Days prior to arrival date:</strong> 50% of tour package
            cost required.
          </li>
          <li>
            <strong>07 Days prior to arrival date:</strong> 100% of tour package
            cost required.
          </li>
          <li>
            <strong>
              All payments must be notified by an email format only with
              attached transaction details.
            </strong>
          </li>
          <li>
            <strong>
              Payment terms are subject to change at the time of booking as per
              Hotel Policy and High Season.
            </strong>
          </li>
          <li>
            <strong>We will not entertain any credit facility.</strong>
          </li>
          <li>
            <strong>Prices:</strong> All prices displayed are in INR and are
            subject to change without notice. Final prices will be confirmed at
            the time of booking.
          </li>
        </ul>

        {/* Section 2: Cancellation and Refund Policy */}
        <section id="cancellation">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            2. Cancellation and Refund Policy
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li>
              <strong>Cancellation by You:</strong> You may cancel your booking
              by providing us with a written notice of cancellation. Refund
              eligibility and any associated cancellation fees are subject to
              the terms and conditions of the specific service provider (e.g.,
              airlines, hotels, tour operators) and the timing of your
              cancellation.
            </li>
            <li>
              <strong>Cancellation Policy:</strong>
              <ul className="list-disc list-inside ml-6">
                <li>
                  Any cancellation at 45 Days prior to arrival date – No charge
                </li>
                <li>
                  Any cancellation between 45 Days – 30 Days prior to arrival
                  date: 25% of tour fare charge
                </li>
                <li>
                  Any cancellation between 30 Days – 15 Days prior to arrival
                  date: 50% of tour fare charge
                </li>
                <li>
                  Any cancellation between 15 Days – 10 Days prior to arrival
                  date: 75% of tour fare charge
                </li>
                <li>
                  Any cancellation less than 10 Days: 100% of tour fare charge.
                </li>
                <li>
                  Once the package is booked & confirmed North Sikkim part is
                  Non-Cancellable or Non-Refundable.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cancellation by Map My Tour:</strong> In rare cases, we
              may need to cancel a booking due to unforeseen circumstances
              (e.g., natural disasters, political unrest, etc.). In such cases,
              we will notify you as soon as possible and offer alternative
              arrangements or a full refund.
            </li>
            <li>
              <strong>Non-Refundable Services:</strong> Certain services (such
              as flights, certain hotels, or special tours) may have
              non-refundable terms. Please review the specific terms when
              booking.
            </li>
          </ul>
        </section>

        {/* Section 3: Travel Insurance */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. Travel Insurance
        </h2>
        <p className="mb-6">
          We highly recommend that you purchase travel insurance to protect
          yourself against unexpected events such as trip cancellations, medical
          emergencies, or lost luggage. Map My Tour is not responsible for any
          losses incurred due to such events.
        </p>

        {/* Section 4: Customer Responsibilities */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Customer Responsibilities
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Accurate Information:</strong> You agree to provide
            accurate, up-to-date information when booking a service, including
            your contact details, travel preferences, and passport information.
            Failure to provide accurate information may result in delays or the
            inability to provide the booked services.
          </li>
          <li>
            <strong>Travel Documents:</strong> You are responsible for ensuring
            that you have all necessary travel documents, including a valid
            passport, visa, and any other required documents, as well as
            ensuring that these documents are in good condition. Map My Tour is
            not liable for any issues arising from missing or incorrect
            documentation.
          </li>
          <li>
            <strong>Health and Safety:</strong> You are responsible for ensuring
            that you are physically and mentally capable of participating in any
            tours or activities booked through Map My Tour. You must follow all
            safety instructions given by service providers during your trip.
          </li>
        </ul>

        {/* Section 5: Changes to Bookings */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Changes to Bookings
        </h2>
        <p className="mb-6">
          If you wish to make changes to your booking, such as changing dates or
          accommodations, please contact us as soon as possible. We will attempt
          to accommodate your request, but availability and additional fees may
          apply.
        </p>

        {/* Section 6: Liability */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Liability
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Limitation of Liability:</strong> Map My Tour acts as an
            intermediary between you and service providers such as hotels,
            airlines, and tour operators. We are not responsible for any direct
            or indirect damages, losses, or injuries caused by third-party
            service providers, or events beyond our control.
          </li>
          <li>
            <strong>Force Majeure:</strong> We are not responsible for delays,
            cancellations, or changes to your booking caused by circumstances
            beyond our control, such as weather events, political unrest,
            strikes, or other force majeure events.
          </li>
        </ul>

        {/* Section 7: Intellectual Property */}
        {/* <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
      <p className="mb-6">
        All content, including logos, trademarks, images, and text, on the Map My Tour website or app is the property of
        Map My Tour and is protected by copyright laws. You may not use, reproduce, or distribute any content without our
        express written permission.
      </p> */}

        {/* Section 7: Privacy and Data Protection */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Privacy and Data Protection
        </h2>
        <p className="mb-6">
          By using our Services, you agree to our Privacy Policy, which outlines
          how we collect, use, and protect your personal information. We are
          committed to safeguarding your privacy and ensuring the security of
          your personal data.
        </p>

        {/* Section 9: Governing Law */}
        {/* <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
      <p className="mb-6">
        These Terms and Conditions are governed by and construed in accordance with the laws of [INDIA], and you agree to
        submit to the exclusive jurisdiction of the courts of [Insert Location] in the event of any disputes.
      </p> */}

        {/* Section 8: Modifications to Terms */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          8. Modifications to Terms
        </h2>
        <p className="mb-6">
          Map My Tour reserves the right to update or modify these Terms and
          Conditions at any time. Any changes will be posted on our website, and
          the date of the latest update will be indicated. You are encouraged to
          review these terms periodically for any changes.
        </p>

        {/* Section 9: Contact Us */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          9. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at:
        </p>
        <p className="mb-6">
          <strong>Map My Tour</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:info@mapmytour.in"
            className="text-blue-600 hover:underline"
          >
            info@mapmytour.in
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+919260927665" className="text-blue-600 hover:underline">
            +91 9260927665
          </a>
          <br />
          Address: Panchsheel Nagar, Chhindwara - 480001 (Near of Sdo Office
          Chhindwara Collectorate Office)
        </p>
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditions;
