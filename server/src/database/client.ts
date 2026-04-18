import { schema } from "@server/database/schema/index";
import { env } from "@server/env";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(env.DATABASE_URL, { schema, casing: "snake_case" });
