import React, { useState, useReducer } from "react";
import ToolsReducer from "../tools";

const initState = { idx: 0, split: false };

const Party = () => {
  const [state, dispatch] = useReducer(ToolsReducer, initState);
  const { idx, split } = state;
  const [url, setUrl] = useState("");
  const [urlArray, setUrlArray] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };

  const splitFrame = urlArray.map(url => <iframe title={url} key={url} src={url}/>);
  const oneFrame = <iframe title={urlArray[idx]} src={urlArray[idx]}/>;

  return (
    <>
      <main>
        <form onSubmit={submitHandler}>
          <input
            value={url}
            onChange={e => {
              setUrl(e.target.value);
            }}
          />
          <button type="submit"> click</button>
        </form>

        <aside>
          {idx + 1}/{urlArray.length + 1}
          <button onClick={() => {}}> + </button>
          <button onClick={() => {}}> - </button>
          <button onClick={() => dispatch({ type: "NEXT" })}> Next </button>
          <button onClick={() => dispatch({ type: "BACK" })}> Bk </button>
          <button onClick={() => dispatch({ type: "SPLIT" })}> Bk </button>
        </aside>

        <section>{split ? splitFrame : oneFrame}</section>
      </main>
    </>
  );
};

export default Party;
