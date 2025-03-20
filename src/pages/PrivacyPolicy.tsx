import PageWrapper from "@/components/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <div
        className="p-10 font-sans text-gray-800 leading-relaxed mx-auto mt-10"
        style={{
          maxWidth: "1300px",
        }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Privacy Policy for Map My Tour
        </h1>
        <p className="mb-4">
          Map My Tour is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and share your personal
          information when you use our services, including our website, mobile
          apps, and any other platforms we operate (collectively, "Services").
        </p>
        <p className="mb-6">
          By using our Services, you agree to the collection and use of your
          personal information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number, passport details, travel preferences, billing
            information, etc.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device
            information, location data, and usage information.
          </li>
          <li>
            <strong>Booking Information:</strong> Travel dates, destinations,
            accommodations, and activity bookings.
          </li>
          <li>
            <strong>Payment Information:</strong> Credit card or payment method
            details (processed through secure payment gateways).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To provide and manage travel bookings and services.</li>
          <li>
            To improve and personalize your experience on our website or app.
          </li>
          <li>To process payments and send booking confirmations.</li>
          <li>
            To send you promotional materials, newsletters, and other offers (if
            you have opted-in).
          </li>
          <li>
            To comply with legal requirements, such as fraud prevention and
            dispute resolution.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          3. How We Share Your Information
        </h2>
        <p className="mb-4">
          We may share your information with third parties under the following
          circumstances:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Service Providers:</strong> We may share information with
            trusted third-party companies who assist in providing our services
            (e.g., hotel bookings, flights, transportation, etc.).
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information
            if required by law or to protect the rights, property, and safety of
            Map My Tour or others.
          </li>
          <li>
            <strong>Business Transfers:</strong> If Map My Tour undergoes a
            merger, acquisition, or sale, your information may be transferred as
            part of that transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          4. Data Retention
        </h2>
        <p className="mb-6">
          We will retain your personal information for as long as necessary to
          provide services to you, comply with our legal obligations, resolve
          disputes, and enforce our agreements.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="mb-6">
          We use cookies and similar technologies to collect information about
          your use of our website and to enhance your experience. You can adjust
          your browser settings to refuse cookies, but doing so may affect the
          functionality of certain services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          6. Security of Your Information
        </h2>
        <p className="mb-6">
          We take reasonable steps to protect your personal information, using a
          combination of physical, technical, and administrative measures to
          safeguard it. However, no method of transmission over the internet is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          7. Your Rights and Choices
        </h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Access:</strong> You can request to see the personal data we
            hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You can update or correct any
            inaccurate or incomplete information.
          </li>
          <li>
            <strong>Deletion:</strong> You can request that we delete your
            personal data, subject to certain conditions.
          </li>
          <li>
            <strong>Opt-out:</strong> You can opt-out of receiving promotional
            emails at any time by following the unsubscribe instructions in the
            email.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          8. International Transfers
        </h2>
        <p className="mb-6">
          If you are located outside of [Country], please be aware that your
          information may be transferred to and processed in [Country], where
          our servers are located. By using our Services, you consent to the
          transfer of your data to [Country].
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          9. Children’s Privacy
        </h2>
        <p className="mb-6">
          Our Services are not directed to children under the age of 13, and we
          do not knowingly collect personal information from children. If we
          learn that we have collected personal information from a child under
          13, we will take steps to delete that information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          10. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the “Effective Date” will be updated
          accordingly. Please review this policy periodically to stay informed
          about how we are protecting your information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          11. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
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

export default PrivacyPolicy;
