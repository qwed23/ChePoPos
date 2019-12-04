import React, { useState, useReducer } from "react";
import ToolsReducer from "../tools";
import { Link, useParams } from "react-router-dom";

const Party = () => {
  const { status } = useParams();
  const [state, dispatch] = useReducer(ToolsReducer, { idx: 0 });
  const { idx, split, isDelete } = state;
  const [url, setUrl] = useState();
  const [urlArray, setUrlArray] = useState([
    "https://www.producerspot.com/news/best-vst-plugins",
    "https://www.one.co.il/",
    "https://home.footybite.com/",
    "https://www.google.com/webhp?igu=1"
  ]);

  const iFrameWarpper = {  
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    height: 0
  };

  const iFrameStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };


  const splitFrame = urlArray.map(url => (
    <div style={iFrameWarpper}> 
    <iframe style={iFrameStyle}
      onClick={e =>
        isDelete
          ? setUrlArray(urlArray.filter(iteam => iteam !== e.target.dataset.rs))
          : null
      }
      // name ="X-frame-Options"
      data-rs={url}
      title={url}
      key={url}
      src={url}
      // SameSite='sameOrigin'
    />
    </div>
  ));

  const oneFrame = <div style={iFrameWarpper}><iframe  style={iFrameStyle} title={urlArray[idx]} src={urlArray[idx]} />  </div>;

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

      <section>{status === "split" ? splitFrame : oneFrame}</section>
    </main>
  );
};

export default Party;
