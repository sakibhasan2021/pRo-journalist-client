import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  // const reviews = useLoaderData();

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user);
  const userName = user?.email?.slice(0, 5);

  useEffect(() => {
    fetch(`http://localhost:5001/reviewpost?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const deleteAll = (email) => {
    console.log("done");
    fetch(`http://localhost:5001/reviewpost?email=${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newReview = reviews.filter((review) => review.email !== email);
        setReviews(newReview);
      });
  };
  const singleItemDelete = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:5001/reviewpost?email=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newReview = reviews.filter((review) => review._id !== id);
        setReviews(newReview);
      });
  };

  return (
    <div>
      <h1>This is my profile for {userName} </h1>
      <h3>number of review{reviews.length}</h3>
      <button
        onClick={() => deleteAll(user?.email)}
        className="btn btn-warning mt-12 mx-12 my-6"
      >
        Delete ALl
      </button>
      {reviews &&
        reviews.map((review) => (
          <ProfileInfo
            key={review._id}
            singleItemDelete={singleItemDelete}
            review={review}
          ></ProfileInfo>
        ))}
    </div>
  );
};

export default Profile;
