import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../hooks";
import { PhotoIcon } from "../components";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

const PrivateLayout = ({ className = "privateLayout", children }: Props) => {
  const { onLogout, photoURL, displayName } = useAuthStore();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bgradial"
        style={{ position: "fixed", width: "100%", zIndex: 1000 }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/message">
                  <i className="fa-solid fa-comment"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/request">
                  <i className="fa-solid fa-users"></i>
                </Link>
              </li>
            </ul>
            <span className="navbar-text" onClick={onLogout}>
              {displayName!}{" "}
              <PhotoIcon
                src={photoURL!}
                alt={displayName!}
                className="iconPerfil"
              />
            </span>
          </div>
        </div>
      </nav>
      <section className={`${className}`}>
        <br /><br /><br />
        {children}</section>
    </>
  );
};

export default PrivateLayout;
