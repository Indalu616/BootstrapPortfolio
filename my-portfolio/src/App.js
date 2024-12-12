import About from "./components/About/About";
import Certficate from "./components/Certificate/Certficate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavbarApp from "./components/NavbarApp/NavbarApp";
import Services from "./components/Services/Services";
import Skill from "./components/Skills/Skill";
import Testimonial from "./components/Testimonials/Testimonial";
import Work from "./components/Works/Work";
function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Header />
      <Services />
      <About />
      <Certficate/>
      <Skill />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
