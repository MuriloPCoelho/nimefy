import type { Route } from "./+types/Login";

export async function loader({ params }: Route.LoaderArgs) {
  return params
}

const Genre = ({ params }: Route.ComponentProps) => {
  return (
    <>
      <div className="bg-[url('./public/images/sky_of_radiance-x.png')] bg-cover bg-center h-[50vw]">
        {params.id}
      </div>
    </>
  );
};

export default Genre;
