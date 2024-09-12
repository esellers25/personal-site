import profile from "./Profile_2.jpeg"

function About(){
    return(
        <section id="about">
            <div className="aboutMe">
                <img className="profilePic" src={profile} alt="Profile"/>
                <div className="bio">
                <p> I'm a full stack software engineer with extensive experience in JavaScript based in Brooklyn, NY. 
                    I have a passion for learning that helps to make me a quick study of any new tool, language, or skill.
                    As a developer, I'm excited by intuitive design that balances aesthetics and functionality. I believe 
                    in producing clean, scalable solutions. 
                </p>
                <p> With a background in book publishing and television production, I'm always keen to consider a new project 
                    from the perspective of a user. I have ample experience 
                    working across team projects, and pride myself on being a proactive and flexible communicator.</p>
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