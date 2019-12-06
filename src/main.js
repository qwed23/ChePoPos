import React ,{ useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import iFrameManager from "./pages/iframeManager.js";
import RSSFeed from './pages/rssFeed'

const Main = props => {



  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`/party/:status`} component={iFrameManager} />
        </Switch>
      </Router>  

      <RSSFeed></RSSFeed>
    </div>

  );
};

export default Main;
