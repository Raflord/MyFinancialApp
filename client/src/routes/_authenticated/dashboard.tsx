import { createFileRoute } from "@tanstack/react-router";
import { Sidebar1 } from "@/components/Sidebar";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Sidebar1 />;
}
