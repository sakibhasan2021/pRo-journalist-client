import React from "react";

const SingleReview = ({ review }) => {
  const { img, name, organization, email, description } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl review">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{organization}</h2>
        <p className="leading-loose">{description}</p>
        <div className="card-actions justify-end">
          <h5>{email}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
