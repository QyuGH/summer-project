import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return (
        <header id="header" className="flex justify-between p-4 sticky top-0 bg-secondary z-10">
            <h1>Anton</h1>
            <nav className="hidden sm:flex gap-4">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className='block sm:hidden'>
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </header>
    )
}

export default Header