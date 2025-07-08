import { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Home from "./Page/Home/Home.jsx";
import About from "./Page/About/About.jsx";
import Project from "./Page/Projects/Projects.jsx";
import Contact from "./Page/Contact/Contact.jsx";
import useAOS from "./Hooks/useAOS.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  useAOS();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header className={`${scrolled ? "newClass" : ""}`} />
      <Home />
      <About name={"About Me"} />
      <Project
        name={"Projects"}
        title={
          "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."
        }
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
