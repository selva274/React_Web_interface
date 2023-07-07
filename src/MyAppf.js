 import React from "react";
 import { useSelector } from "react-redux";  
 import { useContext } from "react";
 import { Appcontext } from "./index";
 const MyAppf=()=>{
    //Redux
    const {name,age}=useContext(Appcontext);
   
    return(
        <div>        
       <h1>{name}</h1>
       <p>{age}</p>
     </div>
    )
}
export default MyAppf;
