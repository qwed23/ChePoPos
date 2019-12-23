import React, { useReducer } from "react";
import ToolsReducer from "../tools";
import { Link, useParams } from "react-router-dom";
import SplitFrame from "../compopments/splitedFrames";
import SingleFrame from "../compopments/singleFrame";

const UserPageReader = props => {
  const { status } = useParams();
  const [state, dispatch] = useReducer(ToolsReducer, { idx: 0 });
  const { idx, split, isDelete } = state;

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

  return (
    <main>
      {isDelete && "DELETE MODE ON"}
      <aside>
        {idx + 1}/{props.urlArray.length}
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
              urlArray={props.urlArray[idx].links}
            />
          ) : (
            <SingleFrame
              iFrameWarpper={iFrameWarpper}
              iFrameStyle={iFrameStyle}
              urlArray={props.urlArray[idx].links}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default UserPageReader;
