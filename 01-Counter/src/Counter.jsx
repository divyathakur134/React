import { useState } from "react";


function Counter(){
 
let [count,setCount]= useState(0)

const addvalue = () => {
    console.log("increaed count");
   setCount(count+1)
}
const removevalue = () => {
    console.log("decreaed count");
   setCount(count-1)
}
    return(

        <div><center>
        <h2>Counter:{count}</h2>
        <button onClick={addvalue} >Increment</button>
        <button onClick={removevalue}>Decrement</button>
        </center>
        </div>
    )

}

export default Counter;