import React from "react";
import "./Skill.css";
import { GrHtml5 } from "react-icons/gr";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
function Skill() {
  return (
    <div className="container mb-4">
      <p className="text-center mb-4 my-name">My Skills</p>
      <h2 className="text-center mb-4 my-name">Let's Explore My Skills</h2>
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <GrHtml5 className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">95%</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <DiCss3 className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">90%</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <IoLogoJavascript className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">95%</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <RiReactjsFill className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">95%</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <FaJava className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">95%</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-xs-12 mb-2">
          <div className="skill border rounded">
            <SiPython className="skill-icon" />
            <div className="skill-level rounded">
              <span className="text-white fs-4">95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
