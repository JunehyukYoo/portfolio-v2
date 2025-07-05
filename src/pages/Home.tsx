import Particles from "@/components/ui/Particles";
import SplitText from "@/components/ui/SplitText";
import ShinyText from "@/components/ui/ShinyText";
import FadingContent from "@/components/FadingContent";
import ModelViewer from "@/components/ModelViewer";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/useMobile";

const Home = () => {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  return (
    <div className="box-border relative w-screen h-screen overflow-x-hidden flex flex-col justify-center items-center">
      <div className="absolute w-screen h-screen">
        <Particles
          className="w-full h-full"
          moveParticlesOnHover={false}
          particleHoverFactor={0.2}
          particleColors={theme === "light" ? ["000000"] : ["ffffff"]}
        />
      </div>

      <div className="w-min flex flex-col lg:flex-row justify-center items-center">
        <div
          className={isMobile ? "w-[400px] h-[500px]" : "w-[500px] h-[820px]"}
        >
          <ModelViewer url="/astronaut.glb" animation="moon_walk" />
        </div>
        <div className="text-center min-w-180">
          <SplitText
            text="Junehyuk Yoo"
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
          />
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
          </FadingContent>
        </div>
      </div>
    </div>
  );
};

export default Home;
