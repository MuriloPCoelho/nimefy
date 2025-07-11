import Hero from "~/components/Hero";
import type { Route } from "./+types/Login";

export async function loader({ params }: Route.LoaderArgs) {
  return params.id;
}

const Genre = ({ params }: Route.ComponentProps) => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Genre;
