import { ChartNoAxesCombined } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-6 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center md:justify-center">
          <a href="/" className="flex items-center gap-0.5">
            <ChartNoAxesCombined className="md:w-12 md:h-12 sm:w-8 sm:h-8" />
            <span className="text-foreground md:text-4xl sm:text-xl font-semibold tracking-tighter">
              MyFinancialApp
            </span>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <Button asChild variant="outline" size="sm">
            <a href="/sign-in">Login</a>
          </Button>
          <Button asChild size="sm">
            <a href="/sign-up">Sign Up</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
