import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleReview from "./SingleReview";
import "./Review.css";

const Review = () => {
  const reviews = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">
        This is {reviews.length} reveiws
      </h1>
      <div className="review-container">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
      <button className="btn btn-primary py-2 px-3 my-10 mx-12">
        <Link to="/addreview">Add Review</Link>
      </button>
    </div>
  );
};

export default Review;
