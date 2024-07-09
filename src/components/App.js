
import React, { useState } from "react";
import './../styles/App.css';
import login from "./login"


const App = () => {

const[isLoggedIn,setisLoggedIn]=useState(false);

const changeState=()=>{
  setisLoggedIn(true);
  console.log("in chang state");
}

  return (
    <div>
       
       {isLoggedIn ? <p>You Are Loggedin!</p> : <login func={changeState}/>}
        
    </div>
  )
}

export default App
