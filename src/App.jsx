import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </>
  );
}

export default App
