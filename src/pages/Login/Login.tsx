import React, { useEffect, useRef } from "react";
import "./Login.scss";
import logo from "../../assets/logo.png";
import SignInImage from "../../assets/sign-in-img.png";
import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

type LoginFormInput = {
  email: string;
  password: string;
};

const loginCredentials = {
  email: "admin@test.com",
  password: "admin",
};

const Login = () => {
  const navigate = useNavigate();

  const wrongCredentialsRef: React.RefObject<HTMLDivElement> | null =
    useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = (data: LoginFormInput) => {
    if (
      data.email == loginCredentials.email &&
      data.password == loginCredentials.password
    ) {
      if (wrongCredentialsRef && wrongCredentialsRef.current) {
        wrongCredentialsRef.current.style.display = "none";
      }
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      navigate("/dashboard", { replace: true });
    } else {
      if (wrongCredentialsRef && wrongCredentialsRef.current) {
        wrongCredentialsRef.current.style.display = "block";
      }
    }
  };

  return (
    <main className="login">
      <img src={logo} alt="Logo" className="logo" />

      <div className="image-section">
        <img src={SignInImage} alt="Sign In Image" className="sign-in-img" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-container">
          <div ref={wrongCredentialsRef} className="wrong-credentials-error">
            <p>Wrong Email or Password</p>
          </div>
          <div className="heading-section">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <div className="inputs">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="validation-error-message">
                Email is required
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p role="alert" className="validation-error-message">
                Enter a valid email address
              </p>
            )}
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <button className="show">SHOW</button>
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="validation-error-message">
                Password is required
              </p>
            )}
            <a href="/" className="forgot-password">
              FORGOT PASSWORD?
            </a>
          </div>

          <button
            className="login-btn"
            style={{
              opacity: errors.email || errors.password ? "0.5" : "1",
              cursor:
                errors.email || errors.password ? "not-allowed" : "pointer",
            }}
          >
            LOG IN
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
