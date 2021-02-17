import React,{lazy,Suspense} from 'react';

const LazyComponent=lazy(()=>import("./Teams"))
function App() {
  return (
    <div className="container">
    <h1>Hello welcome to Laliga</h1>
    <Suspense fallback={<img src={require("./25.gif")}alt="loader"/>}><LazyComponent/></Suspense>
    </div>
  );
}

export default App;
