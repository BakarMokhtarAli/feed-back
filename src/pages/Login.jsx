import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>

        <div className="form">
          <div className="inputBox">
            <input type="text" required /> <i>Username</i>
          </div>

          <div className="inputBox">
            <input type="password" required /> <i>Password</i>
          </div>

          <div className="links">
            {" "}
            <Link href="#">Forgot Password</Link>{" "}
            <Link to="/register">Signup</Link>
          </div>

          <div className="inputBox">
            <input type="submit" value="Login" />
          </div>
        </div>
      </div>
    </div>
  );
};
