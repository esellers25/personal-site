import profile from "./Profile.jpg"

function About(){
    return(
        <section id="about">
            <h2 className="aboutHeader">About Me</h2>
            <div className="aboutMe">
                <img className="profilePic" src={profile} alt="Profile"/>
                <div className="bio">
                <p> I'm a full stack software engineer based in Brooklyn, NY. With a background 
                    in book publishing and television production, I'm always keen to consider a new project 
                    from the perspective of a reader/viewer/user. I have ample experience 
                    working across team projects, and pride myself on being a proactive and flexible communicator. 
                    As a developer, I'm excited by clean, intuitive design that balances aesthetics and functionality. 
                </p>
                <p>
                    In my spare time you can catch me throwing down in the ceramic studio, diving into a new book, 
                    or hiking in New England. 
                </p>
                </div>
            </div>
        </section>
    )
}

export default About; 