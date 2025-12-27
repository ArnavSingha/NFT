import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NftLandingPage } from "./screens/NftLandingPage/NftLandingPage";
import { NftLandingPage as RouteNftLandingPage } from "./routes/NftLandingPage/screens/NftLandingPage";
import { AboutPage } from "./screens/AboutPage";
import { FeaturesPage } from "./screens/FeaturesPage";
import { PricingPage } from "./screens/PricingPage";
import { ContactPage } from "./screens/ContactPage";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NftLandingPage />} />
        <Route path="/nft-landing" element={<RouteNftLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};