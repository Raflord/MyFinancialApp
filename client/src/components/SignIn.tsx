import { useForm } from "@tanstack/react-form";
import type { BetterFetchError } from "better-auth/react";
import { motion } from "motion/react";
import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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

export function SignInForm({ className }: React.ComponentProps<"div">) {
  const [formError, setFormError] = useState<BetterFetchError>();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email({
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group relative w-full max-w-lg overflow-hidden rounded-3xl border border-border/60 bg-card/85 p-8 backdrop-blur-xl sm:p-10",
        className,
      )}
      role="form"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-foreground/4 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="mb-8 space-y-2 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/5 px-3 py-1 text-muted-foreground text-xs uppercase tracking-[0.28em]">
          Sign In
        </div>
        <h1
          id="glass-sign-in-title"
          className="font-semibold text-2xl text-foreground sm:text-3xl"
        >
          Access your finances
        </h1>
        <p className="text-muted-foreground text-sm">
          Login with email and password.
        </p>
      </div>

      <div className="mb-6 h-px flex-1 bg-border/70" />

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          <form.Field
            name="email"
            validators={{
              onBlur: z.email("Invalid email"),
            }}
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor={field.name}>Email address</FieldLabel>
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
                    placeholder="Your password"
                    autoComplete="current-password"
                    className="h-11 rounded-2xl border-border/60 bg-background/60 px-4"
                    aria-invalid={isInvalid}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/*<div className="flex items-center justify-end text-muted-foreground text-sm">
            <button
              type="button"
              className="font-medium text-primary text-xs underline-offset-4 hover:cursor-pointer hover:underline"
            >
              Forgot password?
            </button>
          </div>*/}

          {formError && (
            <p className="text-center text-destructive">{formError.message}</p>
          )}

          <Field>
            <Button
              type="submit"
              variant="default"
              className="w-full rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-[0_20px_60px_-30px_rgba(79,70,229,0.75)] transition-transform duration-300 hover:-translate-y-1"
            >
              Login into account
            </Button>
            <FieldDescription className="text-center">
              Don't have an account? <a href="/sign-up">Sign up</a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>

      <p className="mt-6 text-center text-muted-foreground text-xs">
        By continuing you agree to our terms of service and privacy policy.
      </p>
    </motion.div>
  );
}
