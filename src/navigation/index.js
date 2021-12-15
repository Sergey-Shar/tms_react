import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Posts from '../components/Posts';
import Login from '../components/Login';
import Post from '../components/Post'

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/posts/:postId">
            <Post />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="/">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


