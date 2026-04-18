import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.url().startsWith("postgresql://"),
  CLIENT_URL: z.url(),
});

export const env = envSchema.parse(Bun.env);
