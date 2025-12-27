import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Explore", path: "/features" },
  { name: "Marketplace", path: "/pricing" },
  { name: "Artists", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625858.png", alt: "Twitter" },
  { icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625859.png", alt: "Discord" },
  { icon: "https://c.animaapp.com/mjoth52w8d7C2b/img/group-625860.png", alt: "Instagram" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative bg-[#0d0b0c] py-20 px-[120px]">
      <div className="flex justify-between items-start mb-16">
        <div className="flex flex-col gap-6">
          <img
            className="w-9 h-[31px]"
            alt="Logo"
            src="https://c.animaapp.com/mjoth52w8d7C2b/img/union.png"
          />
          <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm max-w-[300px]">
            The world&apos;s first and largest digital marketplace for crypto collectibles and non-fungible tokens.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <img src={social.icon} alt={social.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-lg">
              Quick Links
            </h4>
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="[font-family:'Clash_Display-Semibold',Helvetica] font-normal text-white text-lg">
              Newsletter
            </h4>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-white/60 text-sm max-w-[250px]">
              Subscribe to get the latest updates and news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 rounded-lg text-white text-sm [font-family:'Poppins',Helvetica] outline-none focus:bg-white/20 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#f0c3ec] to-[#7f6aff] rounded-lg [font-family:'Clash_Display-Semibold',Helvetica] text-black text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex justify-between items-center">
        <p className="[font-family:'Poppins',Helvetica] font-normal text-white/40 text-sm">
          © 2024 NFT Marketplace. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-white/40 text-sm hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-white/40 text-sm hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
