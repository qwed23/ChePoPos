
const ToolsReducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return { ...state, idx: state.idx + 1 };
    case "BACK":
      return { ...state, idx: state.idx - 1 };
    case "SPLIT":
      return { ...state, split: state.split ? false : true };
    default:
      throw new Error("didnt work");
  }
};

export default ToolsReducer;
