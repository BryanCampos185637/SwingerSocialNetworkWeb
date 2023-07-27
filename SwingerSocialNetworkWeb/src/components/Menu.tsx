import { memo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../hooks";

const Menu = () => {
  const btnToggle = useRef<any>(null);

  const { onLogout } = useAuthStore();

  const toggleMenu = useCallback(() => {
    btnToggle.current.click();
  }, [btnToggle]);

  return (
    <nav className="navbar bg-body-tertiary bglinear">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Swingr
        </Link>
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
          className="offcanvas offcanvas-end bglinear"
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
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={toggleMenu}
                >
                  <i className="fa-solid fa-house"></i> Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/message" onClick={toggleMenu}>
                  <i className="fa-solid fa-comment"></i> Mensajes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/request" onClick={toggleMenu}>
                  <i className="fa-solid fa-users"></i> Solicitudes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile" onClick={toggleMenu}>
                  <i className="fa-solid fa-user"></i> Perfil
                </Link>
              </li>
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
