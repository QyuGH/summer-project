function Header(){
    return (
        <>
            <header id="header" className="flex justify-between">
                <h1>Anton</h1>
                <nav className="hidden md:flex gap-2">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Skills</a>
                    <a href="#">Contact</a>
                </nav>

            </header>
        </>
    )
}

export default Header