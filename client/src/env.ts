import { z } from "zod";

const envSchema = z.object({
  API_URL: z.url(),
  AUTH_PATH: z.string().startsWith("/"),
});

export const env = envSchema.parse(process.env);
