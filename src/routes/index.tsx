import { createFileRoute } from "@tanstack/react-router";
import { YellowCard } from "@/components/yellow-card";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <YellowCard />;
}
