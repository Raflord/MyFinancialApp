import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { SignupForm } from "@/components/sign-up";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
});

function SignUp() {
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center min-h-screen">
      <ModeToggle />
      <SignupForm />
    </div>
  );
}

export default SignUp;
