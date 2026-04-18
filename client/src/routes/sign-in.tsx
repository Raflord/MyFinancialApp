import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { SigninForm } from "@/components/sign-in";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

function SignIn() {
  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center min-h-screen">
      <ModeToggle />
      <SigninForm />
    </div>
  );
}

export default SignIn;
