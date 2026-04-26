import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignInForm } from "@/components/SignIn";
import { authClient } from "@/lib/auth";

export const Route = createFileRoute("/sign-in")({
  beforeLoad: async ({ location }) => {
    const session = await authClient.getSession();
    if (session.data?.user) {
      throw redirect({
        to: "/dashboard",
        search: { redirect: location.href },
      });
    }
  },
  component: SignIn,
});

function SignIn() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6">
      <SignInForm />
    </div>
  );
}
