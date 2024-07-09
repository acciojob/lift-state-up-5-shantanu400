import React from "react"
export default function Login(props){
    return (
        <div className="roots">

          {(props.loginstatus)?
              <p>You are logged in!</p>
          :(
<>
<h1>Parent Component</h1>
            <form>
            <div data-mdb-input-init className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control" />
        <label className="form-label" htmlFor="loginName">Email or username</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" />
        <label className="form-label" htmlFor="loginPassword">Password</label>
      </div>

      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4" onClick={()=>props.func()}>Sign in</button>
            </form>
        
</>
          )
        } 
      </div>
    )
}