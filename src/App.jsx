import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introme from "./components/Introme";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Introme />
        </div>
        <About />
        <Projects />
        <Contact />
        <Feedback />
      </div>
    </BrowserRouter>
  );
};

export default App;
