import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/useMobile";
import CustomDock from "@/components/CustomDock";
import GooeyNav from "@/components/ui/GooeyNav";
import Particles from "@/components/ui/Particles";
import { useTheme } from "@/context/ThemeContext";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

const Layout = () => {
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen h-screen">
        <Particles
          className="w-full h-full"
          particleBaseSize={100}
          particleCount={300}
          moveParticlesOnHover={false}
          particleHoverFactor={0.2}
          particleColors={
            theme === "light"
              ? ["ee4724", "eed624", "247dee", "39ee24"]
              : ["ffff9e", "566795", "5970a5", "999999"]
          }
        />
      </div>
      <div className={`fixed top-8 z-100 ${isMobile ? "right-4" : "right-8"}`}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[50, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <Outlet />
      <CustomDock
        className={`fixed bottom-8 z-100 border-accent ${
          isMobile ? "right-3" : "right-8"
        }`}
      />
    </div>
  );
};

export default Layout;
