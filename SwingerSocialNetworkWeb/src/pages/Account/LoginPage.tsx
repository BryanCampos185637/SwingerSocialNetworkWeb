import { CardAccount } from "./components/CardAccount";

const LoginPage = () => {
  return (
    <CardAccount title="Inicia sesión en Swinger Social">
      <form>
        <h6 className="text-center mt-3">
          Puedes iniciar sesión con tus credenciales
        </h6>
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
          <button className="btn btn-primary btn-sm mt-3 btn-block">
            Iniciar sesión
            <i className="fa-solid fa-paper-plane mx-1"></i>
          </button>
          <div className="d-flex justify-content-center gap-1">
            <button className="btn btn-primary btn-sm mt-2 btn-block">
              Iniciar con Google
              <i className="fa-brands fa-google mx-1"></i>
            </button>
            <button className="btn btn-primary btn-sm mt-2 btn-block">
              Iniciar con Facebook
              <i className="fa-brands fa-facebook mx-1"></i>
            </button>
          </div>

          <p className="mt-3">No tienes cuenta registrate aquí</p>
        </center>
      </form>
    </CardAccount>
  );
};

export default LoginPage;
