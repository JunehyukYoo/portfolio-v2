import MetallicPaint, { parseLogoImage } from "./ui/MetallicPaint";
import { useState, useEffect } from "react";

// replace with your own SVG
// NOTE: your SVG should have a bit of padding around the shape, to keep it from being cut off
// it should also have black fill color, to allow the metallic effect to show through the mask
import logo from "/Logo.png";

export const MetallicLogo = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadDefaultImage();
  }, []);

  return (
    <div className="w-full h-screen">
      {imageData && (
        <MetallicPaint
          imageData={imageData ?? new ImageData(10, 10)}
          params={{
            edge: 2,
            patternBlur: 0.005,
            patternScale: 2,
            refraction: 0.015,
            speed: 0.3,
            liquid: 0.07,
          }}
        />
      )}
    </div>
  );
};
