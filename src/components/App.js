
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";


const App = () => {

const[isLoggedIn,setisLoggedIn]=useState(false);

const changeState=()=>{
  setisLoggedIn(true);
  console.log("in chang state");
}

  return (
    <div>
       
       {isLoggedIn ? <p>You Are Loggedin!</p> : <Login func={changeState}/>}
        
    </div>
  )
}

export default App
