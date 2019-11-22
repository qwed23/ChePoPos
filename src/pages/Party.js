import React, { useState, useReducer } from "react";
import ToolsReducer from "../tools";
import { Link, useParams } from "react-router-dom";

const Party = (props) => {
  const { status } = useParams();
  const [state, dispatch] = useReducer(ToolsReducer, { idx: 0, split: status });
  const { idx, split } = state;
  const [url, setUrl] = useState();
  const [urlArray, setUrlArray] = useState([
    "https://www.one.co.il/",
    "https://home.footybite.com/"
  ]);

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };

  const splitFrame = urlArray.map(url => (
    <iframe title={url} key={url} src={url} />
  ));

  const oneFrame = <iframe title={urlArray[idx]} src={urlArray[idx]} />;

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
          <button type="submit"> Add</button>
        </form>

        <aside>
          {idx + 1}/{urlArray.length + 1}
          <button onClick={() => {}}> + </button>
          <button onClick={() => {}}> - </button>
          <button onClick={() => dispatch({ type: "NEXT" })}> {"<<"} </button>
          <button onClick={() => dispatch({ type: "BACK" })}> {">>"} </button>
          <button onClick={() => dispatch({ type: "SPLIT" })}> Split </button>
        </aside>

        <Link to={`/party/${split}`}>
          <section>
            {status === "split" ? splitFrame : oneFrame}{" "}
          </section>
        </Link>
      </main>
    </>
  );
};

export default Party;
