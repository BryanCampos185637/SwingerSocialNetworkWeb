import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Navigation from "./router/Navigation";
import { store } from "./store/store";
import "./index.css";

import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Navigation />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
