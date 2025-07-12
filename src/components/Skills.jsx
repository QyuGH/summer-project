import { SlideLeft, SlideUp } from "../motion/Motions";

function Cards() {
  const icons = [
    { file: "/tools/html.svg", name: "HTML" },
    { file: "/tools/css.svg", name: "CSS" },
    { file: "/tools/js.svg", name: "JavaScript" },
    { file: "/tools/react.svg", name: "React" },
    { file: "/tools/tailwind.svg", name: "Tailwind" },
    { file: "/tools/php.svg", name: "PHP" },
    { file: "/tools/java.svg", name: "Java" },
    { file: "/tools/python.svg", name: "Python" },
    { file: "/tools/sql.svg", name: "MySQL" },
    { file: "/tools/git.svg", name: "Git" },
    { file: "/tools/github.svg", name: "Github" },
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <SlideUp
          amount={0.5}
          delay={index * 0.05}
          distance={20}
          once={true}
          key={`${index}-mobile`}
          className="flex flex-col gap-2 items-center border-1 p-4 rounded skill-card"
        >
          <div className="overflow-hidden w-8 h-8 md:w-12 md:h-12">
            <img
              src={`${import.meta.env.BASE_URL}${
                icon.file.startsWith("/") ? icon.file.slice(1) : icon.file
              }`}
              alt={icon.name}
              className="w-ful h-full"
            />
          </div>
          <p className="text-light-1">{icon.name}</p>
        </SlideUp>
      ))}
    </>
  );
}

function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-4">
      <div>
        <SlideLeft
          tag="h1"
          children="SKILLS"
          className="text-4xl sm:text-5xl"
        />
        <SlideUp
          tag="p"
          children="Below are the tools and technologies I used"
        />
      </div>

      <div
        id="skill-container"
        className="grid grid-cols-3 md:grid-cols-4 gap-4"
      >
        <Cards></Cards>
      </div>
    </section>
  );
}

export default Skills;
