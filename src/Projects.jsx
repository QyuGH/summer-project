function Cards() {
  return (
    <>
      <div className="group rounded-lg overflow-hidden shadow-xs bg-blue-900">
        <div className="h-48 overflow-hidden">
          <img
            src="/projects/gwa.png"
            alt="GWA Calculator"
            className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
          />
        </div>

        <div className="px-4 mt-2">
          <h1>ISATU GWA Calculator</h1>
          <p>A GWA Calculator based on ISATU's grading system.</p>
        </div>

        <div className="pb-4 px-4 mt-2">
          <p>
            <span>Tech Stack: </span> HTML, CSS, JavaScript
          </p>
        </div>
      </div>

      <div className="group rounded-lg overflow-hidden shadow-xs bg-blue-900">
        <div className="h-48 overflow-hidden">
          <img
            src="/projects/caffeine.png"
            alt="Caffeine Coffee"
            className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
          />
        </div>

        <div className="px-2 mt-2">
          <h1>Caffeine Coffee</h1>
          <p>A static coffee shop website with modern design</p>
        </div>

        <div className="pb-2 px-2 mt-2">
          <p>
            <span>Tech Stack: </span> HTML, CSS, JavaScript
          </p>
        </div>
      </div>

      <div className="group rounded-lg overflow-hidden shadow-xs bg-blue-900">
        <div className="h-48 overflow-hidden">
          <img
            src="/projects/trabahunt.png"
            alt="TrabaHunt"
            className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
          />
        </div>

        <div className="px-2 mt-2">
          <h1>TrabaHunt</h1>
          <p>
            A mini job board web app with simple create and read
            functionalities.
          </p>
        </div>

        <div className="pb-2 px-2 mt-2">
          <p>
            <span>Tech Stack: </span> HTML, CSS, JavaScript, PHP
          </p>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <section>
        <h1>PROJECTS</h1>
        <p>
          Here are some of my works showcasing my proficiency in different tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <Cards></Cards>
        </div>
      </section>
    </>
  );
}

export default Projects;
