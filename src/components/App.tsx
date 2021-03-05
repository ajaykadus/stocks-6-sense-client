import * as React from "react";
import Stocks from "./Stock/Stock";
import Users from "./User/User";
import AppHeader from "./AppHeader/AppHeader";

export default () => {
  return (
    <>
      <AppHeader />
      <Stocks />
      <Users />
    </>
  );
};
