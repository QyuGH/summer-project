function Cards() {
  return (
    <>
      <div id="gwa" className="flex flex-col w-full p-4 bg-blue-900">
        <div className="w-full h-50 overflow-hidden">
          <img
            src="/projects/gwa.png"
            alt="GWA Calculator"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="mt-2">TrabaHunt</h1>
          <p className="text-sm">
            GWA Calculator made specifically for ISATU grading system.
          </p>
        </div>
        <div className="flex gap-1 text-sm mt-2">
          <p>Tech Stack:</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <section className="grid justify-center gap-1 p-4">
        <Cards></Cards>
      </section>
    </>
  );
}

export default Projects;
