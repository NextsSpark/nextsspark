import Link from "next/link";

const TermsOfService = () => {
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
              Terms of Service
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              The terms that govern your use of NEXTSSPARK services and website.
            </p>
          </div>
        </div>
      </section>

      <section className="section-lg bg-white text-navy-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
              <p className="text-gray-600">Effective date: June 2026</p>
            </div>

            <p className="text-gray-700 mb-6">
              These Terms of Service ("Terms") govern your access to and use of
              the NEXTSSPARK website and services. By using our website or
              engaging our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">Services</h2>
            <p className="text-gray-700 mb-4">
              We provide software development, consulting and IT training
              services. Specific service agreements, statements of work, and
              project schedules will govern individual engagements and take
              precedence where applicable.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">User Obligations</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>
                You must provide accurate information when contacting or
                contracting with us.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of
                account credentials and any access to paid services.
              </li>
              <li>
                You agree not to misuse our services, resources, or
                infrastructure.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-3">Payment & Refunds</h2>
            <p className="text-gray-700 mb-4">
              Fees and payment terms will be set out in project proposals or
              invoices. Unless otherwise agreed, payments are due per the
              invoice schedule. Refunds are handled on a case-by-case basis as
              defined in the service agreement.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              Unless otherwise agreed in writing, we retain ownership of
              pre-existing tools, libraries and IP. Deliverables created for you
              will be transferred according to the project agreement upon full
              payment.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              To the extent permitted by law, NEXTSSPARK's liability is limited
              to direct damages and will not exceed the total fees paid for the
              services giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of Pakistan (or the
              jurisdiction specified in the service agreement) without regard to
              conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-3">Contact</h2>
            <p className="text-gray-700">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:nextsspark@gmail.com" className="text-cyan-600">
                nextsspark@gmail.com
              </a>{" "}
              or through our{" "}
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

export default TermsOfService;
