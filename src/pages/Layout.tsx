import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/useMobile";
import CustomDock from "@/components/CustomDock";
import GooeyNav from "@/components/ui/GooeyNav";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

const Layout = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-screen h-screen">
      <div className={`fixed top-8 z-1 ${isMobile ? "right-4" : "right-8"}`}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <Outlet />
      <CustomDock
        className={`fixed bottom-8 ${isMobile ? "right-3" : "right-8"}`}
      />
    </div>
  );
};

export default Layout;
