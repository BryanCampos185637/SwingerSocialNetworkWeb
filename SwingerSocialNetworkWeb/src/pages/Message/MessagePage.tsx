import { useMemo, useState } from "react";

import { useAuthStore, useGetDataRandom } from "../../hooks";
import { PhotoIcon } from "../../components";
import { User } from "../../hooks/useGetDataRandom";

const mocks = [1, 2, 3, 4];

const MessagePage = () => {
  const { users } = useGetDataRandom();
  const { photoURL, displayName } = useAuthStore();
  const [filterUser, setFilterUser] = useState("");
  const [user, setUser] = useState<undefined | User>();

  const handlerClick = (id: number) => {
    setUser(users.filter((p) => p.id === id)[0]);
  };

  const lstUser = useMemo(() => {
    if (filterUser !== "" && filterUser.length >= 1) {
      return users.filter((p) =>
        `${p.first_name} ${p.last_name}`
          .toLocaleLowerCase()
          .includes(filterUser)
      );
    } else {
      return users;
    }
  }, [filterUser, users]);

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
              value={filterUser}
              onChange={(event) => {
                setFilterUser(event.target.value);
              }}
            />
          </li>
          {lstUser.map((item) => (
            <li
              className={`list-group-item chat ${
                item.id === user?.id && "chatSelect"
              }`}
              key={item.id}
              onClick={() => handlerClick(item.id)}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center ">
                  <PhotoIcon
                    src={item.avatar!}
                    alt={`${item.first_name} ${item.last_name}`}
                    className="iconPerfil"
                  />
                  <div>
                    <span className="mx-2">
                      {`${item.first_name} ${item.last_name}`}
                      <br />
                      <i className="mx-2">Lorem ipsum dolor sit amet...</i>
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
        <h4>
          {user !== undefined
            ? `${user.first_name} ${user.last_name}`
            : "Chat vacio"}
        </h4>
        <hr className="separator" />

        {user !== undefined && (
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
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
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
