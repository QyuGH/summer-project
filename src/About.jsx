function About() {
  return (
    <>
      <section className="flex flex-col items-center text-center">
        <div className="w-30 h-30 overflow-hidden border-blue-500 border-1">
          <img src="/img/anton.png" alt="Profile" className="" />
        </div>
        <div>
          <h1>Mark Anton Cahutay</h1>
          <p>
            Hello! call me Anton, I'm an aspiring Software Engineer from Iloilo
            City, Philippines.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
