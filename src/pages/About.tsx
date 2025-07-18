import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { IconCloud } from "@/components/ui/icon-cloud";
import FadeContent from "@/components/FadingContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/context/ThemeContext";
import { IconsLight, IconsDark } from "@/lib/cloudIcons";

const About = () => {
  const { theme } = useTheme();
  return (
    <div className="relative h-full w-full grid justify-center">
      <FadeContent
        blur={true}
        duration={400}
        easing="ease-in"
        delay={0.2}
        initialOpacity={0.5}
      >
        <div className="relative h-full pt-28 pl-10 pr-10 pb-10 grid md:grid-cols-3 grid-cols-1 gap-4 z-10 overflow-scroll">
          <Card className="col-span-1 transluscent h-full overflow-x-scroll">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
              <Avatar className="w-60 h-60 rounded-[30%]">
                <AvatarImage src="/photos/profile2.jpeg" />
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
                  <CardTitle className="font-bold text-2xl">
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
                      <div className="flex flex-wrap gap-1 p-2">
                        {[
                          "Python",
                          "C",
                          "C++",
                          "Java",
                          "Javascript",
                          "Typescript",
                          "Ruby",
                          "Assembly",
                        ].map((s, i) => {
                          return (
                            <span
                              key={i}
                              className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                              {s}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold text-lg">
                        Technical Skills + Concepts
                      </h2>
                      <div className="flex flex-wrap gap-1 p-2">
                        {[
                          "OOP",
                          "Fullstack Development",
                          "Low-level Programming",
                          "Machine Learning",
                        ].map((s, i) => {
                          return (
                            <span
                              key={i}
                              className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                              {s}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold ">
                        Frameworks, Libraries, Tools
                      </h2>
                      <div className="flex flex-wrap gap-1 p-2">
                        {[
                          "React+Vite",
                          "Node.js",
                          "PyTorch",
                          "Numpy",
                          "Vim",
                          "Git",
                        ].map((s, i) => {
                          return (
                            <span
                              key={i}
                              className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                              {s}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold text-lg">Human Languages</h2>
                      <div className="flex flex-wrap gap-1 p-2">
                        {[
                          "English (fluent)",
                          "Korean (semi-fluent)",
                          "Mandarin (beginner)",
                        ].map((s, i) => {
                          return (
                            <span
                              key={i}
                              className="bg-blue-500/15 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                              {s}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </TabsContent>
              </Tabs>
            </Card>
            {/* Education */}
            <Card className="transluscent">
              <CardHeader>
                <CardTitle className="font-bold text-2xl">Education</CardTitle>
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
                  <CardDescription className="flex flex-col">
                    <p>Cumulative GPA: 3.80</p>
                    <p>
                      Relevant coursework: Relevant coursework: Applied Machine
                      Learning, Algorithms and Models of Computation, Systems
                      Programming, Data Structures, Computer Architecture,
                      Discrete Structures, Elements of Syntax, Elements
                      Semantics & Pragmatics...
                    </p>
                    <p>Expected graduation: May 2026</p>
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-1 transluscent">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">Experience</CardTitle>
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
                <CardDescription className="text-md">
                  Managed Seoul's inter/intra military base communications via
                  commercial and military-grade call servers. Created and
                  maintained circuits for analog phone lines (and H/L), military
                  satellites, radio networks, CCTVs, emergency alarm systems,
                  etc.
                </CardDescription>
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
                <CardDescription className="text-md">
                  Handled data processing and analysis of vital files from
                  ventilated patients in Seoul National University Hospital in
                  order to develop an offline reinforcement learning algorithm
                  to assist clinicians with manual mechanical ventilator
                  control.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeContent>
    </div>
  );
};

export default About;
