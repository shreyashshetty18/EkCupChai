import React from "react";
import { FaInstagram, FaYoutube, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaXTwitter, label: "X", href: "https://x.com" },
    { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  ];

  const footerLinks = [
    { name: "About Us", href: "#about" },
    { name: "Help Center", href: "#help" },
    { name: "Mobile Apps", href: "#apps" },
    { name: "Resources", href: "#resources" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#fdfaf5] to-[#f8f4ed] text-[#444] pt-12 pb-6 border-t-2 border-[#e8d5b7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="logo-font text-chaiBrown text-2xl font-bold text-[#8B4513] mb-3 flex items-center justify-center md:justify-start gap-2">
              ☕ Ek Cup Chai
            </h3>
            <p className="text-chaiBrown text-sm leading-relaxed">
              Brewing stories, one cup at a time. Join our community of chai lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-[#1c1c1c] mb-4 text-base">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm hover:text-[#8B4513] hover:underline transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-[#1c1c1c] mb-4 text-base">Stay Connected</h4>
            <div className="flex gap-4 justify-center md:justify-end mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md hover:bg-[#8B4513] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p className="flex items-center gap-2">
              &copy; {currentYear} Ek Cup Chai. Made with <FaHeart className="text-red-500" /> in India
            </p>
            <p className="flex items-center gap-2">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;