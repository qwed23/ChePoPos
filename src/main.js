import React ,{ useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import iFrameManager from "./pages/iframeManager.js";
import {RSSParser } from '../node_modules/rss-parser'

const Main = props => {

const [rssIt,setRssit]= useState('');


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={`/party/:status`} component={iFrameManager} />
        </Switch>
      </Router>


  
    </div>
  );
};

export default Main;
