import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPageReader from "./pages/userPagesReader";
// import RSSFeed from './pages/rssFeed'
import UserLinkGroups from "./pages/linksMenu";

const Main = props => {
  const [nav, setNav] = useState("");
  const [urlArray, setUrlArray] = useState('');
  const [isLoading, setLoading] = useState(true);

  console.log(isLoading);

  const submitHandler = () => {
    console.log(urlArray);
    fetch("https://chepopo-1a6b5.firebaseio.com/saeed.json", {
      method: "POST",
      body: JSON.stringify(urlArray),
      headers: { "Content-Type": "application/json" }
    }).then(response => {
      console.log(response);
      return response.json();
    });
    // .then(responseData => {
    //   setUrlArray(prevUrl => [
    //     ...prevUrl,
    //     { id: responseData.name, ...urlArray }
    //   ]);
    // });
  };

  useEffect(() => {
    fetch("https://chepopo-1a6b5.firebaseio.com/saeed.json")
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        const loadedUrl = [];
        for (const key in responseData) {
          loadedUrl.push({
            id: key,
            links: responseData[key].links,
            name: responseData[key].name
          });
        }
        setUrlArray(loadedUrl);
        setLoading(false);
      });
  }, []);

  console.log(urlArray);

  return (
    <div>
      <div></div>
      <button onClick={() => (nav ? setNav(false) : setNav(true))}>nav</button>
      <button onClick={submitHandler}>send</button>
 
      {nav && <UserLinkGroups urlArray={urlArray}/>}
      {isLoading ?  'Loading' : <div> {urlArray[0].name}</div>}
      {/* <Router>
        <Switch>
          <Route exact path={`/party/:status`} component={UserPageReader} />
        </Switch>
      </Router> */}

      {/* <RSSFeed /> */}
    </div>
  );
};

export default Main;
