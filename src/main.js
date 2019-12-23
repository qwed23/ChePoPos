import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPageReader from "./pages/userPagesReader";
import UserLinkGroups from "./pages/linksMenu";

const Main = props => {
  const [nav, setNav] = useState("");
  const [urlArray, setUrlArray] = useState("");
  const [isLoading, setLoading] = useState(true);

  const submitHandler = () => {
    fetch("https://chepopo-1a6b5.firebaseio.com/saeed.json", {
      method: "POST",
      body: JSON.stringify(urlArray),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(responseData => {
        setUrlArray(prevUrl => [
          ...prevUrl,
          { id: responseData.name, ...urlArray }
        ]);
      });
  };

  useEffect(() => {
    fetch("https://chepopo-1a6b5.firebaseio.com/saeed.json")
      .then(response => response.json())
      .then(responseData => {
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

  return (
    <div>
      <button onClick={submitHandler}>send</button>
      <button onClick={() => (nav ? setNav(false) : setNav(true))}>nav</button>

      {isLoading ? (
        "Loading"
      ) : (
        <div>
          {nav && <UserLinkGroups urlArray={urlArray} />}
          <Router>
            <Switch>
              <Route
                exact
                path={`/party/:status/`}
                render={props => (
                  <UserPageReader {...props} urlArray={urlArray} />
                )}
              />
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
};

export default Main;
