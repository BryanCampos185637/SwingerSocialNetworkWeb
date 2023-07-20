import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../../pages";
import { PublicLayout } from "../../layout/PublicLayout";

const RutasPublicas = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </PublicLayout>
  );
};

export default RutasPublicas;
