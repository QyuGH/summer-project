import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Details({icon, label, link}){
    return (
        <div className="flex items-center gap-2">
            <div  className="flex justify-center items-center w-7 h-7 border-1 rounded">
                <FontAwesomeIcon icon={icon} className="text-lg"/>
            </div>
            <a href={link} className="text-light-1">
                <p>{label}</p>
            </a>
        </div>
    )
}

function Home(){
    return (
    
        <section id="home" className="flex flex-col gap-4 items-center justify-center home-page">

            <h1 className="text-4xl sm:text-5xl text-center">
                MARK ANTON CAHUTAY
            </h1>

            <div id="detail-container" className="flex flex-col gap-2">

                <Details icon={faFacebook} label="Mark Anton" link="#"></Details>
                <Details icon={faGithub} label="QyuGH" link="#"></Details>
                <Details icon={faPhone} label="+63-906-566-5404"></Details>
                <Details icon={faLocationDot} label="Iloilo City, Philippines"></Details>

            </div>
            
        </section>
    
    )
}

export default Home