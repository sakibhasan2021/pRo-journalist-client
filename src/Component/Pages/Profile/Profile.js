import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import "./Profile.css";
import { useLoaderData } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";
const Profile = () => {
  const reviews = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const userName = user?.email?.slice(0, 5);

  return (
    <div>
      <h1>This is my profile for {userName}</h1>
      {reviews.map((review) => (
        <ProfileInfo key={review._id} review={review}></ProfileInfo>
      ))}
    </div>
  );
};

export default Profile;
