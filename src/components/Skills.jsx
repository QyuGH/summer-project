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
        <div key={icon.name} className="flex flex-col gap-2 items-center border-1">
          <div className="overflow-hidden w-8 h-8 md:w-12 md:h-12">
            <img
              src={icon.file}
              alt={icon.name}
              className="w-ful h-full"
            />
          </div>
          <p className="">{icon.name}</p>
        </div>
      ))}
    </>
  );
}

function Skills(){
    return (
        <section id="skills" className="flex flex-col gap-4">
            
            <div>
                <h1 className="text-4xl sm:text-5xl">SKILLS</h1>
                <p>Below are the tools and technologies I use</p>
            </div>

            <div id="skill-container" className="grid grid-cols-3 md:grid-cols-4 gap-4">

                <Cards></Cards>
            
            </div>
        </section>
    )
}

export default Skills