import { PhotoIcon } from "../../components";
import { useAuthStore } from "../../hooks";

const HomePage = () => {
  const { displayName, photoURL } = useAuthStore();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 mt-3">
          <div className="card box_add_publication bgtransparent">
            <div className="card-body">
              <div className="d-flex gap-2">
                <PhotoIcon src={photoURL!} alt={displayName!} width={40} height={40}/>
                <input
                  className="form-control"
                  placeholder="Escribe tu pensamiento hot"
                />
              </div>
              <hr className="separator" />
              <div className="d-flex justify-content-center">
                <button className="btn btn-sm btn-danger">Foto/Video <i className="fa-solid fa-photo-film"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
