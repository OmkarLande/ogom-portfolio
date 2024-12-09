import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export function SkillLogo({ logoImg, title }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <div  className="flex flex-col justify-center items-center">
          <TooltipTrigger asChild>
            <div className="relative group p-2 transition-all duration-300 hover:scale-110">
              <Image
                src={logoImg}
                alt={title}
                width={200}
                height={200}
                className="rounded-full object-contain ring-2 ring-white group-hover:ring-og-pri"
              />
            </div>
          </TooltipTrigger>
          <p className="font-bold text-xl text-white">{title}</p>
        </div>
        <TooltipContent className="p-4 sm:p-2 bg-white text-og-dark rounded-md">
          <p className="text-lg font-medium sm:text-sm sm:font-light">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
