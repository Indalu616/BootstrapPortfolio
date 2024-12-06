import React from "react";
import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import Form from "react-bootstrap/Form";
function Contact() {
  return (
    <div className="container rounded mb-4 mt-2 contact" id="contact">
      <p className="text-center mt-4 mb-4 my-name">Contact</p>
      <h2 className="text-center mb-4 my-name">Get in Touch With Me</h2>
      <div className="row">
        <div className="col-md-4 col-sm-12 p-2">
          <div className="border rounded p-3">
            <div className="row address">
              <div className="col-2">
                <IoLocationOutline className="contact-icon" />
              </div>
              <div className="col-10">
                <p className="my-name">Location</p>
                <p className="my-name">Abu Dhabi,UAE</p>
              </div>
            </div>

            <div className="row address">
              <div className="col-2">
                <MdOutlineMail className="contact-icon" />
              </div>
              <div className="col-10">
                <p className="my-name">Email</p>
                <p className="my-name">endalu511@gmail.com</p>
              </div>
            </div>

            <div className="row address">
              <div className="col-2">
                <MdAddIcCall className="contact-icon" />
              </div>
              <div className="col-10">
                <p className="my-name">Phone</p>
                <p className="my-name">+971509223870</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 p-2">
          <div className="border rounded p-3">
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="my-name">Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="my-name">Email address</Form.Label>
                <Form.Control type="eamil" placeholder="example@gmail.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label className="my-name">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <buton className="btn btn rounded border p-2 contact-btn">Send Message</buton>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
