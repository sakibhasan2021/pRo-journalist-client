import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import SingleService from "./../SingleService/SingleService";

const Allservices = () => {
  const allServices = useLoaderData();
  let locations = useLocation();
  const navigate = useNavigate();
  const backButton = () => {
    locations.pathname = "/service";
    if (locations.pathname) {
      console.log(locations.pathname);
      navigate(locations.pathname);
    }
  };
  return (
    <div className="mt-10">
      <h1>this is my service </h1>
      <div className="services mt-5">
        {allServices &&
          allServices.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
      </div>
      <button
        onClick={backButton}
        className="btn btn-outline btn-primary mx-auto ml-12 mb-3"
      >
        view less
      </button>
    </div>
  );
};

export default Allservices;
