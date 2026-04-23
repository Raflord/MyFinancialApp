import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-150 w-150 animate-pulse rounded-full bg-foreground/3 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-150 w-150 animate-pulse rounded-full bg-foreground/3 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl space-y-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 font-medium text-foreground/70 text-sm backdrop-blur-xl transition-all duration-300 hover:border-border">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Welcome to MyFinancialApp</span>
        </div>

        <h1 className="font-bold text-6xl leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
          <span className="block">Master your</span>
          <span className="mt-4 block">finances</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          The all-in-one money management platform. Track your expenses, set
          smart budgets, and achieve your financial goals with total clarity.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
          <Button size="lg" className="group h-12 rounded-full px-8 text-base">
            <a href="/sing-in">Start Saving Today</a>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full px-8 text-base hover:bg-foreground/5"
          >
            <a href="/sign-up">Create an Account</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
