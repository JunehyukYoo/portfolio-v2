import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { LoadingProvider } from "./components/LoadingProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoadingProvider>
  </StrictMode>
);
