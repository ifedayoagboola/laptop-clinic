import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="parent">
        <div className="content">
          <p>
            Don't have an account?
            <span>
              <a href="/register"> Sign up</a>
            </span>
          </p>
          <form action="">
            <div>
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div>
              <label>Pasword</label>
              <input type="password" />
            </div>
            <Link to="/admin">
              <button>SIGN IN</button>
            </Link>
          </form>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            numquam!
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
