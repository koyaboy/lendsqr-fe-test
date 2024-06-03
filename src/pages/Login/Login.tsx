import { useState } from "react";
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
  const [passwordType, setPasswordType] = useState<string>("password");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const onSubmit: SubmitHandler<LoginFormInput> = (data: LoginFormInput) => {
    if (
      data.email == loginCredentials.email &&
      data.password == loginCredentials.password
    ) {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      setError(false);
      navigate("/", { replace: true });
    } else {
      setError(true);
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
          {error && (
            <div className="wrong-credentials-error">
              <p>Wrong Email or Password</p>
            </div>
          )}
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
                type={passwordType}
                placeholder="Password"
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <button
                type="button"
                className="show"
                onClick={togglePasswordVisibility}
              >
                {passwordType === "password" ? "SHOW" : "HIDE"}
              </button>
            </div>
            {errors.password?.type === "required" && (
              <p role="alert" className="validation-error-message">
                Password is required
              </p>
            )}
            <a href="" className="forgot-password">
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
