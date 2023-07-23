import { useState } from "react";

import { useAuthStore } from "../../hooks";
import { PhotoIcon } from "../../components";

const mocks = [1, 2, 3, 4];

const MessagePage = () => {
  const { photoURL, displayName } = useAuthStore();

  const [idUser, setIdUser] = useState(0);

  const handlerClick = (id: number) => {
    setIdUser(id);
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <h4>Chat</h4>
        <hr className="separator" />
        <ul className="list-group bgtransparent">
          <li className="list-group-item chat_msg">
            <label htmlFor="">Buscar</label>
            <input
              type="search"
              placeholder="Buscar persona"
              className="form-control"
            />
          </li>
          {mocks.map((item) => (
            <li
              className={`list-group-item chat ${
                item === idUser && "chatSelect"
              }`}
              key={item}
              onClick={() => handlerClick(item)}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center ">
                  <PhotoIcon
                    src={photoURL!}
                    alt={displayName!}
                    className="iconPerfil"
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
        <h4>{idUser !== 0 ? `${displayName} ${idUser}` : "Chat vacio"}</h4>
        <hr className="separator" />

        {idUser !== 0 && (
          <ul className="list-group bgtransparent">
            {mocks.map((item, index) => (
              <li className="list-group-item chat_msg m-2" key={item}>
                <div
                  className={`d-flex aling-item-center ${
                    index % 2 == 0 ? `flex-row-reverse` : `flex-row`
                  }`}
                >
                  {index % 2 == 0 ? (
                    <div className="msg p-2">
                      <span className="m-1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas, libero. Ab quos inventore rerum quo eos
                        facere.
                      </span>
                      <PhotoIcon
                        src={photoURL!}
                        alt={displayName!}
                        className="iconPerfil"
                      />
                    </div>
                  ) : (
                    <div className="msg p-2">
                      <PhotoIcon
                        src={photoURL!}
                        alt={displayName!}
                        className="iconPerfil m-1"
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
            <li className="list-group-item chat_msg m-2">
              <form className="d-flex justify-content-between gap-2">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje"
                  className="form-control"
                />
                <button type="submit" className="btn btn-danger btn-sm">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MessagePage;
