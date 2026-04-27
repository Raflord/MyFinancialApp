import { useForm } from "@tanstack/react-form";
import type { BetterFetchError } from "better-auth/react";
import { motion } from "motion/react";
import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { env } from "@/env";
import { authClient } from "@/lib/auth";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.email().max(100),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(50, {
      message: "Password must be less than 50 characters",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, {
      message: "Password must contain at least one number",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});

export function SignUpForm({ className }: React.ComponentProps<"div">) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState<BetterFetchError>();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email({
        name: value.name,
        email: value.email,
        password: value.password,
        callbackURL: `${env.VITE_BASE_URL}/dashboard`,
        fetchOptions: {
          onError(ctx) {
            setFormError(ctx.error);
          },
        },
      });
    },
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative w-full overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-12",
        className,
      )}
      aria-labelledby="glass-sign-up-title"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-foreground/4 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="mb-8 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-muted-foreground text-xs uppercase tracking-[0.28em]">
          Sign Up
        </div>
        <h1
          id="glass-sign-up-title"
          className="mt-3 font-semibold text-2xl text-foreground sm:text-3xl"
        >
          Create your account
        </h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Start taking care of your money
        </p>
      </div>

      <div className="mb-6 h-px flex-1 bg-border/70" />

      <form
        className="gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field
            name="name"
            validators={{
              onBlur: z
                .string()
                .min(3, "Name must be at least 3 characters long")
                .max(100),
            }}
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    placeholder="Alex Johnson"
                    autoComplete="name"
                    className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="email"
            validators={{
              onBlur: z.email("Enter a valid email"),
            }}
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="password"
            validators={{
              onBlur: z
                .string()
                .min(8, {
                  message: "Password must be at least 8 characters long",
                })
                .max(50, {
                  message: "Password must be less than 50 characters",
                })
                .regex(/[a-z]/, {
                  message:
                    "Password must contain at least one lowercase letter",
                })
                .regex(/[A-Z]/, {
                  message:
                    "Password must contain at least one uppercase letter",
                })
                .regex(/\d/, {
                  message: "Password must contain at least one number",
                })
                .regex(/[^a-zA-Z0-9]/, {
                  message:
                    "Password must contain at least one special character",
                }),
            }}
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <div>
            <label className="flex items-start gap-3 text-muted-foreground text-sm">
              <Checkbox
                id="sign-up-terms"
                checked={acceptedTerms}
                onCheckedChange={(checked) =>
                  setAcceptedTerms(Boolean(checked))
                }
              />
              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  terms of service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  privacy policy
                </button>
                .
              </span>
            </label>
          </div>

          {formError && (
            <p className="text-center text-destructive">{formError.message}</p>
          )}

          <Field>
            <Button
              type="submit"
              disabled={!acceptedTerms}
              className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Create account
            </Button>
            <FieldDescription className="text-center">
              Already have an account? <a href="/sign-in">Sign in</a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </motion.div>
  );
}
