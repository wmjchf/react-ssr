import Home from "../page/home/index.jsx";
import About from "../page/about/index.jsx";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default Routes;
