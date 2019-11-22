import React from "react";
import Party from "./pages/Party.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`/party/:status`} component={Party} />
          <Route path={`/`} render={(props)=>null} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
