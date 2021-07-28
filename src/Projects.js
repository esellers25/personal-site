import dayTrip from "../src/documents/DayTripper.png"
import snob from "../src/documents/Snob.png"

function Projects(){
    return(
        <section id="projects">
            <div>
                <h2>Some of My Work</h2>
                <div className="examples">
                    <h3>Day Tripper</h3>
                    <div className="projectSum">
                        <p>A full stack React + Rails application that allows users to view, sort, and favorite
                            hiking trails in New England, as well as view the favorite trails of 
                            other users. 
                        </p>
                        <img src={dayTrip} alt="Day Tripper"/>
                    </div>
                    <h3>Fright Site</h3>
                    <div className="projectSum">
                        <p>A horror buff's dream. Users can browse horror movies based on genre and leave
                            reviews for their favorite flicks. 
                        </p>
                    </div>
                    <h3>Beer Snob</h3>
                    <div className="projectSum">
                        <div>
                            <p>Built with a React frontend, this beer browser site lets users filter and sort
                                beer based on type and brewing state. Users can also add beers to their own
                                personal "fridge."
                            </p>
                            <span>See it in action <a href="https://beer-snob.netlify.app/">here!</a></span>
                        </div>
                        <img src={snob} alt="Beer Snob"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;