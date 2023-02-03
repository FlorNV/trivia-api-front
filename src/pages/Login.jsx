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
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Welcome</h1>
        <div className="form-row">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className={`form-input ${errors.username && "input-warning"}`}
            {...register("username", {
              required: "Enter your username",
            })}
          />
          <p className="label-warning">{errors.username?.message}</p>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={`form-input ${errors.password && "input-warning"}`}
            {...register("password", {
              required: "Enter your password",
            })}
          />
          <p className="label-warning">{errors.password?.message}</p>
        </div>
        <input type="submit" value="Login" className="form-btn" />
      </form>
    </div>
  );
};

export default Login;
