import { NavLink, useLocation, useNavigate } from "react-router-dom";
import navbarData from "../data/nav";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();

  const toggle = () => setIsOpen((open) => !open);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/movies?search=${search}`);
    setSearch("");
  }

  function isNavActive(path, isActive) {
    if (path === "/movies") {
      return isActive && pathname !== "/movies/new";
    }

    return isActive;
  }

  return (
    <nav className="navbar navbar-expand-lg boolflix-navbar fixed-top">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand boolflix-brand" to="/">
          BOOLFLIX
        </NavLink>

        <button className="navbar-toggler" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`navbar-collapse ${isOpen ? "show" : "collapse"}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-2">
            {navbarData.map((nav) => (
              <li key={nav.id} className="nav-item">
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    `nav-link boolflix-link ${
                      isNavActive(nav.path, isActive) ? "active" : ""
                    }`
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <form
            className="d-flex boolflix-search justify-content-center"
            onSubmit={handleSearch}
          >
            <input
              className="form-control"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Title, genre, director..."
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
