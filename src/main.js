import React from "react";
import Party from "./pages/Party";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Switch>
        <Route  path="/Party" component={Party} />
      </Switch>
    </>
  );
};

export default Main;
