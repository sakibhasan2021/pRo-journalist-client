import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const userName = user?.email?.slice(0, 5);
  const handleLogOut = () => {
    logOut().then((res) => {
      console.log("log Out");
    });
  };
  return (
    <div
      className="hero min-h-screen header-container "
      style={{
        backgroundImage: `url("https://www.revv.co.in/blogs/wp-content/uploads/2021/09/Sports-Stadiums-in-India.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60">
        <nav className="navbar">
          <div className="navbar-brand">
            <h1 className="text-xl">
              p<span className="navbar-brand-letter">R</span>o
            </h1>
          </div>
          <div className="lists">
            <ul className="list">
              <li className="list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-item">
                <Link to="/service">Service</Link>
              </li>
              <li className="list-item">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="list-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="list-item">
                <Link to="/review">Review</Link>
              </li>
            </ul>
            <div className="registration">
              {user ? (
                <Link to="/profile">
                  <button className="btn btn-ghost text-white text-2xl font-bold mr-3">
                    {user?.displayName || userName}
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-ghost text-white text-2xl font-bold mr-3">
                    Log In
                  </button>
                </Link>
              )}
              {user ? (
                <Link to="/login">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost text-white text-2xl font-bold "
                  >
                    logOut
                  </button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button className="btn btn-ghost text-white text-2xl font-bold ">
                    Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card  rounded-box place-items-center">
          <h1 className="text-5xl banner-text">
            {" "}
            p<span className="navbar-brand-letter">R</span>o Journalist
          </h1>
          <p className="banner">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minus
            perspiciatis dolores amet, ducimus odit dolor ipsum sit voluptatem
            sed.
          </p>
          <button className=" banner-btn">More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
