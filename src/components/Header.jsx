import { NavLink } from "react-router-dom";
import navbarData from "../data/nav";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);

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
                  end={nav.path === "/"}
                  onClick={close}
                  className={({ isActive }) =>
                    `nav-link boolflix-link ${isActive ? "active" : ""}`
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <form
            className="d-flex boolflix-search justify-content-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Titolo, genere, attore..."
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
