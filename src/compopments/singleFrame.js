import React from "react";

const SingleFrame = props => (
  <div style={props.iFrameWarpper}>
    <iframe
      style={props.iFrameStyle}
      title={props.urlArray}
      src={props.urlArray}
    />
  </div>
);

export default SingleFrame;
