import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen px-2">
      <Navbar />
    </div>
  );
}
