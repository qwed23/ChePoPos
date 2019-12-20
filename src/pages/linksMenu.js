import React, { useState } from "react";
import SplitFrame from "../compopments/splitedFrames";

const UserLinkGroups = (props) => {
  //demo array
  const [urlArray, setUrlArray] = useState('');

  const x= props.urlArray

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

      {props.urlArray.map((item, index) => (
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
