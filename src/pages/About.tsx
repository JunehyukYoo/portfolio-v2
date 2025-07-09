import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/context/ThemeContext";
import { IconsLight, IconsDark } from "@/lib/cloudIcons";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full pt-30 pl-10 pr-10 pb-10 grid md:grid-cols-3 grid-cols-1 gap-4 z-10">
        <Card className="col-span-1 transluscent w-full">
          <CardHeader>
            <CardTitle className="font-semibold text-xl">About Me</CardTitle>
          </CardHeader>
        </Card>

        <div className="col-span-1 row-span-2 grid grid-rows-2 gap-4 ">
          <Card className="flex flex-col transluscent">
            <Tabs defaultValue="visual" className="grow">
              <CardHeader>
                <CardTitle className="font-semibold text-xl">
                  Tech Stack
                </CardTitle>
                <TabsList>
                  <CardAction>
                    <TabsTrigger value="visual">Visual</TabsTrigger>
                    <TabsTrigger value="text">Text</TabsTrigger>
                  </CardAction>
                </TabsList>
              </CardHeader>
              <TabsContent value="visual">
                <CardContent className="relative size-full flex justify-center overflow-hidden translate-y-5 before:backdrop-blur-3xl">
                  <IconCloud
                    icons={theme === "light" ? IconsLight : IconsDark}
                  />
                </CardContent>
              </TabsContent>
              <TabsContent value="text">
                <CardContent className="h-full grid md:grid-rows-2 md:grid-cols-2 gap-2 text-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Programming Languages
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="default">Python</Badge>
                      <Badge variant="default">Javascript/Typescript</Badge>
                      <Badge variant="default">C/C++</Badge>
                      <Badge variant="default">CSS/Tailwind</Badge>
                      <Badge variant="default">Java</Badge>
                      <Badge variant="default">Ruby</Badge>
                      <Badge variant="default">R</Badge>
                      <Badge variant="default">Assembly</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2>Technical Skills + Concepts</h2>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="default">
                        Object Oriented Programming
                      </Badge>
                      <Badge variant="default">Low-level Programming</Badge>
                      <Badge variant="default">Frontend Development</Badge>
                      <Badge variant="default">Backend Development</Badge>
                      <Badge variant="default">Machine Learning</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2>Frameworks, Libraries, & Tools</h2>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="default">
                        Object Oriented Programming
                      </Badge>
                      <Badge variant="default">React + Vite</Badge>
                      <Badge variant="default">Node.js</Badge>
                      <Badge variant="default">PyTorch</Badge>
                      <Badge variant="default">NumPy</Badge>
                      <Badge variant="default">Git</Badge>
                      <Badge variant="default">Vim</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2>Human Languages</h2>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="default">
                        Object Oriented Programming
                      </Badge>
                      <Badge variant="default">English (Fluent)</Badge>
                      <Badge variant="default">Korean (Semi-Fluent)</Badge>
                      <Badge variant="default">Chinese (Beginner)</Badge>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
          <Card className="transluscent">
            Education
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              repellat debitis, pariatur labore porro iusto unde beatae harum
              dolorum in tempore doloribus maiores et repellendus officia nihil
              voluptates, exercitationem reiciendis.
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-1 row-span-2 transluscent">
          Experience
          <CardContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo harum
            omnis quidem quod optio esse quo, id, debitis tempora laboriosam
            aliquam quia ducimus reiciendis, expedita veritatis ipsam eveniet
            itaque? Ducimus!
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
