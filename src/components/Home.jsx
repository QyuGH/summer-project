import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { SlideLeft } from "../motion/Motions";

function Details({ icon, label, link }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center w-7 h-7 border-1 rounded">
        <FontAwesomeIcon icon={icon} className="text-lg change" />
      </div>
      <a href={link} target="_blank">
        <p className="text-light-1 detail">{label}</p>
      </a>
    </div>
  );
}

function Home() {
  const detailsData = [
    {
      icon: faFacebook,
      label: "Mark Anton",
      link: "https://web.facebook.com/marqyu.cahutay",
    },
    {
      icon: faGithub,
      label: "QyuGH",
      link: "https://github.com/QyuGH",
    },
    {
      icon: faPhone,
      label: "+63-906-566-5404",
    },
    {
      icon: faLocationDot,
      label: "Iloilo City, Philippines",
    },
  ];

  return (
    <section
      id="home"
      className="flex flex-col gap-4 items-center justify-center home-page"
    >
      <SlideLeft
        once={true}
        tag="h1"
        children="MARK ANTON CAHUTAY"
        className="text-4xl sm:text-5xl text-center"
      />

      <div id="detail-container" className="flex flex-col gap-2">
        {detailsData.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Details
              icon={detail.icon}
              label={detail.label}
              link={detail.link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Home;