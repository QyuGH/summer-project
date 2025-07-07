function ProjectCard({title, path, description, tech}){

    return (
        <div className="flex flex-col gap-4 border-1 aspect-square w-full max-w-md md:max-w-lg overflow-hidden rounded-2xl">
            <div className="w-full h-1/2 overflow-hidden">
                <img src={path} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-4 px-4">
                
                <div>
                    <h1>{title}</h1>
                    <p className="text-xs md:text-sm">{description}</p>
                </div>

                <div className="mt-auto">
                    <p className="text-xs md:text-sm"><span className="font-bold">Tech Stack: </span>{tech}</p>
                </div>
            </div>

        </div>
    )
}

function Projects(){

    const projects = [
        {
            title:          "GWA Calculator",
            path:           "/projects/gwa.png",
            description:    "A GWA calculator based on ISATU's grading system.",
            tech:           "HTML, CSS, JavaScript"
        },
        {
            title:          "Caffeine Coffee",
            path:           "/projects/caffeine.png",
            description:    "A static coffee shop website I made to practice website animations",
            tech:           "HTML, CSS, JavaScript"
        },
        {
            title:          "TrabaHunt",
            path:           "/projects/trabahunt.png",
            description:    "A mini job board project I made for our OOP subject.",
            tech:           "HTML, CSS, JavaScript, PHP"
        }
    ]

    return (
        <section id="projects" className="flex flex-col gap-4">
            <div>
                <h1 className="text-4xl sm:text-5xl">PROJECTS</h1>
                <p>Below are the projects I made throughout my learning journey</p>
            </div>

            <div id="project-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

                {projects.map(project => (
                    <ProjectCard key={project.title}
                    title={project.title} 
                    path={project.path} 
                    description={project.description} 
                    tech={project.tech}/>
                ))}

            </div>
        </section>
    )
}

export default Projects