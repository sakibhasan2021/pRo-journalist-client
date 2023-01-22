import React from "react";
import "./SingleService.css";
const SingleService = ({ service }) => {
  const {
    img,
    experience,
    interested,
    organization,
    address,
    description,
    _id,
  } = service;
  return (
    <div>
      <h1>Single Services</h1>
      <div className="service-container">
        <div className="service">
          <div className="service-img">
            <img src={img} alt="images" />
          </div>
          <div className="service-info">
            <h1 className="text-3xl font-semibold">
              interested field: <span className="text-5xl ">{interested}</span>{" "}
            </h1>
            <h3>experience almost: {experience} years</h3>
            <h2>Previous organization: {organization}</h2>
            <h4>address: {address}</h4>
            <p className="indent-1 text-3xl tracking-wide">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
