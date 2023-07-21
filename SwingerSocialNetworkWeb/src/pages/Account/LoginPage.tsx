import { useAuthStore } from "../../hooks";
import { CardAccount } from "./components/CardAccount";

const LoginPage = () => {

  const {onLoginWhitGoogle}= useAuthStore();

  return (
    <>
      <div className="card_welcome">
        <h3>Swingr</h3>
        <p>
          Swingr es la plataforma digital para compartir tu estilo de vida con
          tus amigos, atrevete a experimentar un nuevo mundo.
        </p>
      </div>
      <CardAccount title="Bienvenido | Bienvenida">
        <form>
          <div className="mt-3">
            <label>Correo:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Escribe tu correo"
            />
          </div>
          <div className="mt-3">
            <label>Contraseña:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <center>
            <button className="btn btn-danger btn-sm mt-3 btn-block">
              Iniciar sesión
              <i className="fa-solid fa-paper-plane mx-1"></i>
            </button>
            <div
              className="d-flex justify-content-center gap-1 mt-1"
              id="btn_social_network"
            >
              <button type="button" className="btn  btn-danger btn-sm mt-2 btn-block" onClick={onLoginWhitGoogle}>
                Iniciar con Google
                <i className="fa-brands fa-google mx-1"></i>
              </button>
              <button className="btn  btn-danger btn-sm mt-2 btn-block">
                Iniciar con Facebook
                <i className="fa-brands fa-facebook mx-1"></i>
              </button>
            </div>
            <hr className="separator" />
            <p className="mt-3">No tienes cuenta registrate aquí</p>
          </center>
        </form>
      </CardAccount>
    </>
  );
};

export default LoginPage;
