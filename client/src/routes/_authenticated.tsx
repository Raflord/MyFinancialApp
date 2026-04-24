import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { authClient } from "@/lib/auth";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    const session = await authClient.getSession();
    if (!session) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: location.href },
      });
    }
    return { user: session.data?.user };
  },
  component: () => <Outlet />,
});
