import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
        <div className="absolute inset-x-0 top-12 mx-auto h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="container-custom relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
              <span className="text-sm font-semibold tracking-wide text-cyan-300">
                Legal
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              How NEXTSSPARK collects, uses and protects your personal
              information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-lg bg-white text-navy-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: June 2026</p>
            </div>

            <p className="text-gray-700 mb-6">
              NEXTSSPARK ("we", "us", "our") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website nextsspark.com and related services.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                Contact information you provide (name, email, phone) when you
                contact us or sign up for services.
              </li>
              <li>
                Usage information collected automatically (IP address, pages
                visited, device and browser data).
              </li>
              <li>
                Project and billing information when you engage our professional
                services.
              </li>
              <li>
                Any content you submit to the site (messages, files, feedback).
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use information for purposes including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                To provide, maintain and improve our website and services.
              </li>
              <li>
                To communicate with you about quotes, service updates, and
                support.
              </li>
              <li>To process payments and manage customer accounts.</li>
              <li>
                To detect, prevent and respond to fraud, abuse or security
                incidents.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Sharing & Disclosure
            </h2>
            <p className="text-gray-700 mb-4">We may share information with:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                Service providers who perform services on our behalf (hosting,
                analytics, payment processors).
              </li>
              <li>When required by law or to protect rights and safety.</li>
              <li>
                In connection with a business transfer such as a merger or sale
                of assets.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-3">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your jurisdiction, you may have rights to access,
              correct, delete or export your personal data. To exercise these
              rights, contact us at{" "}
              <a href="mailto:nextsspark@gmail.com" className="text-cyan-600">
                nextsspark@gmail.com
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Data Retention & Security
            </h2>
            <p className="text-gray-700 mb-6">
              We retain personal information only as long as necessary for the
              purposes described. We implement reasonable administrative,
              technical and physical safeguards to protect your information, but
              no method of transmission or storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Third-Party Links & Services
            </h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party sites and use
              third-party services (analytics, social platforms). We are not
              responsible for their privacy practices; please review their
              privacy notices.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this policy from time to time. We will post the
              revised date at the top of this page. Continued use constitutes
              acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions or requests regarding this Privacy Policy,
              please contact us at{" "}
              <a href="mailto:nextsspark@gmail.com" className="text-cyan-600">
                nextsspark@gmail.com
              </a>{" "}
              or via our{" "}
              <Link href="/contact" className="text-cyan-600">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
