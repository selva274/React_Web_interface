import React from 'react';
import { useSelector } from 'react-redux';


const ResuxS=()=>{
    //Redux
    const user=useSelector(state=>state.user.value);
    return (
        <div>
            <h1>{user.age}</h1>    
        </div>
     )
}
export default ResuxS;
