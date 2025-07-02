
function Skills(){
    const icons = [
        {file : "/tools/html.svg",     name : "HTML"},
        {file : "/tools/css.svg",      name : "CSS"},
        {file : "/tools/js.svg",       name : "JavaScript"},
        {file : "/tools/react.svg",    name : "React"},
        {file : "/tools/tailwind.svg", name : "Tailwind"},
        {file : "/tools/php.svg",      name : "PHP"},
        {file : "/tools/java.svg",     name : "Java"},
        {file : "/tools/python.svg",   name : "Python"},
        {file : "/tools/git.svg",      name : "Git"},
        {file : "/tools/github.svg",   name : "Github"}       
    ]

    return (
        <>
            <section className="grid grid-cols-3 md:grid-cols-5 sm:grid-cols-5 gap-2 place-items-center border-2 ">
                {icons.map((icon) => (
                    <div key={icon.name} className=" overflow-hidden flex flex-col items-center border-2">
                        <div className="w-20 h-20 overflow-hidden">
                            <img src={icon.file} alt={icon.name} className="object-cover w-full h-full"/>
                        </div>
                        <p>{icon.name}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Skills