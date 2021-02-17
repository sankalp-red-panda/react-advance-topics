import React,{Profiler} from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";

function App() {
  const callback=(id, phase, actualTime, baseTime, startTime, commitTime)=>{
    console.log("id",id, "phase",phase,"actualTime",actualTime,"baseTime",baseTime,"startTime",startTime,"Commit time",commitTime)
  }
  return (
    <MovieProvider>
      <div className="App">
       <Profiler id="Movielist" onRender={callback}>
       <MovieList /> </Profiler> 
      </div>
    </MovieProvider>
  );
}

export default App;
