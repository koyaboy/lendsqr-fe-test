import React from "react";
import "./Login.scss";
import logo from "../../assets/logo.png";
import SignInImage from "../../assets/sign-in-img.png";

const Login = () => {
  return (
    <main className="login">
      <div className="image-section">
        <img src={logo} alt="Logo" className="logo" />
        <img src={SignInImage} alt="Sign In Image" className="sign-in-img" />
      </div>

      <form>
        <div className="login-container">
          <div className="heading-section">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <div className="inputs">
            <input type="text" placeholder="Email" />
            <div className="password-container">
              <input type="text" placeholder="Password" />
              <button className="show">SHOW</button>
            </div>
            <a href="/" className="forgot-password">
              FORGOT PASSWORD?
            </a>
          </div>

          <button className="login-btn">LOG IN</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
