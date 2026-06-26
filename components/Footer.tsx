import Link from 'next/link';
import { Mail, MapPin, Phone} from 'lucide-react';
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaXTwitter,
} from 'react-icons/fa6';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    Services: [
      { label: 'Software Development', href: '/services' },
      { label: 'Consulting', href: '/services' },
      { label: 'IT Training', href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/" className="flex items-center gap-3">
            {/* <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-400 text-[#0F0D28] font-bold">
              NS
            </div> */}
            <Image
              src="/Logo_1.png"
              alt="NEXTSSPARK Logo"
              width={100}
              height={100}
              className="rounded-xl"
            />

            {/* <span className="text-white font-bold text-xl tracking-wide">
              NEXTSSPARK
            </span> */}
          </Link>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              Leading software development, consulting, and IT training company delivering state-of-the-art innovative digital solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <MapPin size={18} className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={18} className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:nextsspark@gmail.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  nextsspark@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone size={18} className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+923171445114" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  +92-317-1445114
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white tracking-wider text-sm uppercase mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80 pt-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {[
              { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-cyan-400 hover:bg-cyan-950/30' },
              { icon: FaXTwitter, href: 'https://x.com', label: 'X (Twitter)', color: 'hover:text-cyan-400 hover:bg-cyan-950/30' },
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-cyan-400 hover:bg-cyan-950/30' },
              { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-cyan-400 hover:bg-cyan-950/30' },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 bg-navy-800 border border-gray-800 rounded-xl text-gray-400 transition-all duration-200 ${social.color} hover:scale-105 hover:-translate-y-0.5`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {currentYear} NEXTSSPARK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
