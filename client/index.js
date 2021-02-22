import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../src/routes/index.jsx";

const router = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDom.hydrate(router, document.getElementById("root"));
