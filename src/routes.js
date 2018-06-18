import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Admin from "./components/Admin/Admin";
// Routing refers to determining how your application responds to a client request
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/login" component={Login} />
    <Route path="/admin" component={Admin} />
    <Route path="*" render={() => <div>Error: 404</div>} />
  </Switch>
);
