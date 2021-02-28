import Home from "../page/home/index.jsx";
import About from "../page/about/index.jsx";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData:Home.loadData
  },
  {
    path: "/about",
    component: About,
    loadData:About.loadData
  },
];

export default Routes;
