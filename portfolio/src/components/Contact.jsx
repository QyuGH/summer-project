function Contact(){
    return (
        <section id="contact">
            <div>
                <h1>Get in touch</h1>

                <div id="socials-container">

                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>Mark Anton</p>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>QyuGH</p>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>+63-906-566-5404</p>
                    </div>

                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>Iloilo City, Philippines</p>
                    </div>

                </div>
            </div>

            <div>
                <h1>Send me email</h1>
                <div id="form" className="flex flex-col">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email"/>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Hi, I would like to..."></textarea>
                </div>
            </div>
            
        </section>
    )
}

export default Contact