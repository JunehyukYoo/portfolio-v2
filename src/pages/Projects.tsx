import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import FadeContent from "@/components/FadingContent";
import { IconCode, IconWorldWww } from "@tabler/icons-react";

const PROJECT_LIST = [
  {
    title: "Openfloor",
    description:
      "Openfloor is a fullstack web application designed to facilitate structured debates for students and enthusiasts. Built with React and TypeScript on the frontend and Express.js on the backend, it uses Prisma ORM and passport-local for secure session-based authentication. Users can register, join debates, and justify their arguments in a clean, responsive interface.",
    skills: [
      "React",
      "Vite",
      "Node.js",
      "Typescript",
      "HTML",
      "CSS/Tailwind",
      "Prisma ORM",
      "PostgreSQL",
      "Passport.js",
    ],
    github: "https://github.com/JunehyukYoo/openfloor",
    website: "https://openfloor-debate.vercel.app",
    image: "/photos/openfloor.png",
  },
  {
    title: "Portfolio v2",
    description:
      "My personal portfolio showcasing myself, my skills, my experience, and my projects. Built with React + Vite + TS + Tailwind and a lot of love.",
    skills: ["React", "Vite", "Node.js", "Typescript", "HTML", "CSS/Tailwind"],
    github: "https://github.com/JunehyukYoo/portfolio-v2",
    website: "/",
  },
  {
    title: "Competify",
    description:
      "Assisted in development of a full-stack web application promoting habit-building through interactive and social competitions. Focused on fixing bugs and tweaking function logic during production.",
    skills: ["React", "Node.js", "Typescript", "Prisma ORM", "PostgreSQL"],
    github: "https://github.com/KKeySimon/Competify",
    website: "https://competify.vercel.app",
  },
  {
    title: "Portfolio v1",
    description:
      "My original portfolio website. Built with React + Vite + TS + Tailwind.",
    skills: ["React", "Vite", "Node.js", "Typescript", "HTML", "CSS/Tailwind"],
    github: "https://github.com/JunehyukYoo/portfolio-v1",
    website: "https://junehyukyoo.com",
  },
] as {
  title: string;
  description: string;
  skills: string[];
  github: string;
  website: string;
  image?: string;
}[];

const Projects = () => {
  return (
    <div className="relative size-full pt-28 md:pl-30 md:pr-30 gap-4 pl-10 pr-10 pb-15">
      <FadeContent
        blur={true}
        duration={400}
        easing="ease-in"
        delay={0.2}
        initialOpacity={0.5}
        className="relative size-full grid md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-6"
      >
        {PROJECT_LIST.map((p) => {
          return (
            <Card key={p.title} className="transluscent">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold">
                  {p.title}
                </CardTitle>
                <CardAction className="flex gap-4">
                  <IconCode
                    className="hover:cursor-pointer hover:scale-120 transition-all duration-300 ease"
                    onClick={() =>
                      window.open(
                        `${p.github}`,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  />
                  <IconWorldWww
                    className="hover:cursor-pointer hover:scale-120 transition-all duration-300 ease"
                    onClick={() =>
                      window.open(
                        `${p.website}`,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  />
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col">
                <div className="flex flex-col justify-between gap-4">
                  <CardDescription className="text-lg">
                    {p.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {p.skills.map((s, i) => {
                      return (
                        <span
                          key={i}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {s}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </FadeContent>
    </div>
  );
};

export default Projects;
