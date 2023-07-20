import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./router/Navigation";

import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
    </HashRouter>
  </React.StrictMode>
);
