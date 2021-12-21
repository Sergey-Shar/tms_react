import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from "../components/Navbar";
import Figure from "../components/Figure"

export default function Navigation() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>

          <Route path="/figure/:id/:color">
            <Figure />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


