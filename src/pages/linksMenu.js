import React from "react";

const UserLinkGroups = props => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        zIndex: 222,
        backgroundColor: "darkgrey",
        color: "white",
        left: 0,
        top: "10%",
        opacity: 0.7,
        position: "fixed"
      }}
    >
      {props.urlArray.map(item => (
        <div style={{ border: "2px solid black" }}>
          <h2> {item.name} </h2>
          <ul> 
          {item.links.map(element => (
            <li>{element}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserLinkGroups;
