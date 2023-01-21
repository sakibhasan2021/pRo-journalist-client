import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-3xl footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/services" className="link link-hover">
          Service
        </Link>
        <Link to="/cover" className="link link-hover">
          Cover Area
        </Link>
        <Link to="/Review" className="link link-hover">
          review
        </Link>
        <Link to="/services" className="link link-hover">
          Service
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Sakib Hasan</p>
      </div>
    </footer>
  );
};

export default Footer;
