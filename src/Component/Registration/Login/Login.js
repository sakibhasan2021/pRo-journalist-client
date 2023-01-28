import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../Contexts/AuthContext/AuthProvider";
const Login = () => {
  // displayName
  const { createUserUsingGoogle } = useContext(AuthContext);
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    console.log("signis");
    createUserUsingGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-container">
      <form action="">
        <div className="login-section">
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
          <input className="btn btn-primary mt-5" type="submit" value="Login" />
          <p>didn't sign up? </p>
          <Link className="btn btn-primary" to="/signup">
            Signup
          </Link>

          <h1 className="text-center font-bold text-3xl text-blue-600 tracking-wides">
            Or
          </h1>

          <button
            onClick={handleGoogleLogIn}
            className="btn btn-primary text-2xl mt-3"
            type="submit"
          >
            Using Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
