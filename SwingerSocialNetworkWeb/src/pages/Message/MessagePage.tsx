import { useState } from "react";
import { useAuthStore } from "../../hooks";

const mocks = [1, 2, 3, 4, 57, 8, 89, 84];

const MessagePage = () => {
  const { photoURL, displayName } = useAuthStore();

  const [idUser, setIdUser] = useState(0);

  const handlerClick = (id: number) => {
    setIdUser(id);
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <h4>
          Mensajes <i className="fa-solid fa-comment"></i>
        </h4>
        <hr className="separator" />
        <ul className="list-group bgtransparent">
          <li className="list-group-item chat">
            <input
              type="search"
              placeholder="Buscar persona"
              className="form-control"
            />
          </li>
          {mocks.map((item, index) => (
            <li
              className={`list-group-item chat ${
                item === idUser && "chatSelect"
              }`}
              key={item}
              onClick={() => handlerClick(item)}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center ">
                  <img
                    src={photoURL!}
                    alt={displayName!}
                    className="iconPerfil"
                    width={35}
                    height={35}
                  />
                  <div>
                    <span className="mx-2">
                      {displayName!}
                      <br />
                      <i className="mx-2">Mensaje ...</i>
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center ">
                  <span>00/00/00000</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-sm-8">
        <h4>{displayName}</h4>
        <hr className="separator" />

        {idUser !== 0 && (
          <ul className="list-group bgtransparent">
            {mocks.map((item, index) => (
              <li className="list-group-item chat m-2" key={item}>
                <div
                  className={`d-flex aling-item-center ${
                    index % 2 == 0 ? `flex-row-reverse` : `flex-row`
                  }`}
                >
                  {index % 2 == 0 ? (
                    <div className="chatSelect p-2">
                       <span className="m-1">
                        Non quas minus repellendus maxime quidem consequatur
                        ipsam.
                      </span>
                      <img
                        src={photoURL!}
                        alt={displayName!}
                        className="iconPerfil"
                        width={35}
                        height={35}
                      />
                     
                    </div>
                  ) : (
                    <div className="chatSelect p-2">
                      <img
                        src={photoURL!}
                        alt={displayName!}
                        className="iconPerfil m-1"
                        width={35}
                        height={35}
                      />
                      <span>
                        Non quas minus repellendus maxime quidem consequatur
                        ipsam.
                      </span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessagePage;
