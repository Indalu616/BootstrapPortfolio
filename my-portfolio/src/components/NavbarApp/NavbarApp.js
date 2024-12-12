import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarApp.css";
import logo from "../../Images/logo.svg";
function NavbarApp() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="myLogo"
            style={{ width: "200px", height: "100px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="navLink">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="navLink">
              Services
            </Nav.Link>
            <Nav.Link href="#works" className="navLink">
              Works
            </Nav.Link>
            <Nav.Link href="#contact" className="navLink">
              Contact
            </Nav.Link>
          </Nav>
          <button
            className="btn btn-rounded border mx-lg-3 btn-hire "
            style={{ fontWeight: 600 }}
          >
            <a href="https://www.upwork.com/freelancers/~01f52d977a655e5876">
              Hire Me!
            </a>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
