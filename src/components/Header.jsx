import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef } from "react";
import { SlideLeft, SlideDown } from "../motion/Motions";

function Navigation({ title, ...props }) {
  return <a {...props}>{title}</a>;
}

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header
        id="header"
        className="flex justify-between items-center p-4 sticky top-0 bg-secondary z-30"
      >
        <h1 className="text-2xl">Anton</h1>

        <SlideDown className="hidden sm:flex gap-4">
          <Navigation title="Home" href="#home" className="nav" />
          <Navigation title="About" href="#about" className="nav" />
          <Navigation title="Projects" href="#projects" className="nav" />
          <Navigation title="Skills" href="#skills" className="nav" />
          <Navigation title="Contact" href="#contact" className="nav" />
        </SlideDown>
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
        <nav className="flex flex-col text-center w-full">
          <Navigation title="Home" href="#home" className="mobile-nav" />
          <Navigation title="About" href="#about" className="mobile-nav" />
          <Navigation
            title="Projects"
            href="#projects"
            className="mobile-nav"
          />
          <Navigation title="Skills" href="#skills" className="mobile-nav" />
          <Navigation title="Contact" href="#contact" className="mobile-nav" />
        </nav>
      </div>
    </>
  );
}

export default Header