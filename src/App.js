import Navbar from "./components/Navbar.js";
import Hero from "./components/hero.js"
import About from "./components/about.js"
import Skill from "./components/skill.js"
import Project from "./components/project.js"
import Contact from "./components/contact.js"
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
