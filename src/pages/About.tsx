import {
  Card,
  CardHeader,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";
import Threads from "@/components/ui/Threads";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/context/ThemeContext";
import { IconsLight, IconsDark } from "@/lib/cloudIcons";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full w-full">
      <div className="absolute w-screen h-full z-0 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
      </div>

      <div className="relative h-full pt-30 pl-6 pr-6 pb-6 grid md:grid-cols-3 grid-rows-1 gap-20 z-10">
        <Card className="col-span-1">About section</Card>
        <div className="col-span-2 grid md:grid-cols-2 grid-rows-2 gap-4 h-full">
          <div className="col-span-1 flex flex-col gap-4 ">
            {/* Skills / Techstack */}
            <Card className="">
              <Tabs defaultValue="visual">
                <CardHeader>
                  <h1 className="font-bold text-2xl">Tech Stack</h1>
                  <TabsList>
                    <CardAction>
                      <TabsTrigger value="visual">Visual</TabsTrigger>
                      <TabsTrigger value="text">Text</TabsTrigger>
                    </CardAction>
                  </TabsList>
                </CardHeader>
                <TabsContent value="visual">
                  <CardContent>
                    <div className="relative flex size-full justify-center overflow-hidden -translate-y-5 before:backdrop-blur-3xl">
                      <IconCloud
                        icons={theme === "light" ? IconsLight : IconsDark}
                      />
                    </div>
                  </CardContent>
                </TabsContent>
                <TabsContent value="text">
                  <CardContent>Text.</CardContent>
                </TabsContent>
              </Tabs>
            </Card>
            {/* Education */}
            <Card className="">
              Education
              <CardContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam repellat debitis, pariatur labore porro iusto unde
                beatae harum dolorum in tempore doloribus maiores et repellendus
                officia nihil voluptates, exercitationem reiciendis.
              </CardContent>
            </Card>
          </div>

          {/* Experience */}
          <Card className="col-span-1 row-span-2">
            Experience
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              harum omnis quidem quod optio esse quo, id, debitis tempora
              laboriosam aliquam quia ducimus reiciendis, expedita veritatis
              ipsam eveniet itaque? Ducimus!
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
