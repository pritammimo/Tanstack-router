import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/about")({
  component: ()=><div>About</div>
});