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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/context/ThemeContext";
import { IconsLight, IconsDark } from "@/lib/cloudIcons";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full pt-30 pl-10 pr-10 pb-10 grid md:grid-cols-3 grid-cols-1 gap-4 z-10">
        <Card className="col-span-1 transluscent w-full">
          <CardHeader>
            <CardTitle className="font-bold text-xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-8">
            <Avatar className="w-60 h-60 rounded-[30%]">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>JY</AvatarFallback>
            </Avatar>
            <p className="p-4">
              Hi my name is <span className="font-bold">Junehyuk Yoo</span> but
              I go by <span className="font-bold">June</span>. I am a software
              engineer currently studying at{" "}
              <span className="font-bold">UIUC</span>.
            </p>
          </CardContent>
        </Card>

        <div className="col-span-1 row-span-2 flex flex-col gap-4">
          {/* Tech Stack / Skills */}
          <Card className="flex flex-col transluscent flex-auto">
            <Tabs defaultValue="visual" className="grow">
              <CardHeader>
                <CardTitle className="font-bold text-xl">Tech Stack</CardTitle>
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
                <CardContent className="h-full grid md:grid-rows-2 md:grid-cols-2 gap-2 text-center flex-auto">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Programming Languages
                    </h2>
                    <div className="flex flex-wrap gap-2 p-2">
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Python
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Javascript/Typescript
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        C
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        C++
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        CSS/Tailwind
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Java
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Ruby
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        R
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Assembly
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Technical Skills + Concepts
                    </h2>
                    <div className="flex flex-wrap gap-2 p-2">
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        OOP
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Low-level Programming
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Fullstack Development
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Machine Learning
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Frameworks, Libraries, Tools
                    </h2>
                    <div className="flex flex-wrap gap-2 p-2">
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        React + Vite
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        PyTorch
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        NumPy
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Git
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Vim
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">Human Languages</h2>
                    <div className="flex flex-wrap gap-2 p-2">
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        English (Fluent)
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Korean (Semi-Fluent)
                      </Badge>
                      <Badge
                        variant="default"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Chinese (Beginner)
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
          {/* Education */}
          <Card className="transluscent">
            <CardHeader>
              <CardTitle className="font-bold text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-semibold">
                      University of Illinois at Urbana Champaign
                    </h3>
                    <h2 className="italic">
                      B.S. Computer Science and Linguistics (2020-Present)
                    </h2>
                  </div>
                  <img src="/uiuc.svg" className="w-8" />
                </div>
                <div className="flex flex-col">
                  <p>Cumulative GPA: 3.80</p>
                  <p>
                    Relevant coursework: Relevant coursework: Applied Machine
                    Learning, Algorithms and Models of Computation, Systems
                    Programming, Data Structures, Computer Architecture,
                    Discrete Structures, Elements of Syntax, Elements Semantics
                    & Pragmatics...
                  </p>
                  <p>Expected graduation: May 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-1 row-span-2 transluscent">
          <CardHeader>
            <CardTitle className="font-bold text-xl">Experience</CardTitle>
          </CardHeader>
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
