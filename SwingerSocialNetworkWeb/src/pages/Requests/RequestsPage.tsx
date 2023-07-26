import { PhotoIcon } from "../../components";
import { useGetDataRandom } from "../../hooks";

const RequestsPage = () => {
  const { users } = useGetDataRandom(2);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-7 mt-3">
          <h4>Solicitudes de amistad</h4>
          <hr className="separator" />
          <ul className="list-group bgtransparent">
            {users.map((item) => {
              const nameComplete = `${item.first_name} ${item.last_name}`;
              return (
                <li key={item.id} className="list-group-item request">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <PhotoIcon
                        src={item.avatar!}
                        alt={nameComplete}
                        className="iconPerfil"
                        width={60}
                        height={60}
                      />
                      <div>
                        <span className="mx-2">{nameComplete}</span>
                      </div>
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        id="btnGroupDrop1"
                        type="button"
                        className="btn btn-danger btn-sm dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Acciones
                      </button>
                      <ul
                        className="dropdown-menu "
                        aria-labelledby="btnGroupDrop1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Aceptar
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Rechazar
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            Ver perfil
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
