import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/user';
function RLogin() {
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(login({name:"Risk Raja",age:50}))}>Click me!</button>
    </div>
  )
}

export default RLogin;