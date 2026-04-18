import { treaty } from "@elysiajs/eden";
import type { App } from "@server";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
});

const client = treaty<App>("http://localhost:3000");

function Index() {
  const [data, setData] = useState<{ message: string; success: boolean }>();

  const { mutate: sendRequest } = useMutation({
    mutationFn: async () => {
      try {
        const req = await client.get();
        if (req.data) setData(req.data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-6 items-center justify-center min-h-screen">
      <ModeToggle />
      <h1 className="text-5xl font-black">elysia-monorepo</h1>
      <h2 className="text-2xl font-bold">
        Bun + Elysia + Drizzle + better-auth + React
      </h2>
      <p>A typesafe fullstack monorepo</p>
      <div className="flex items-center gap-4">
        <Button onClick={() => sendRequest()}>Call API</Button>
      </div>
      {data && (
        <pre className="bg-gray-100 p-4 rounded-md">
          <code>
            Message: {data.message} <br />
            Success: {data.success.toString()}
          </code>
        </pre>
      )}
    </div>
  );
}

export default Index;
