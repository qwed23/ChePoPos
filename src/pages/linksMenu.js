import React, { useState } from "react";
import SplitFrame from "../compopments/splitedFrames";
const UserLinkGroups = () => {
  //demo array
  const [urlArray, setUrlArray] = useState([
    {
      name: "sports",
      links: [
        "https://www.producerspot.com/news/best-vst-plugins",
        "https://www.one.co.il/",
        "https://home.footybite.com/",
        "https://www.google.com/webhp?igu=1"
      ]
    },
    {
      name: "news",
      links: [
        "https://www.bbc.com/",
        "https://www.ynet.co.il/home/0,7340,L-8,00.html",
        "https://www.pcgamer.com/news/",
        "https://www.google.com/webhp?igu=1"
      ]
    }
  ]);


  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        zIndex: 222,
        backgroundColor: "darkgrey",
        position: 'absolute',
        color: 'white',
        left: 0,
        top: '10%',
        opacity:0.7,
        position: 'fixed'
        // THIS STYLE OBJECTE NEED TO BE CSS CUZE REACT DON'T SUPPORT BACKDROP FILTERS
      }}
    >
      {urlArray.map((item, index) => (
        <div style={{ border: "2px solid black" }}>
          <h2> {item.name} </h2>
          {item.links.map(ele => (
            <p> {ele}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default UserLinkGroups;
