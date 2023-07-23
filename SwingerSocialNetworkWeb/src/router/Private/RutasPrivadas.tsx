import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, MessagePage } from "../../pages";
import PrivateLayout from "../../layout/PrivateLayout";

const RutasPrivadas = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </PrivateLayout>
  );
};

export default RutasPrivadas;
