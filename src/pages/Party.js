import React, { useState, useReducer } from "react";

const initState = { idx: 0, split: false };

const toolsReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, idx: state.idx + 1 };
    case "MINUS":
      return { ...state, idx: state.idx - 1 };
      case "SPLIT":
      return  { ...state, split: state.split ? false : true }
    default:
      throw new Error("didnt work");
  }
};

const Party = () => {
  const [state, dispatch] = useReducer(toolsReducer, initState);
  const [url, setUrl] = useState("");
  const [urlArray, setUrlArray] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };

  const splitFrame = urlArray.map(url => <iframe key={url} src={url}></iframe>);
  const oneFrame =  <iframe title={urlArray[state.idx]} src={urlArray[state.idx]}></iframe>;
  return (
    <div className="party">
      {/* here {urlArray} */}
      <form onSubmit={submitHandler}>
        <input
          value={url}
          onChange={e => {
            setUrl(e.target.value);
          }}
        />
        <button type="submit"> click</button>
      </form>

      {state.idx + 1}/{urlArray.length + 1}
      <button onClick={() => {}}> + </button>
      <button onClick={() => {}}> - </button>
      <button onClick={() => dispatch({ type: "ADD" })}> Next </button>
      <button onClick={() => dispatch({ type: "MINUS" })}> Bk </button>
      <button onClick={() => dispatch({ type: "SPLIT" })}> Bk </button>
    
      {state.split? splitFrame: oneFrame}
    </div>
  );
};

export default Party;