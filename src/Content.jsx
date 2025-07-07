import Home from "./components/Home";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function Content(){
    return (
        <main id="main-content" className="flex flex-col gap-16 max-w-7xl px-8 sm:px-12 m-auto overflow-hidden">
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </main>
    )
}

export default Content