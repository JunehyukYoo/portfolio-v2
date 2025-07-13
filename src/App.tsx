import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLoadingContext } from "./context/LoadingContext";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Toaster } from "sonner";
// import MetallicLogo from "@/components/MetallicLogo";
import Layout from "@/pages/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";

function App() {
  const { assetLoaded, setAssetLoaded } = useLoadingContext();
  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/models/astronaut.glb",
      () => setAssetLoaded(true),
      undefined,
      (error) => {
        console.error("Failed to load model:", error);
        setAssetLoaded(true);
      }
    );
  }, [setAssetLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => setMinDelayPassed(true), 3000);
    return () => clearTimeout(timer);
  }, [assetLoaded]);

  useEffect(() => {
    if (assetLoaded && minDelayPassed) {
      setShowApp(true);
    }
  }, [assetLoaded, minDelayPassed]);

  if (!showApp) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black text-white text-xl">
        {/* <MetallicLogo /> */}
        Loading...
      </div>
    );
  }
  return (
    <>
      <Toaster position="top-left" closeButton />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
