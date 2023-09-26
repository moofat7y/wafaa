import { useEffect } from "react";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Experince from "./components/Experince";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolios from "./components/Portfolios";
import Skills from "./components/Skills";
import UdemyCourses from "./components/UdemyCourses";

import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <Hero />
      <Education />
      <Courses />
      <UdemyCourses />
      <Skills />
      <Experince />
      <Portfolios />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
