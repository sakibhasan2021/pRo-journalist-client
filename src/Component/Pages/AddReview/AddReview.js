import React, { useContext } from "react";
import "./AddReview.css";
import { AuthContext } from "./../../../Contexts/AuthContext/AuthProvider";

const AddReview = () => {
  // const { user } = useContext(AuthContext);
  // const name = user && user;
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const organization = form.organization.value;
    const email = form.email.value;
    const description = form.description.value;
    console.log(name, email, organization, description);
    const review = { name, email, organization, description };
    fetch(`http://localhost:5001/reviewpost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="review-container">
        <form onSubmit={handleReview} action="">
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
            name="email"
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
