 import React from "react";
 import { useSelector } from "react-redux";  
 
 const MyAppf=()=>{
    //Redux
    const user=useSelector(state=>state.user.value);
    return(
        <div>        
       <h1>{user.name}</h1>
     </div>
    )
}
export default MyAppf;
