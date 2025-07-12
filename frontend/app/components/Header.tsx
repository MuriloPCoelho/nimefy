import { useEffect, useState } from "react"
import { NavLink } from "react-router"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const baseClass =
    "h-16 fixed top-0 left-0 right-0 bg-linear-to-b from-neutral-950 to-transparent flex items-center px-[2vw] transition-colors duration-500 z-50"

  useEffect(() => {
    setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0)
    })
  }, [])

  return (
    <header className={`${baseClass} ${isScrolled ? "bg-neutral-950" : ""}`}>
      <nav>
        <ul className="flex items-center justify-end gap-4">
          <li>
            <NavLink
              to="browse/series"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Animes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse/movies"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse/new"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Novos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse/popular"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Populares
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse/my-list"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Minha Lista
            </NavLink>
          </li>
          <li>
            <NavLink
              to="browse/categories"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              Categorias
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
