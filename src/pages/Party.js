import React, { useState, useReducer } from "react";
import ToolsReducer from "../tools";
import { Link, useParams } from "react-router-dom";

const Party = () => {
  const { status } = useParams();
  const [state, dispatch] = useReducer(ToolsReducer, {idx: 0});
  const { idx, split, isDelete } = state;
  const [url, setUrl] = useState();
  const [urlArray, setUrlArray] = useState([
    "https://www.producerspot.com/news/best-vst-plugins",
    "https://www.one.co.il/",
    "https://home.footybite.com/"
  ]);

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };

  const deleteHandler = evt => {
    const tempUrlArray = urlArray.filter(
      iteam => iteam !== evt.target.dataset.rs
    );
    setUrlArray(tempUrlArray);
  };

  const splitFrame = urlArray.map(url => (
    <iframe
      onClick={isDelete ? deleteHandler : null}
      data-rs={url}
      title={url}
      key={url}
      src={url}
    />
  ));
  const oneFrame = <iframe title={urlArray[idx]} src={urlArray[idx]} />;

  return (
      <main>
        {isDelete && "DELETE MODE ON"}
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
          {idx + 1}/{urlArray.length}
          <button onClick={() => {}}> + </button>
          <button onClick={() => {}}> - </button>
          <button onClick={() => dispatch({ type: "DELETE" })}> Delete</button>
          <button onClick={() => dispatch({ type: "NEXT" })}> {"<<"} </button>
          <button onClick={() => dispatch({ type: "BACK" })}> {">>"} </button>
          <button onClick={() => dispatch({ type: "SPLIT" })}>
            <Link to={!split ? `/party/split` : `/party/nosplit`}>Split</Link>
          </button>
        </aside>

        <section>{status === "split" && split ? splitFrame : oneFrame}</section>
      </main>
  );
};

export default Party;
