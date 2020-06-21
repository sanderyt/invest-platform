import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./views/Home";
import Overview from "./views/Overview";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aanbod" component={Overview} />
          <Route path="/aanbod/:id" component={Detail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
