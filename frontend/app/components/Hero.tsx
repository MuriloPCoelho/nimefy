import type { ReactNode } from "react";

interface HeroProps {
  children?: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="mask-b-from-70% mask-b-to-100% bg-[url('/images/sky_of_radiance-x.png')] bg-cover bg-center h-[50vw]">
      {children}
    </div>
  );
};

export default Hero;
