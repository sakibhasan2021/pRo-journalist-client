import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const Signup = () => {
  const location = useLocation();
  const { createUserUsingGoogle, logInUsingEmailAndPassword } =
    useContext(AuthContext);
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
  const logIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    console.log(email, name, password);
    logInUsingEmailAndPassword(email, password)
      .then((res) => {
        const user = res.user;
        console.log("user created", user);
        <Navigate to="/login" state={{ from: location }} replace />;
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-container">
      <form onSubmit={logIn} action="">
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

          <button
            onClick={handleGoogleLogIn}
            className="btn btn-primary text-2xl mt-3"
          >
            Using Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
