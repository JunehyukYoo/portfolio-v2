import { useState, type ReactNode } from "react";
import { LoadingContext } from "@/context/LoadingContext";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [assetLoaded, setAssetLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ assetLoaded, setAssetLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
