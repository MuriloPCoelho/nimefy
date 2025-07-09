import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const baseClass =
    "h-16 fixed top-0 left-0 right-0 bg-linear-to-b from-neutral-950 to-transparent flex items-center px-[2vw] transition-colors duration-500 z-50";

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={`${baseClass} ${isScrolled ? "bg-neutral-950" : ""}`}>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="browse/genre/1"
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Animes
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Novos
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Populares
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Minha Lista
            </NavLink>
          </li>
          <li>
            <NavLink
              to=""
              className="text-gray-200 hover:text-gray-400 transition-colors active:text-white active:font-semibold"
            >
              Categorias
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
