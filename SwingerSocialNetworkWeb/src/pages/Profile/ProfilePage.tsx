import { LazyLoadImage } from "react-lazy-load-image-component";

import { useAuthStore, useGetDataRandom } from "../../hooks";

const ProfilePage = () => {
  const { getUrlWallpaperRandom } = useGetDataRandom();
  const { photoURL, displayName, email } = useAuthStore();

  return (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-9 mt-3">
          <LazyLoadImage
            className="border_radius shadow"
            src={getUrlWallpaperRandom()}
            width={"100%"}
            style={{ opacity: "0.8" }}
          />
        </div>
        <div className="col-sm-12 col-md-9 d-flex justify-content-center align-items-start content_img_profile">
          <div className="d-flex flex-column justify-content-center">
            <LazyLoadImage
              className="border_radius shadow"
              src={photoURL!}
              alt={`Foto de perfil ${displayName}`}
            />
            <p>{displayName}</p>
          </div>
          <div style={{ position: "absolute", marginTop: "25vh" }}>
            <p className="my-description">
              Soy un hombre felizmente casado, junto a mi esposa nos gusta
              disfrutar de nuevas experiencias sexuales con otras parejas o
              incluso tríos con chicas o chicos solteros.
            </p>

            <ul>
              <li>
                <a href="">Vive en Sonsonate</a>
              </li>
              <li>
                <a href="">De Sonsonate, El Salvador</a>
              </li>
              <li>
                <a href="">Miembre desde Marzo, 2023.</a>
              </li>
            </ul>
            <div>
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <button
                    className="nav-link nav_select"
                    aria-current="page"
                  >
                    Mi perfil
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">
                    Información personal
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">
                    Fotos
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link">
                    Videos
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
