import React from "react";
import "./Header.css";
import image from "../../Images/me.png";
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
const PDF_FILE_URL = "https://indalu616.github.io/BootstrapPortfolio/my_cv.pdf";
function Header() {
  const downLoad = () => {
    const fileName = PDF_FILE_URL.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = PDF_FILE_URL;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className="container">
      <div className="row header">
        <div className="col-md-4 col-sm-12 header-left">
          <div className="image-section">
            <img src={image} alt="Indalu"></img>
          </div>
          <div className="title">
            <h2 className="text-center mt-2 my-name">Indalu Kelbesa</h2>
            <p className="text-center mt-2 my-role">
              I am a web developer based in Abu Dhabi, UAE
            </p>
          </div>
          <div className="social-links">
            <button className="btn btn-rounded border social-wrapper">
              <FaFacebookF className="social" />
            </button>
            <button className="btn btn-rounded border social-wrapper">
              <CiTwitter className="social" />
            </button>
            <button className="btn btn-rounded border social-wrapper">
              <SlSocialLinkedin className="social" />
            </button>
            <button className="btn btn-rounded border social-wrapper">
              <FiGithub className="social" />
            </button>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="header-right-top p-4">
            <p className="my-name">Hello There! </p>
            <p className=" header-h4 my-name">
              I'm Indalu Kelbesa, a front end web developer and UI designer with
              pixel-perfect precision.Proficient in frameworks such as React and
              tools like Git, they ensure seamless user experiences across
              various devices and browsers.
            </p>
            <p className="my-name">
              <span className="dot">
                <h1 style={{ display: "inline-block" }}>.</h1>
              </span>{" "}
              Available For Freelancing
            </p>
            <p>
              <button
                className="btn btn-rounded download-btn"
                onClick={downLoad}
              >
                Download CV
              </button>
            </p>
          </div>
          <div className="header-right-bottom">
            <div className="row">
              <div className="col p-4">
                <p className="exp-p">Years of experience</p>
                <h2 className="exp-h2">2+</h2>
              </div>
              <div className="col p-4">
                <p className="exp-p">Line of code</p>
                <h2 className="exp-h2">200K</h2>
              </div>
              <div className="col p-4">
                <p className="exp-p">Happy Client</p>
                <h2 className="exp-h2">10+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
