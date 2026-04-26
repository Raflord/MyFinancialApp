import { createFileRoute, Outlet } from "@tanstack/react-router";
import { authClient } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (!session.data?.user) {
      throw Route.redirect({
        to: "/sign-in",
      });
    }
    return { user: session.data?.user };
  },
  component: () => <Outlet />,
});
