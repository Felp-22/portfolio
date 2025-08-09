import React from "react";
import { Mail, Phone, Instagram, Youtube, Linkedin, ExternalLink, Heart } from "lucide-react";
import { contactInfo } from "../data/mock";

const Footer = () => {
  const socialIcons = {
    Instagram: Instagram,
    YouTube: Youtube,
    LinkedIn: Linkedin,
    Vimeo: ExternalLink
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Felp</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional video production for small businesses. 
              Crafting visual stories that elevate your brand and connect with your audience.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {contactInfo.socialLinks.map((social, index) => {
                const IconComponent = socialIcons[social.platform];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Services", href: "#services" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              
              <div className="text-gray-300 text-sm">
                {contactInfo.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Felp. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for small businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;