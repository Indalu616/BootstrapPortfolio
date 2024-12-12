import React from "react";
import "./Work.css";
import { workList } from "./WorkList";
function Work() {
  return (
    <div className="container work rounded p-4" id="works">
      <h2 className="text-center mb-4 my-name">Works and Projects</h2>
      <p className="text-center mb-4 my-name" style={{ width: "70%", margin: "auto" }}>
        Check out some of my design projects, meticulously crafted with love and
        dedication, each one reflecting the passion and soul I poured into every
        detail.
      </p>
      <div className="row project-wrapper">
        {workList.map((el) => {
          return (
            <div className="col-lg-4 col-sm-6 col-xs-12" key={el.id}>
              <div className="project-item border">
                <div className="img-wrapper">
                  <img src={el.url} alt="Project"></img>
                  <div className="project-link">
                    <button className="btn border rounded show-btn"><a href={el.link}>Live</a></button>
                    <button className="btn border rounded show-btn"><a href={el.github}>GitHub</a></button>
                  </div>
                </div>
                <div className="description">
                  <p className="my-name">{el.brand}</p>
                  <p className="project-name my-name">{el.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Work;
