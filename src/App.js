import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link,useNavigate } from 'react-router-dom';
import NavHome from './NavHome';
import NavSetting from './NavSetting';
import About from './About';
import MyAppf from './MyAppf';
import MyApp from './MyApp';
import RLogin from './RLogin';
import ErrorPage from './ErrorPage';
function App() {
 
 
  return (
            <Router>
     <Link to="">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
     <Link to="setting">Setting</Link>&nbsp;&nbsp;&nbsp;&nbsp;
     <Link to="about">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
     <Link to="myappf">MyAppf</Link>&nbsp;&nbsp;&nbsp;&nbsp;
     <Link to="rlogin">RLogin</Link>&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="myapp">MyApp</Link> 
      <Routes>
        <Route path='/' element={<NavHome/>}/>
        <Route path='setting' element={<NavSetting/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>   
        <Route path='myapp' element={<MyApp/>}/>  
        <Route path='myappf' element={<MyAppf/>}/>  
        <Route path='rlogin' element={<RLogin/>}/>  
      </Routes>
    </Router>
  
    
  )
}
export default App;