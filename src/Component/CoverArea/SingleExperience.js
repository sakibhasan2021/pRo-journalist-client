import React from "react";
import "./experience.css";
const SingleExperience = ({ experience }) => {
  console.log(experience);
  const { img, audience, event, match, stadium, description } = experience;
  return (
    <div className="card w-96 bg-base-100 shadow-xl card-container">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event}</h2>
        <h2 className="card-title">{match}</h2>
        <p className="leading-loose">{description}</p>
        <div className="card-actions justify-end">
          <h3 className="text-3xl font-semibold">{audience} standing</h3>
          <h5>{stadium}</h5>
          <button className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default SingleExperience;
