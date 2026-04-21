import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChartNoAxesCombined, LogIn } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-linear-to-br from-primary to-muted shadow-lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-4xl font-bold flex justify-center items-center gap-0.5 text-foreground md:text-7xl"
          >
            <ChartNoAxesCombined className="md:w-20 md:h-20 w-14 h-14 text-muted-foreground" />
            <span className="tracking-tighter">MyFinancialApp</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            Take control of your money with MyFinancialApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" variant="outline" className="gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button size="lg" className="gap-2">
              Sign Up
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
