import c1 from "../../Images/sw_certificate.png";
import c2 from "../../Images/Intern.png";
import c3 from "../../Images/pt.png";
import c4 from "../../Images/py.png";
import c5 from "../../Images/js.png";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Certificates = [
  {
    id: 1,
    url: c1,
    name: "Certificate Of Attendace",
    desc: "Given by the Department of Computer Science and Information Technology, Abu Dhabi University",
  },
  {
    id: 2,
    url: c2,
    name: "Internship",
    desc: "Completed a Prodigy Web Development Internship, focusing on building responsive websites and improving front-end skills using HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    url: c4,
    name: "Python Certification",
    desc: "Earned a Python Certification from Udemy, covering core programming concepts, data structures, and hands-on project development",
  },
  {
    id: 4,
    url: c5,
    name: "JavaScript Certification",
    desc: "Achieved a JavaScript Certification from Sololearn, focusing on modern JavaScript features, DOM manipulation, and building dynamic web applications.",
  },
  {
    id: 5,
    url: c3,
    name: "Peer Tutor",
    desc: "Served as a Peer Tutor at Abu Dhabi University, assisting students with programming, web development, and software engineering courses.",
  },
];
