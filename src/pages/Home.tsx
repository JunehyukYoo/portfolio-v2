import { useEffect } from "react";
import Particles from "@/components/ui/Particles";
import SplitText from "@/components/ui/SplitText";
import ShinyText from "@/components/ui/ShinyText";
import FadingContent from "@/components/FadingContent";
import ModelViewer from "@/components/ModelViewer";
import { CoolMode } from "@/components/ui/cool-mode";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/useMobile";

const Home = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {}, []);

  return (
    <div className="box-border relative w-screen h-screen overflow-x-hidden flex flex-col justify-center items-center">
      <div className="absolute w-screen h-screen">
        <Particles
          className="w-full h-full"
          particleBaseSize={theme === "light" ? 250 : 100}
          particleCount={300}
          moveParticlesOnHover={false}
          particleHoverFactor={0.2}
          particleColors={
            theme === "light"
              ? ["ee4724", "eed624", "247dee", "39ee24"]
              : ["ffffff"]
          }
        />
      </div>

      <div className="w-min flex flex-col lg:flex-row justify-center items-center">
        <div
          className={
            isMobile
              ? "w-[400px] h-[500px] hover:cursor-grab"
              : "w-[500px] h-[820px] hover:cursor-grab"
          }
        >
          <ModelViewer url="/models/astronaut.glb" animation="moon_walk" />
        </div>
        <div className="text-center min-w-180 z-10">
          <SplitText
            className="text-6xl lg:text-8xl font-semibold"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          >
            Junehyuk Yoo
          </SplitText>
          <FadingContent
            blur={true}
            duration={2000}
            easing="ease-in"
            delay={2}
            initialOpacity={0}
          >
            <h2 className="text-2xl">Software Engineer & Fulltime Student</h2>
            <ShinyText
              text="CS + Linguistics @UIUC"
              speed={3}
              className="text-2xl"
            />
            {isMobile && (
              <p className="text-sm text-muted-foreground">
                View my portoflio on desktop for the best experience!
              </p>
            )}
            {!isMobile && (
              <div className="mt-2">
                <CoolMode>
                  <button className="p-2 w-35 bg-foreground text-background rounded-3xl font-bold hover:cursor-pointer">
                    Click Me!
                  </button>
                </CoolMode>
              </div>
            )}
          </FadingContent>
        </div>
      </div>
    </div>
  );
};

export default Home;
