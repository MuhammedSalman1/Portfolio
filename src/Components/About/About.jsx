import React from "react";
import "./About.css";
import img from "/salman.jpg";
import AnimatedNumbers from "../Animatednumbers/AnimatedNumbers";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <>
      <div className="aboutmain">
        <div className="abouttitle">
          <h2 data-aos="fade-up">Passion Fuels Purpose! </h2>
        </div>

        <div className="animatednumbers">
          <div className="number1">
            <div className="animate">
              <AnimatedNumbers
                value={10}
                style={{ fontSize: "24px", color: "#007bff" }}
              />
              <span>+</span>
            </div>

            <h2>Satisfied Clients</h2>
          </div>
          <div className="number2">
            <div className="animate">
              <AnimatedNumbers value={10} />
              <span>+</span>
            </div>
            <h2> Projects </h2>
          </div>
          <div className="number3">
            <div className="animate">
              <AnimatedNumbers value={1} />
              <span>+</span>
            </div>
            <h2> Experience </h2>
          </div>
        </div>

        <div className="aboutdiv">
          <div className="abouttext">
            <h4>BIOGRAPHY:</h4>
            <br />
            <p>
              Hi, I am Muhammad Salman, a 6th-semester computer science student
              specializing in front-end and full-stack web development. With
              over a year of experience in HTML, CSS, JavaScript, React.js,
              Next.js, and the MERN Stack, I am passionate about building
              responsive, user-friendly websites that deliver engaging user
              experiences. Proficient in every aspect of the MERN Stack, I enjoy
              crafting applications that are both innovative and accessible.
              <br />
              <br />I am always eager to learn and grow, actively seeking
              opportunities to collaborate with development teams and work on
              challenging projects. Exploring new technologies and solving
              complex issues is what excites me most, as I continue to expand my
              skills and dedication to the field.
            </p>
          </div>

          <div className="aboutimg">
            <img src={img} alt="" className="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
