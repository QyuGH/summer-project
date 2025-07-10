import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Details({ icon, label, link }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center w-7 h-7 border-1 rounded">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
      <a href={link} target="_blank">
        <p className="text-light-1 hover:text-secondary transition-all duration-300 ease">
          {label}
        </p>
      </a>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col border-1 items-start gap-4 p-4 w-full md:w-2/3 rounded-2xl">
        <div>
          <h1>Get in touch</h1>
          <p>Feel free to reach me out directly.</p>
        </div>

        <div id="socials-container" className="flex flex-col gap-2">
          <Details
            icon={faFacebook}
            label="Mark Anton"
            link="https://web.facebook.com/marqyu.cahutay"
          ></Details>
          <Details
            icon={faGithub}
            label="QyuGH"
            link="https://github.com/QyuGH"
          ></Details>
          <Details icon={faPhone} label="+63-906-566-5404"></Details>
          <Details
            icon={faLocationDot}
            label="Iloilo City, Philippines"
          ></Details>
        </div>
      </div>

      <div className="border-1 p-4 w-full rounded-2xl">
        <h1>Send me an email</h1>
        <div id="form" className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />

          <label htmlFor="subject">Subject: </label>
          <input type="text" name="subject" id="subject" />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Hi, I would like to..."
          ></textarea>
        </div>
      </div>
    </section>
  );
}

export default Contact;
