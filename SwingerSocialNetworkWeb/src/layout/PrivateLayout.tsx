import { ReactElement } from "react";
import { useAuthStore } from "../hooks";

interface Props {
  children: ReactElement | ReactElement[];
  className?: string;
}

const PrivateLayout = ({ className = "privateLayout", children }: Props) => {
  const { onLogout } = useAuthStore();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bgradial">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-ligth"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link" onClick={onLogout}>
                Cerrar sesión
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className={className}>{children}</div>
    </>
  );
};

export default PrivateLayout;
