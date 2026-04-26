import { db } from "@server/database/client";
import { env } from "@server/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    camelCase: false,
  }),
  plugins: [openAPI()],
  basePath: "/api",
  advanced: {
    database: {
      generateId: false,
    },
  },
  trustedOrigins: [env.CLIENT_URL],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    password: {
      hash: (password: string) => Bun.password.hash(password),
      verify: ({ password, hash }) => Bun.password.verify(password, hash),
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,
    },
  },
});
