
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
      {icons.map((icon) => (
        <div
          key={icon.name}
          className="flex flex-col items-center gap-0.5 p-4 w-full min-w-0 bg-blue-900"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden">
            <img
              src={icon.file}
              alt={icon.name}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-xs">{icon.name}</p>
        </div>
      ))}
    </>
  );
}

function Skills() {
  return (
    <>
      <section>
        <h1>Skills</h1>
        <p>Here are the skills I'm proficient</p>
        <div className="skill-card gap-1">
          <Cards></Cards>
        </div>
      </section>
    </>
  );
}

export default Skills