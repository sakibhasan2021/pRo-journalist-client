import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./Profile.css";
import { useLoaderData } from "react-router-dom";
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

  return (
    <div>
      <h1>This is my profile for {userName} </h1>
      <h3>number of review{reviews.length}</h3>
      {reviews.map((review) => (
        <ProfileInfo key={review._id} review={review}></ProfileInfo>
      ))}
    </div>
  );
};

export default Profile;
