import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setCurrentUser(data);
    localStorage.setItem("currentUser", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="container login-form-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-form__title">Welcome</h1>
        <div className="login-form__row">
          <label className="login-form__label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={`login-form__input ${
              errors.username && "login-form__input--warning"
            }`}
            {...register("username", {
              required: "Enter your username",
            })}
          />
          <p className="login-form__warning">{errors.username?.message}</p>
        </div>
        <div className="login-form__row">
          <label className="login-form__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`login-form__input ${
              errors.password && "login-form__input--warning"
            }`}
            {...register("password", {
              required: "Enter your password",
            })}
          />
          <p className="login-form__warning">{errors.password?.message}</p>
        </div>
        <input type="submit" value="Login" className="login-form__btn" />
      </form>
    </div>
  );
};

export default Login;
