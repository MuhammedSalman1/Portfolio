import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  AOS.init();

  return (
    <>
      <div className="mainskills">
        <div className="skillstitle" data-aos="fade-down">
          <h2> Skills</h2>
          <p>
            Here are some of my skills on which I have been working on for the
            past 3 years.
          </p>
        </div>
        <div className="skillsdiv">
          <div className="frontend" data-aos="fade-right">
            <div className="frontendtitle">
              <h2> Frontend </h2>
            </div>
            <div className="frontenditems">
              <div className="react">
                <img src="/react.png" alt="React Logo" />
                React JS
              </div>
              <div className="react">
                <img src="/redux.svg" alt="Redux Logo" className="reactimg" />
                Redux
              </div>
              <div className="react">
                <img src="/next.png" alt="Next.js Logo" className="reactimg" />
                Next JS
              </div>
              <div className="react">
                <img src="/html.png" alt="HTML Logo" className="reactimg" />
                HTML
              </div>
              <div className="react">
                <img src="/css.png" alt="CSS Logo" className="reactimg" />
                CSS
              </div>
              <div className="react">
                <img src="/js.png" alt="JavaScript Logo" className="reactimg" />
                JavaScript
              </div>
              <div className="react">
                <img
                  src="/bootstrap.png"
                  alt="Bootstrap Logo"
                  className="reactimg"
                />
                Bootstrap
              </div>
              <div className="react">
                <img
                  src="/material.png"
                  alt="Material UI Logo"
                  className="reactimg"
                />
                Material UI
              </div>
            </div>
          </div>

          <div className="frontend" data-aos="fade-left">
            <div className="frontendtitle">
              <h2> Backend</h2>
            </div>
            <div className="frontenditems">
              <div className="react">
                <img
                  src="/nodejs.png"
                  alt="Node.js Logo"
                  className="reactimg"
                />
                Node JS
              </div>
              <div className="react">
                <img
                  src="/express.png"
                  alt="Express.js Logo"
                  className="reactimg"
                />
                Express JS
              </div>
              <div className="react">
                <img
                  src="/monodb.png"
                  alt="MongoDB Logo"
                  className="reactimg"
                />
                Mongo DB
              </div>
              <div className="react">
                <img src="/redis.png" alt="Redis Logo" className="reactimg" />
                Redis
              </div>
              <div className="react">
                <img
                  src="/firebase.svg"
                  alt="Firebase Logo"
                  className="reactimg"
                />
                Firebase
              </div>
              <div className="react">
                <img src="/java.png" alt="Java Logo" className="reactimg" />
                Java
              </div>
              <div className="react">
                <img src="/mysql.png" alt="MySQL Logo" className="reactimg" />
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
