import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-[120px] py-[45px] flex items-center justify-between">
      <Link to="/">
        <img
          className="w-9 h-[31px]"
          alt="Logo"
          src="https://c.animaapp.com/mjoth52w8d7C2b/img/union.png"
        />
      </Link>

      <div className="flex items-center gap-[50px]">
        <div className="flex items-center gap-[40px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`[font-family:'Clash_Display-Regular',Helvetica] font-normal text-base tracking-[0.20px] leading-[18px] whitespace-nowrap transition-colors hover:text-pink ${
                location.pathname === link.path ? "text-pink" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="relative w-[172px] h-12">
          <img
            className="absolute top-0 left-0 w-[172px] h-12"
            alt="Nav btn bg"
            src="https://c.animaapp.com/mjoth52w8d7C2b/img/nav-btn-bg.svg"
          />
          <Button
            variant="ghost"
            className="absolute top-[15px] left-1/2 -translate-x-1/2 h-auto p-0 [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-base tracking-[0.20px] leading-[18px] text-black whitespace-nowrap bg-transparent hover:bg-transparent"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
