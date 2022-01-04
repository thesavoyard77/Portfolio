import React from "react";
import Preview from "../views/Preview";
// import HomeLight from "../views/all-home-version/HomeLight";
// import HomeDark from "../views/all-home-version/HomeDark";
import Home from '../views/all-home-version/Home'
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/home-light" component={Home} />
          <Route path="/home-dark" component={HomeDark} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
