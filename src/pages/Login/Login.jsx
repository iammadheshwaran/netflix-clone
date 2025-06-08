import React from "react";
import { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.png";

const Login = () => {

  const [signState, setSignState] = useState("Sign In")

  return (
    <div classname="login" style={{
    backgroundImage: `linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
  }}>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? <input type="text" placeholder="Your name" />:<></>}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
        </div>
      </div>
    </div>
  );
};

export default Login;
