import { useState } from 'react'
import "./App.css"
import Header from './components/Header.jsx';
import Content from "./Content.jsx";
import Footer from "./components/Footer.jsx";

function App(){
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default App
