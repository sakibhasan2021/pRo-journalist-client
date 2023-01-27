import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="form-container">
      <form action="">
        <div className="login-section">
          <input
            className="mb-5"
            type="text"
            name="name"
            placeholder="enter your name"
            id=""
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="enter your email"
          />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="enter password"
          />
          <br />
          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="SignUp"
          />
          <p>Already Sign up? </p>
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>

          <h1 className="text-center font-bold text-3xl text-blue-600 tracking-wides">
            Or
          </h1>

          <button className="btn btn-primary text-2xl mt-3" type="submit">
            Using Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
