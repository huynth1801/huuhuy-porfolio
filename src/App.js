import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div class="font-qs h-screen">
      <NavBar />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
