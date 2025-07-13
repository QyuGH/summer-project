import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import email from "../utils/Email";

function Details({ icon, label, link }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center w-7 h-7 border-1 rounded">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
      <a href={link} target="_blank">
        <p className="text-light-1 detail">{label}</p>
      </a>
    </div>
  );
}

function Contact() {
  const submitEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const res = await email.sendEmail(formData);

    if (res.success) {
      event.target.reset();
    } else {
      console.log("Unsuccessful");
    }
  };

  return (
    <section id="contact" className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col border-1 items-start gap-8 p-4 w-full md:w-1/3 rounded-2xl">
        <div>
          <h1>Get in touch</h1>
          <p>Feel free to reach me out directly.</p>
        </div>

        <div id="socials-container" className="flex flex-col gap-4">
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

      <form onSubmit={submitEmail} className="border-1 p-4 w-full rounded-2xl">
        <h1>Send an email</h1>
        <div id="form" className="flex flex-col">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" required />

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Hi, I would like to..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary rounded-md py-2 mt-4 hover:cursor-pointer"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
