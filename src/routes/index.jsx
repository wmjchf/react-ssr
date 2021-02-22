import React from "react";
import { Route } from "react-router-dom";
import Home from "../page/home/index.jsx";
import About from "../page/about/index.jsx";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </>
  );
};

export default Routes;
