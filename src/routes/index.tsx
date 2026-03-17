import { createFileRoute } from "@tanstack/react-router";
import { StartPage } from "../features/start/start-page.tsx";

export const Route = createFileRoute("/")({
  component: StartPage,
});
