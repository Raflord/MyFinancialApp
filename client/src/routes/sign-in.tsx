import { createFileRoute } from "@tanstack/react-router";
import { SignInForm } from "@/components/SignIn";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

function SignIn() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6">
      <SignInForm />
    </div>
  );
}
