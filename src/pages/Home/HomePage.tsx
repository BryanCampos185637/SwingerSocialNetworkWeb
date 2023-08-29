import { LazyLoadImage } from "react-lazy-load-image-component";

import { PhotoIcon } from "../../components";
import { useAuthStore, useGetDataRandom } from "../../hooks";

const HomePage = () => {
  const { displayName, photoURL } = useAuthStore();
  const { users, getUrlImageRandom } = useGetDataRandom();

  return (
    <div className="container scroll-static pb-vh10">
      <div className="row justify-content-center">
        <article className="col-sm-12 col-md-7 mt-3">
          <div className="card shadow bgtransparent">
            <div className="card-body">
              <h5>¿Que estas pensando?</h5>
              <div className="d-flex gap-2">
                <PhotoIcon
                  src={photoURL!}
                  alt={displayName!}
                  width={40}
                  height={40}
                />
                <input
                  className="form-control"
                  placeholder="Escribe tu pensamiento hot"
                />
              </div>
              <hr className="separator" />
              <div className="d-flex justify-content-center">
                <button className="btn btn-sm btn-danger">
                  Foto/Video <i className="fa-solid fa-photo-film"></i>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      {/*publicaciones de los amigos*/}
      <div className="row justify-content-center mt-3">
        {users.map((item) => {
          return (
            <article className="col-sm-12 col-md-7 mt-4" key={item.id}>
              <div className="card bgtransparent shadow">
                <div className="card-body">
                  {/*acciones*/}
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      <PhotoIcon
                        src={item.avatar}
                        alt={`avatar ${item.first_name}`}
                      />
                      <p>
                        {item.first_name} {item.last_name}
                      </p>
                    </div>
                    <span>
                      <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
                    </span>
                  </div>
                  {/*Publicacion*/}
                  <div className="d-flex justify-content-center flex-column mt-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam beatae sapiente.
                    </p>
                    <LazyLoadImage
                      className="animate__animated animate__fadeIn imagePost"
                      src={getUrlImageRandom()}
                      alt={`Imagen random`}
                    />
                    <hr className="separator" />
                  </div>
                  {/*botones*/}
                  <div className="d-flex justify-content-between gap-1 mt-2">
                    <button className="btn btn-sm btn-danger btn-block">
                      Me gusta <i className="fa-solid fa-thumbs-up"></i>
                    </button>
                    <button className="btn btn-sm btn-danger btn-block">
                      Comentar <i className="fa-solid fa-comment"></i>
                    </button>
                    <button className="btn btn-sm btn-danger btn-block">
                      Compartir <i className="fa-solid fa-share"></i>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
