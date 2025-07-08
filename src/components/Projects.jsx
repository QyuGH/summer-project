function ProjectCard({ title, path, description, tech, link }) {
  return (
    <div className="flex flex-col gap-4 border-1 aspect-square w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl">
      <div className="w-full h-1/2 overflow-hidden relative">
        <img
          src={`${import.meta.env.BASE_URL}${
            path.startsWith("/") ? path.slice(1) : path
          }`}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 sm:hidden 
              bg-black/30 backdrop-blur-sm text-light-1 px-3 py-2 rounded z-10 shadow-md"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-400"
          >
            View Site
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <div>
          <h1>{title}</h1>
          <p className="text-xs md:text-sm">{description}</p>
        </div>

        <div className="mt-auto">
          <p className="text-xs md:text-sm">
            <span className="font-bold">Tech Stack: </span>
            {tech}
          </p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "GWA Calculator",
      path: "/projects/gwa.png",
      description: "A GWA calculator based on ISATU's grading system.",
      tech: "HTML, CSS, JavaScript",
      link: "https://isatu-gwa-calculator.netlify.app/",
    },
    {
      title: "Caffeine Coffee",
      path: "/projects/caffeine.png",
      description:
        "A static coffee shop website I made to practice website animations",
      tech: "HTML, CSS, JavaScript",
      link: "https://caffeine-coffee-iloilo.netlify.app/",
    },
    {
      title: "TrabaHunt",
      path: "/projects/trabahunt.png",
      description: "A mini job board project I made for our OOP subject.",
      tech: "HTML, CSS, JavaScript, PHP",
      link: "https://group-6-web-app.infinityfreeapp.com/TrabaHunt/?i=1",
    },
  ];

  return (
    <section id="projects" className="flex flex-col gap-4">
      <div>
        <h1 className="text-4xl sm:text-5xl">PROJECTS</h1>
        <p>Below are the projects I made throughout my learning journey</p>
      </div>

      <div
        id="project-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            path={project.path}
            description={project.description}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
