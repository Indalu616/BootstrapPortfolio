import React from "react";
import "./Certificate.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Certificates, responsive } from "./CertificateList";
import ModalApp from "../Modal/ModalApp";
function Certficate() {
  return (
    <div className="container-fluid certificate-section">
      <div className="container certificate">
        <p className="text-center dark-color">Certificates</p>
        <h3 className="text-center dark-color certificate-section-h3">
          My Certficates and Achievements
        </h3>
        <Carousel
          responsive={responsive}
          className="cert-carousel"
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {Certificates.map((c) => {
            return (
              <div className="p-2" key={c.id}>
                <div className="certificate-card card">
                  <div>
                    <img
                      src={c.url}
                      alt="certificate"
                      className="img-fluid rounded"
                      style={{ height: "10rem" }}
                    ></img>
                  </div>
                  <div>
                    <h5 className="text-center dark-black mt-3">{c.name}</h5>
                  </div>
                  <ModalApp name={c.name} url={c.url} desc={c.desc} />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Certficate;
