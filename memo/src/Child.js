import React from "react";
 const Child=({name})=>{
    console.log("child rendered");
    return(
        <div>Child component</div>
    )
}
const Memoised=React.memo(Child);
export default Memoised;