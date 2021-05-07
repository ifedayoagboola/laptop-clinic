import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <div className="parent">
        <div className="content">
          <p>
            Already have an account?
            <span>
              <a href="/"> Sign In</a>
            </span>
          </p>
          <form action="">
            <div>
              <label>Username</label>
              <input type="text" />
            </div>
            <div>
              <label>E-mail</label>
              <input type="email" />
            </div>
            <div>
              <label>Pasword</label>
              <input type="password" />
            </div>
            <Link to="/admin">
              <button>SIGN UP</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
