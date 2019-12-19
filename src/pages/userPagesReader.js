import React, { useState, useReducer } from "react";
import ToolsReducer from "../tools";
import { Link, useParams } from "react-router-dom";
import SplitFrame from "../compopments/splitedFrames";
import SingleFrame from "../compopments/singleFrame"
import UserLinkGroups from '../pages/linksMenu'

const UserPageReader = () => {
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
    paddingBottom: split ? "56.25%" : "50vh",
    paddingTop: 25,
    height: 0
  };

  const iFrameStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  };

  const submitHandler = event => {
    event.preventDefault();
    setUrlArray([...urlArray, url]);
  };

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

      <section>
        <div>
          {status === "split" ? (
            <SplitFrame
              warrper={iFrameWarpper}
              style={iFrameStyle}
              isDelete={isDelete}
              urlArray={urlArray}
              setUrlArray={setUrlArray}
            />
          ) : (
            <SingleFrame
              iFrameWarpper={iFrameWarpper}
              iFrameStyle={iFrameStyle}
              urlArray={urlArray[idx]}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default UserPageReader;
