import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SkillLogo(prop) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image 
            src={prop.logoImg}
            alt={prop.title}
            width={40}
            height={40}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{prop.title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
