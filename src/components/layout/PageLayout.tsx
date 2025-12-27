import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps): JSX.Element => {
  return (
    <div className="bg-[#0d0b0c] min-h-screen w-full overflow-hidden relative">
      {/* Background Elements */}
      <img
        className="absolute top-0 left-[458px] w-[982px] h-[1207px] pointer-events-none"
        alt="Background"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/ellipse-429.svg"
      />
      <img
        className="absolute top-0 left-0 w-[1160px] h-[984px] pointer-events-none"
        alt="Background"
        src="https://c.animaapp.com/mjoth52w8d7C2b/img/rectangle-45.png"
      />

      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};
