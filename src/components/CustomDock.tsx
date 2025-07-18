import { useState, useRef } from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/context/ThemeContext";
import ElasticSlider from "@/components/ui/ElasticSlider";
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
  IconPlayerPlay,
  IconPlayerPause,
  IconVolume3,
  IconVolume,
  IconBrandLinkedin,
  IconArrowsMaximize,
  IconArrowsMinimize,
} from "@tabler/icons-react";
import { useIsMobile } from "@/hooks/useMobile";

const CustomDock = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/JunehyukYoo-Resume.pdf";
    link.download = "JunehyukYoo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen((prev) => !prev);
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100; // Convert from 0-100 to 0-1
    }
  };

  return (
    <Dock className={className}>
      <audio ref={audioRef} src="/songs/Kujaku.mp3" loop />
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon
            className="hover:scale-120 transition-all duration-300 ease-in-out"
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
          <DockIcon
            className="hover:scale-120 transition-all duration-300 ease-in-out"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/junehyuk-yoo-a0b2011a0",
                "_blank"
              )
            }
          >
            <IconBrandLinkedin stroke={1.7} />
          </DockIcon>
        </TooltipTrigger>
        <TooltipContent>
          <p>LinkedIn</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon
            className="hover:scale-120 transition-all duration-300 ease-in-out"
            onClick={handleDownload}
          >
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
          <DockIcon
            className="hover:scale-120 transition-all duration-300 ease-in-out"
            onClick={togglePlay}
          >
            {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
          </DockIcon>
        </TooltipTrigger>
        <TooltipContent>{isPlaying ? "Pause" : "Play"}</TooltipContent>
      </Tooltip>
      {!isMobile && (
        <ElasticSlider
          className="mr-2"
          leftIcon={<IconVolume3 />}
          rightIcon={<IconVolume />}
          startingValue={0}
          defaultValue={50}
          maxValue={100}
          onChange={handleVolumeChange}
        />
      )}

      <Separator orientation="vertical" />
      {!isMobile && (
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon
              className="hover:scale-120 transition-all duration-300 ease-in-out"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isFullscreen ? "Exit fullscreen" : "Fullscreen"}</p>
          </TooltipContent>
        </Tooltip>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <DockIcon
            className="hover:scale-120 transition-all duration-300 ease-in-out"
            onClick={toggleTheme}
          >
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
