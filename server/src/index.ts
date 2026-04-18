import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { betterAuthPlugin, OpenAPI } from "./plugins/better-auth";

const app = new Elysia()
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(
    openapi({
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    }),
  )
  .use(betterAuthPlugin)
  .get("/", () => {
    const data = {
      message: "Hello from API",
      success: true,
    };
    return data;
  })
  .get(
    "/user",
    ({ user }) => {
      return user;
    },
    {
      auth: true,
    },
  )
  .listen(process.env.PORT ?? 8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
