import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../src/routes/index.jsx";
import { getClientStore } from "../src/store";

const store = getClientStore();

const router = <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>;

const provider = <Provider store={store}>{router}</Provider>;

ReactDom.hydrate(provider, document.getElementById("root"));
