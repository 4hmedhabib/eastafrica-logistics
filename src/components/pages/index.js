import Home01 from "./Home01";
import TeamGrid from "./TeamGrid";
import OverView from "./OverView";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Blog from "./Blog";
import BlogGrid from "./BlogGrid";
import RiskManagement from "./RiskManagement";
import Portfolio from "./Portfolio";
import Portfolio2 from "./Portfolio2";
import Portfolio3 from "./Portfolio3";
import Contact01 from "./Contact01";
import BlogSingle from "./BlogSingle";

const routes = [
  { path: "/", element: Home01  },
  { path: "/about-v1", element: AboutUs },
  { path: "/about-v2", element: TeamGrid },
  { path: "/about-v3", element: OverView },
  { path: "/services-v1", element: Services },
  { path: "/services-v2", element: RiskManagement },
  { path: "/portfolio-v3", element: Portfolio },
  { path: "/portfolio-v2", element: Portfolio2 },
  { path: "/portfolio-v1", element: Portfolio3 },
  { path: "/blog", element: Blog },
  { path: "/blog-grid", element: BlogGrid },
  { path: "/contact-v1", element: Contact01 },
  { path: "/blog-single", element: BlogSingle },
];

export default routes;
