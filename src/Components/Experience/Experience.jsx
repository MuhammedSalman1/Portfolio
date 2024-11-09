import React from "react";
import "./Experience.css";
import { experiences } from "../../data/Data.js";
import ExperienceItem from "./ExperienceItem.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  AOS.init();

  return (
    <>
      <div className="mainexperience">
        <div className="experiencetitle">
          <h2> Experience</h2>
          <p>
            As a software engineer with experience across multiple companies and
            projects, I specialize in developing scalable solutions using
            technologies like Next.js, React, and Aesternity UI.
          </p>
        </div>
        <div className="experiencediv">
          <div className="jobs">
            <div className="verticalline"></div>
            <ExperienceItem experiences={experiences} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
