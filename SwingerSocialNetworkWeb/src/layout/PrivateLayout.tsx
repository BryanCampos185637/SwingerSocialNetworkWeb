import { ReactElement } from "react";
import { useAuthStore } from "../hooks";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

const PrivateLayout = ({ className = "privateLayout", children }: Props) => {
  const { onLogout, photoURL, displayName } = useAuthStore();

  return (
    <>
      <nav className="navbar navbar-expand-lg bgradial">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Swingr
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Inicio <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/message">
                  Mensajes <i className="fa-solid fa-comment"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Solicitudes <i className="fa-solid fa-users"></i>
                </Link>
              </li>
            </ul>
            <span className="navbar-text" onClick={onLogout}>
              {displayName!}{" "}
              <img
                src={photoURL!}
                alt={displayName!}
                className="iconPerfil"
                width={35}
                height={35}
              />
            </span>
          </div>
        </div>
      </nav>
      <div className={className}>{children}</div>
    </>
  );
};

export default PrivateLayout;
