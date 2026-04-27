import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.url(),
  VITE_AUTH_PATH: z.string().startsWith("/"),
  VITE_BASE_URL: z.url(),
});

const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error);
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
