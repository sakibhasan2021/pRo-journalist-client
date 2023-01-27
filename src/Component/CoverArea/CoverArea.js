import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleExperience from "./SingleExperience";
import "./experience.css";

const CoverArea = () => {
  const experiences = useLoaderData();
  console.log(experiences);
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">
        this is Our {experiences.length} experience
      </h1>
      <div className="experience-container">
        {experiences.map((experience) => (
          <SingleExperience
            key={experience._id}
            experience={experience}
          ></SingleExperience>
        ))}
      </div>
    </div>
  );
};

export default CoverArea;
