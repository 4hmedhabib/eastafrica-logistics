import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";
import Service from './elements/service/Service'

// Pages
import Startup from "./pages/Startup";
import AboutUs from "./pages/AboutUs";

// Import Css Here
import "./assets/scss/style.scss";
import BlogListView from "./components/blog/BlogListView";
import Contact from "./elements/contact/Contact";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route path="/" exact component={Startup} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/services" exact component={Service} />
          <Route path="/blogs" exact component={BlogListView} />
          <Route path="/contact" exact component={Contact} />

        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
