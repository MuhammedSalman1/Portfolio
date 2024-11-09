import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <div className="maindiv">
      <h1>Muhammad Salman</h1>
      <div className="typewriter">
        <p className="title">I am a</p>
        <Typewriter
          options={{
            strings: [
              "FullStack Developer",
              "MernStack Developer",
              " Software Developer",
            ],
            autoStart: true,
            loop: true,
          }}
          className="typewriter-text"
        />
      </div>
      <div className="divicon">
        <Link
          to="https://www.linkedin.com/in/muhammad-salmankhan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </Link>
        <Link
          to="https://github.com/MuhammedSalman1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </Link>
        <Link to="mailto: dknowledgecenter@gmail.com" rel="noopener noreferrer">
          <IoMdMail className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
