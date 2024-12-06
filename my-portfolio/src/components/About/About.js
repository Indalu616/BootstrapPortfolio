import React from "react";
import { FiBook } from "react-icons/fi";
import "./About.css";
function About() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="experience-section">
            <h4 className="about-title my-name">Experience</h4>
            <div className="row border-bottom">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2023-Present</p>
                <p className="about-p my-name">Abu Dhabi University</p>
                <p className="my-name">Course Assistant</p>
              </div>
            </div>

            <div className="row border-bottom mt-2">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2023-Present</p>
                <p className="about-p my-name">Abu Dhabi University</p>
                <p className="my-name">Course Assistant</p>
              </div>
            </div>

            <div className="row  border-bottom mt-2 ">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2023-Present</p>
                <p className="about-p my-name">Abu Dhabi University</p>
                <p className="my-name">Course Assistant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          <div className="education-section">
            <h4 className="about-title my-name">Education</h4>
            <div className="row border-bottom mt-2">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2018-2022</p>
                <p className="about-p my-name">ODA Boarding School</p>
                <p className="my-name">High School Diploma</p>
              </div>
            </div>

            <div className="row border-bottom mt-2">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2023-Present</p>
                <p className="about-p my-name">Abu Dhabi University</p>
                <p className="my-name">Bsc.Software Engineering</p>
              </div>
            </div>

            <div className="row border-bottom mt-2">
              <div className="col-2">
                <p className="icons">
                  <FiBook className="icon" />
                </p>
              </div>
              <div className="col-8">
                <p className="my-name">2023</p>
                <p className="about-p my-name">Udemy</p>
                <p className="my-name">Full Stack Development Course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
