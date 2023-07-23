import { useAuthStore } from "../../hooks";

const HomePage = () => {
  const { displayName } = useAuthStore();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Bienvenido {displayName}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
