import "./styles.css";
// import React, { useState } from "react";

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { cnt: state.cnt + 1, shwtxt: state.shwtxt };
    case "toggleshowtext":
      return { cnt: state.cnt, shwtxt: !state.shwtxt };
    default:
      return state;
  }
};
export default function App() {
  // const[cnt,setcnt]=useState(0);
  // const[shwtxt,setshwtxt]=useState(true);
  const [state, dispatch] = useReducer(reducer, { cnt: 0, shwtxt: true });
  return (
    <div className="App">
      <h1>{state.cnt}</h1>
      <button
        onClick={() => {
          // setcnt(cnt+1);
          // setshwtxt(!shwtxt);
          dispatch({ type: "increment" });
          dispatch({ type: "toggleshowtext" });
        }}
      >
        click here
      </button>
      {state.shwtxt && <p>this is text</p>}
    </div>
  );
}
