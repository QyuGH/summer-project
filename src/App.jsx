import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <section className="flex flex-col max-w-7xl m-auto border-2 ">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
      </section>
    </>
  );
}

export default App
