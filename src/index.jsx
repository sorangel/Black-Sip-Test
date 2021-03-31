import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { routes } from "./constants";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { Setup } from "./config";
import { store } from "./redux";

import "./styles/globalStyles.scss";

const rootElement = document.getElementById("root");

const app = (
  <Setup store={store}>
    <Routes routes={routes} />
  </Setup>
);

ReactDOM.render(app, rootElement);

reportWebVitals();
