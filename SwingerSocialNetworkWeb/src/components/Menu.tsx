import { memo, useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";

import { useAuthStore } from "../hooks";
import NavLinkMenu from "./NavLinkMenu";

const Menu = () => {
  const btnToggle = useRef<any>(null);

  const { onLogout } = useAuthStore();

  const toggleMenu = useCallback(() => {
    btnToggle.current.click();
  }, [btnToggle]);

  return (
    <nav className="navbar bg-body-tertiary bglinear">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          Swingr
        </NavLink>
        <button
          ref={btnToggle}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bgblackligth"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header ">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Swingr
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <NavLinkMenu
                to="/"
                onClick={toggleMenu}
                icon="fa-solid fa-house"
                title="Inicio"
              />
              <NavLinkMenu
                to="/message"
                onClick={toggleMenu}
                icon="fa-solid fa-comment"
                title="Mensajes"
              />

              <NavLinkMenu
                to="/request"
                onClick={toggleMenu}
                icon="fa-solid fa-users"
                title="Solicitudes"
              />

              <NavLinkMenu
                to="/profile"
                onClick={toggleMenu}
                icon="fa-solid fa-user"
                title="Perfil"
              />

              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={onLogout}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-circle-xmark"></i> Cerrar sesión
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Menu);
