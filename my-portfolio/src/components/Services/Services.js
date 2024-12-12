import React from "react";
import "./Services.css";
import { FaLeaf } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";
import { FaBookReader } from "react-icons/fa";
function Services() {
  return (
    <div className="container service" id="services">
      <p className="text-center my-name">Services</p>
      <h2 className="text-center my-4 text-bold service-title my-name">
        Quality Services
      </h2>
      <div className="row">
        <div className="col mb-2">
          <div className="border rounded p-4 service-item">
            <p>
              <FaLeaf className="leaf" />
            </p>
            <h4 className="my-name">Web developer</h4>
            <p className="my-name">
              Indalu gives you the blocks & kits you need to create a true
              website within minutes.
            </p>
          </div>
        </div>
        <div className="col mb-2">
          <div className="border rounded p-4 service-item">
            <p>
              <SiSimilarweb className="leaf" />
            </p>
            <h4 className="my-name">Web design</h4>
            <p className="my-name">
              Indalu Kelbesa is a creative web designer with expertise in
              crafting visually appealin and responsive websites
            </p>
          </div>
        </div>
        <div className="col mb-2">
          <div className="border rounded p-4 service-item">
            <FaBookReader className="leaf" />
            <h4 className="my-name">Teaching</h4>
            <p className="my-name">
              Indalu Kelbesa is a dedicated web development instructor, passionate
              about guiding students in creating responsive and appealing
              websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
