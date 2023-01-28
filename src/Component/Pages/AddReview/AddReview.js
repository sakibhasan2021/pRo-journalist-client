import React, { useContext } from "react";
import "./AddReview.css";
import { AuthContext } from "./../../../Contexts/AuthContext/AuthProvider";
const AddReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Please {user} Add Your Review</h1>
      <div className="review-container">
        <form action="">
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            className="input input-bordered input-accent w-full mx-10 mt-5"
          />
          <br />
          <input
            name="organization"
            type="text"
            placeholder="Enter Organization"
            className="input input-bordered input-accent w-full mx-10 mt-5"
          />
          <br />
          <input
            name="description"
            type="email"
            placeholder="Enter email"
            className="input input-bordered input-accent w-full mx-10 mt-5"
          />
          <br />
          <textarea
            name="description"
            placeholder="add review"
            className="textarea textarea-bordered textarea-lg w-full mx-10 mt-5"
          ></textarea>
          <br />
          <input
            className="mt-5 mx-10 btn btn-success"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
