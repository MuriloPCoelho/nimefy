import type { ReactNode } from "react";
import { Link } from "react-router";

interface SectionProps {
  title: string;
  children: ReactNode;
  linkTo?: string;
}

const Section = ({ title, linkTo, children }: SectionProps) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        {linkTo && (
          <Link
            to={linkTo}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Veja mais
          </Link>
        )}
      </div>
      <div className="flex gap-2 overflow-auto px-[4%] xl:px-14">
        {children}
      </div>
    </section>
  );
};

export default Section;
