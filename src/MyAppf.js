 import { useState } from "react";
 const MyAppf=(props)=>{
    
    const[value,setvalue]=useState(27);
    const[namee,setName]=useState(()=>{console.log("Hi")})
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{value}</p>
            <button onClick={()=>{setvalue(value+1)}}>click me</button>
        </div>
    )
}
export default MyAppf;
