const ModalRegister = () => {
  return (
    <div
      className="modal"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bgblackligth animate__animated animate__zoomIn">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Registrarme
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ color: "white" }}
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>
          <div className="modal-body px-5 ">
            <div className="mt-3">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese un nombre"
              />
            </div>
            <div className="mt-3">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese un apellido"
              />
            </div>
            <div className="mt-3">
              <label>Correo electrónico:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Ingrese un correo electrónico"
              />
            </div>
            <div className="mt-3">
              <label>Contraseña:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Ingrese una contraseña"
              />
            </div>
            <div className="mt-3">
              <label>Fecha de nacimiento:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Ingrese un nombre"
              />
            </div>
            <div className="mt-3">
              <p>
                <input type="checkbox" className="mx-2" />
                Acepto términos y condiciones del servicio.
              </p>
            </div>

            <div className="mt-3">
              <button type="button" className="btn btn-danger btn-sm btn-block">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
