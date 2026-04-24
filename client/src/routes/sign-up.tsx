import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignUpForm } from "@/components/SignUp";
import { authClient } from "@/lib/auth";

export const Route = createFileRoute("/sign-up")({
  beforeLoad: async ({ location }) => {
    const session = await authClient.getSession();
    if (session) {
      throw redirect({
        to: "/dashboard",
        search: { redirect: location.href },
      });
    }
  },
  component: SignUp,
});

function SignUp() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6">
      <SignUpForm />
    </div>
  );
}
