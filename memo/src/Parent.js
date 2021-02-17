import React,{useState} from 'react';
import Child from "./Child";
const Parent=()=>{
    const [counter,setCounter]=useState(0);
    const [name,setName]=useState("Sankalp");
    console.log("parent rendered");
    const clearName=React.useCallback(()=>setName(""),[setName])
    
    return(
        <div>
        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        <button onClick={()=>setName("Anonymous")}>Change name {name}</button>
        <Child name={name} clearName={clearName}/>
        </div>
    )
}

export default Parent;