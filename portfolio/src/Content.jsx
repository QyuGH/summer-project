import Home from "./components/Home";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function Content(){
    return (
        <main id="main-content">
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </main>
    )
}

export default Content