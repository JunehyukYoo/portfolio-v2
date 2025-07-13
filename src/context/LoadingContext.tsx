import { useContext, createContext } from "react";

export const LoadingContext = createContext<{
  assetLoaded: boolean;
  setAssetLoaded: (v: boolean) => void;
}>({
  assetLoaded: false,
  setAssetLoaded: () => {},
});

export const useLoadingContext = () => useContext(LoadingContext);
