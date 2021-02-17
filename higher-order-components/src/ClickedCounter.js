import React from "react";
import HigherOrder from "./HigherOrder";

function ClickedCounter(props) {
  return (
    <div>
      <button onClick={props.handleIncrement}>Click counter</button>
      <span>{props.count}</span>
    </div>
  );
}
export default HigherOrder(ClickedCounter);
