import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NftLandingPage } from "./screens/NftLandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <NftLandingPage />
  </StrictMode>,
);