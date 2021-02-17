import React from "react";
import HigherOrder from "./HigherOrder";

function HoverCounter(props) {
  return (
    <div onMouseOver={props.handleIncrement}>
      Hover over me
      <span>{props.count}</span>
    </div>
  );
}

export default HigherOrder(HoverCounter);
