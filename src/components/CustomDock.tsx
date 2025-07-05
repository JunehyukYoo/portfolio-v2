import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  IconBrandGithub,
  IconFileCv,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

const CustomDock = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/JunehyukYoo-Resume.pdf";
    link.download = "JunehyukYoo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Dock className={className}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon
            onClick={() =>
              window.open("https://github.com/JunehyukYoo", "_blank")
            }
          >
            <IconBrandGithub stroke={1.7} />
          </DockIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>Github</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon onClick={handleDownload}>
            <IconFileCv stroke={1.7} />
          </DockIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>Resume</p>
        </TooltipContent>
      </Tooltip>
      <Separator orientation="vertical" />
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon onClick={toggleTheme}>
            {theme === "light" ? <IconMoon /> : <IconSun />}
          </DockIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>Toggle theme</p>
        </TooltipContent>
      </Tooltip>
    </Dock>
  );
};

export default CustomDock;
