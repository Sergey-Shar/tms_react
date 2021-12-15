import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from '../components/Login';
import Post from '../components/Post';

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


