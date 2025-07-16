import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";
import AnimatedContent from "@/components/AnimatedContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/context/ThemeContext";
import { IconsLight, IconsDark } from "@/lib/cloudIcons";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full w-full grid justify-center">
      <AnimatedContent
        distance={50}
        direction="vertical"
        duration={1}
        ease="power3.out"
        initialOpacity={0.0}
        animateOpacity
        scale={1.1}
        threshold={0}
        delay={0.3}
      >
        <div className="relative h-full pt-28 pl-10 pr-10 pb-10 grid md:grid-cols-3 grid-cols-1 gap-4 z-10 overflow-scroll">
          <Card className="col-span-1 transluscent h-full overflow-x-scroll">
            <CardHeader>
              <CardTitle className="font-bold text-xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Avatar className="w-60 h-60 rounded-[30%]">
                <AvatarImage src="/photos/profile.png" />
                <AvatarFallback>JY</AvatarFallback>
              </Avatar>
              <div className="grid p-4 gap-2">
                <p>
                  Hi, my name is <span className="font-bold">Junehyuk Yoo</span>{" "}
                  but I go by <span className="font-bold">June</span>! I am a
                  software engineer currently studying at{" "}
                  <span className="font-bold">UIUC</span>. I was born in Seoul,
                  South Korea, and moved back and forth between Hong Kong where
                  I graduated high school.
                </p>
                <p>
                  I have a passion for learning new skills and creating
                  innovative solutions to real-world problems. My interests span
                  fullstack development, machine learning, and language
                  technologies. I enjoy collaborating with others, building
                  impactful projects, and constantly challenging myself to grow
                  as a developer and a person.
                </p>
                <p>
                  Other than coding, I enjoy both listening to and playing
                  music, reading fantasy and space opera novels, practicing
                  martial arts, and trying espresso martinis at every bar I
                  visit.
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="col-span-1 flex flex-col gap-4 h-full">
            {/* Tech Stack / Skills */}
            <Card className="flex flex-col transluscent flex-auto">
              <Tabs defaultValue="visual" className="grow">
                <CardHeader>
                  <CardTitle className="font-bold text-xl">
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
                    <div className="flex flex-col text-lg">
                      <h3 className="font-semibold">
                        University of Illinois at Urbana Champaign
                      </h3>
                      <h2 className="italic">
                        B.S. Computer Science and Linguistics (2020-Present)
                      </h2>
                    </div>
                    <img src="/icons/uiuc.svg" className="w-8" />
                  </div>
                  <div className="flex flex-col">
                    <p>Cumulative GPA: 3.80</p>
                    <p>
                      Relevant coursework: Relevant coursework: Applied Machine
                      Learning, Algorithms and Models of Computation, Systems
                      Programming, Data Structures, Computer Architecture,
                      Discrete Structures, Elements of Syntax, Elements
                      Semantics & Pragmatics...
                    </p>
                    <p>Expected graduation: May 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-1 transluscent">
            <CardHeader>
              <CardTitle className="font-bold text-xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="h-full flex flex-col gap-4">
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col text-lg">
                    <h3 className="font-semibold">
                      Capital Defense Command, ROKA
                    </h3>
                    <h2 className="italic">
                      Exchange Systems Operator (Nov 2022-May 2024)
                    </h2>
                  </div>
                  <img src="/icons/cdc.svg" className="w-8" />
                </div>
                <p>
                  Managed Seoul's inter/intra military base communications via
                  commercial and military-grade call servers. Created and
                  maintained circuits for analog phone lines (and H/L), military
                  satellites, radio networks, CCTVs, emergency alarm systems,
                  etc.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col text-lg">
                    <h3 className="font-semibold">DeepMetrics</h3>
                    <h2 className="italic">
                      Software Engineer Intern (July-Oct 2022)
                    </h2>
                  </div>
                  <img src="/icons/deepmetrics.png" className="w-14" />
                </div>
                <p>
                  Handled data processing and analysis of vital files from
                  ventilated patients in Seoul National University Hospital in
                  order to develop an offline reinforcement learning algorithm
                  to assist clinicians with manual mechanical ventilator
                  control.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default About;
