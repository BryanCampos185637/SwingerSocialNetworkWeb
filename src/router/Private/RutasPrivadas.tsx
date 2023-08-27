import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, MessagePage, ProfilePage, RequestsPage } from "../../pages";
import PrivateLayout from "../../layout/PrivateLayout";

const RutasPrivadas = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/request" element={<RequestsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </PrivateLayout>
  );
};

export default RutasPrivadas;
