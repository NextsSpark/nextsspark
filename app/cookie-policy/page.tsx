import Link from 'next/link';

const CookiePolicy = () => {
	return (
		<>
			<section className="bg-navy-900 text-white py-24 relative overflow-hidden bg-grid-pattern-dark">
				<div className="absolute inset-x-0 top-12 mx-auto h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
				<div className="container-custom relative z-10 px-4">
					<div className="mx-auto max-w-3xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">
							<span className="text-sm font-semibold tracking-wide text-cyan-300">Legal</span>
						</div>

						<h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Cookie Policy</h1>

						<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
							How NEXTSSPARK uses cookies and similar technologies.
						</p>
					</div>
				</div>
			</section>

			<section className="section-lg bg-white text-navy-800">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="mb-8">
							<h1 className="text-4xl font-extrabold mb-2">Cookie Policy</h1>
							<p className="text-gray-600">Last updated: June 2026</p>
						</div>

						<p className="text-gray-700 mb-6">Our website uses cookies and similar tracking technologies to provide, protect and improve our services, analyse usage, and personalize content. This Cookie Policy explains what cookies are, how we use them, and how you can control them.</p>

						<h2 className="text-2xl font-bold mt-6 mb-3">What are cookies?</h2>
						<p className="text-gray-700 mb-4">Cookies are small text files stored on your device by a website to remember information about your visit (such as language preference or login status).</p>

						<h2 className="text-2xl font-bold mt-6 mb-3">How we use cookies</h2>
						<ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
							<li>Essential cookies: required for basic site functionality (e.g., session management).</li>
							<li>Performance cookies: collect anonymized usage data to help us improve the experience.</li>
							<li>Functional cookies: remember preferences and settings to enhance usability.</li>
							<li>Advertising/Analytics: third-party cookies used for analytics and advertising purposes.</li>
						</ul>

						<h2 className="text-2xl font-bold mt-6 mb-3">Controlling cookies</h2>
						<p className="text-gray-700 mb-4">Most browsers allow you to control cookie settings through the browser preferences. You can disable cookies, delete cookies, or instruct your browser to notify you when a cookie is set. Note that disabling certain cookies may impact site functionality.</p>

						<h2 className="text-2xl font-bold mt-6 mb-3">Third-party cookies</h2>
						<p className="text-gray-700 mb-6">We may use third-party services such as Google Analytics, social plugins, and advertising networks which set cookies on your device. These third parties have their own privacy and cookie policies; we recommend reviewing them directly.</p>

						<h2 className="text-2xl font-bold mt-6 mb-3">Contact</h2>
						<p className="text-gray-700">If you have questions about our Cookie Policy, contact us at <a href="mailto:nextsspark@gmail.com" className="text-cyan-600">nextsspark@gmail.com</a> or visit our <Link href="/contact" className="text-cyan-600">contact page</Link>.</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default CookiePolicy;
