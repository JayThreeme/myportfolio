import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introme from "./components/Introme";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// import Feedback from "./components/Feedback";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary  ">
        <Navbar />
        <Introme />
        <About />
        <Projects />
        {/* <Feedback /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
