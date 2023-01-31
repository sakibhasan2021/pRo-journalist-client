import React, { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { FaPersonBooth, BsPerson } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const ProfileInfo = ({ review, singleItemDelete }) => {
  const { user } = useContext(AuthContext);
  //   const img=user?.photoURL ||

  const { _id, name, email, organization, description } = review;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl review">
        <figure>
          {<img src={user?.photoURL || "please add photo"} alt="user" />}
        </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{organization}</h2>
          <p className="leading-loose">{description}</p>
          <div className="card-actions justify-end">
            <h5>{email}</h5>
          </div>
        </div>
        <div className="button-container mt-6 flex m-3 justify-between">
          <button className="btn btn-success ">Edit</button>
          <button
            onClick={() => singleItemDelete(_id)}
            className="btn btn-danger me-4 "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
