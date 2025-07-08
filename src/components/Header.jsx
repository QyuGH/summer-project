import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="flex justify-between p-4 sticky top-0 bg-secondary z-30"
      >
        <h1 className="text-2xl">Anton</h1>
        <nav className="hidden sm:flex gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div
          className="block w-6 h-6 sm:hidden"
          onClick={() => setOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faX : faBars} className="text-2xl" />
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed top-0 left-0 h-lvh w-lvw bg-[rgba(0,0,0,0.5)] z-10 transition-opacity duration-500 ease-in-out`}
      ></div>

      <div
        id="sidebar"
        className={`${
          isOpen ? "right-0" : "-right-full"
        } sm:hidden fixed top-15 z-20 w-1/2 h-lvh bg-secondary transition-right duration-500 ease`}
      >
        <nav className="flex flex-col items-center w-full gap-4 py-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </>
  );
}

export default Header