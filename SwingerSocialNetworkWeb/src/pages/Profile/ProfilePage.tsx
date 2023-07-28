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
            className="border_radius"
            src={getUrlWallpaperRandom()}
            width={"100%"}
            style={{ opacity: "0.8" }}
          />
        </div>
        <div className="col-sm-12 col-md-9 d-flex justify-content-center content_img_profile">
          <div className="d-flex flex-column justify-content-center">
            <LazyLoadImage
              className="border_radius shadow"
              src={photoURL!}
              alt={`Foto de perfil ${displayName}`}
            />
            <p>{displayName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
