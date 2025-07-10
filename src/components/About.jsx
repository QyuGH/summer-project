function About(){
    return (
      <section id="about" className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl sm:text-5xl">ABOUT</h1>
          <p>Read more details about me</p>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4">
          <div
            id="pfp-container"
            className="w-full sm:w-1/2 aspect-square max-w-sm sm:max-w-md rounded-2xl overflow-hidden transition-all duration-500 ease hover:scale-105 hover:cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}img/pfp.jpg`}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>

          <div id="details-container" className="w-full">
            <h1 className="text-3xl">Hi! I'm Anton</h1>
            <p>
              an aspiring developer from Iloilo currently taking up Bachelor's
              of Science in Information Technology at Iloilo Science and
              Technology University. I am passionate about learning new
              technologies and using it to develop useful projects.
            </p>
            <br />
            <p>
              As I grow through my career, I aim to become a Software Engineer
              and help contribute to our society by building software
              solutions—useful for everybody.
            </p>
          </div>
        </div>
      </section>
    );
}

export default About