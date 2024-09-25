import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ closePopup }) => {
  const [currState, setCurrState] = useState("Log In");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-header">
          <h2>{currState}</h2>
          <img onClick={closePopup} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
        </div>

        {currState === "Log In" ? (
          <p>
            Create A New Account?{' '}
            <span onClick={() => setCurrState("Sign Up")} className="login-popup-toggle">
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already Have An Account?{' '}
            <span onClick={() => setCurrState("Log In")} className="login-popup-toggle">
              Login Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
