import { SlideLeft, SlideUp } from "../motion/Motions";

function About() {
  return (
    <section id="about" className="flex flex-col gap-4">
      <div>
        <SlideLeft
          tag="h1"
          children="ABOUT"
          className="text-4xl sm:text-5xl"
        ></SlideLeft>
        <SlideUp tag="p" children="Read more details about me" />
      </div>

      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4">
        <div
          id="pfp-container"
          className="w-full sm:w-1/2 aspect-square max-w-sm sm:max-w-md rounded-2xl overflow-hidden profile-img"
        >
          <img
            src={`${import.meta.env.BASE_URL}img/pfp.jpg`}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>

        <div id="details-container" className="w-full">
          <SlideLeft
            tag="h1"
            children="Hi! I'm Anton"
            className="text-3xl md:hidden"
          />
          <SlideUp
            tag="h1"
            children="Hi! I'm Anton"
            className="text-3xl hidden md:block"
          />
          <SlideLeft
            amount={0.3}
            delay={0.3}
            tag="p"
            children="an aspiring developer from Iloilo currently taking up Bachelor's of
            Science in Information Technology at Iloilo Science and Technology
            University. I am passionate about learning new technologies and
            using it to develop useful projects."
            className="md:hidden"
          />

          <SlideUp
            amount={0.2}
            delay={0.2}
            tag="p"
            children="an aspiring developer from Iloilo currently taking up Bachelor's of
            Science in Information Technology at Iloilo Science and Technology
            University. I am passionate about learning new technologies and
            using it to develop useful projects."
            className="md:block hidden"
          />
          <br />
          <SlideLeft
            amount={0.5}
            delay={0.5}
            tag="p"
            children="As I grow through my career, I aim to become a Software Engineer and
            help contribute to our society by building software solutions—useful
            for everybody."
            className="md:hidden"
          />

          <SlideUp
            amount={0.3}
            delay={0.3}
            tag="p"
            children="As I grow through my career, I aim to become a Software Engineer and
            help contribute to our society by building software solutions—useful
            for everybody."
            className="md:block hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
