import React from "react";
import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { TestimonialsList } from "./TestimonialList";
import client from "../../Images/client.jpg";
function Testimonial() {
  return (
    <div className="container testimonial rounded py-4 mb-4">
      <p className="text-center mt-3 my-name">Testimonials</p>
      <h2 className="text-center mt-3 mb-4 my-name">What Clients Say?</h2>
      <div className="row customer-box">
        <div className="col-md-5">
          <h4 className="text-center customer-h4 my-name">Our Happy Customers</h4>
          <div className="client-img">
            <img src={client} alt="client-logo" style={{ width: "100%" }}></img>
          </div>
        </div>
        <div className="col-md-7">
          <Carousel indicators={false} controls={false}>
            {TestimonialsList.map((el) => {
              return (
                <Carousel.Item key={el.id} className="pb-4">
                  <div className="testimonial-wrapper" key={el.id}>
                    <div className="testimonial-box border rounded">
                      <img src={el.url} alt="testimonials" className="customer-img"></img>
                      <p className="testimonial-content">{el.content}</p>
                      <p className="customer-name">{el.name}</p>
                      <p className="role">{el.role}</p>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
