import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickedCounter from "./ClickedCounter";
import HoverCounter from "./HoverCounter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          Hello welcome to Higher order component
          <ClickedCounter />
          <HoverCounter />
        </div>
      </div>
    );
  }
}

export default App;
