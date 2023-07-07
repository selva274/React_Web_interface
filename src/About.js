import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate=useNavigate();
  return (  
    <div>
        <button onClick={()=>navigate("/",{replace:true})}>Click me</button>
    </div>
  )
}

export default About