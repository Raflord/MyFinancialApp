import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const [checked, setChecked] = useState<boolean>(true);
  const { setTheme } = useTheme();

  if (checked) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  return (
    <div>
      <div className="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          className="peer data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:bg-background! absolute inset-0 data-[size=default]:h-[inherit] data-[size=default]:w-14 [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:group-data-[size=default]/switch:size-6.5 [&_span]:data-[state=checked]:translate-x-7 [&_span]:data-[state=checked]:rtl:-translate-x-7"
          aria-label="Switch with icon indicators"
        />
        <span className="peer-data-[state=checked]:text-muted-foreground/70 pointer-events-none relative ml-1.75 flex min-w-7 items-center text-center">
          <Sun className="size-4" aria-hidden="true" />
        </span>
        <span className="peer-data-[state=unchecked]:text-muted-foreground/70 pointer-events-none relative -ms-px flex min-w-7 items-center text-center">
          <Moon className="size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
