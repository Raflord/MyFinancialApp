import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "@/components/SignUp";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
});

function SignUp() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6">
      <SignUpForm />
    </div>
  );
}
