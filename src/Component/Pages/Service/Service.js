import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SingleService from "../SingleService/SingleService";
import "./Service.css";
const Service = () => {
  const services = useLoaderData();
  let locations = useLocation();
  const navigate = useNavigate();
  const showAll = () => {
    locations.pathname = "/allservice";
    if (locations.pathname) {
      console.log(locations.pathname);
      navigate(locations.pathname);
    }
  };
  return (
    <div className="mt-10">
      <h1>this is my service </h1>
      <div className="services mt-5">
        {services &&
          services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
      </div>
      <button
        onClick={showAll}
        className="btn btn-outline btn-primary mx-auto ml-12 mb-3"
      >
        View All
      </button>
    </div>
  );
};

export default Service;
