import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Stocks from "./Stock/Stock";
import Users from "./User/User";
import AppHeader from "./AppHeader/AppHeader";

export default () => {
  return (
    <>
      <HashRouter>
        <AppHeader />
        <Switch>
          <Route path="/" exact>
            <Stocks />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};
