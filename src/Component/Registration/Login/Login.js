import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Contexts/AuthContext/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // displayName
  const { createUserUsingGoogle, signUserWithEmailAndPassword, loading } =
    useContext(AuthContext);

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    console.log("signis");
    createUserUsingGoogle()
      .then((res) => {
        const user = res.user;
        // console.log(user);

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  const userLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-container">
      <form onSubmit={userLogIn} action="">
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
