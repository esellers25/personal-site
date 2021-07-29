import { useState } from 'react';
import { Link } from 'react-scroll';
import resume from "../src/documents/ESellers-Resume.pdf";

function NavBar(){
    
    const [clicked, setClicked] = useState("none")

    return(
        <div className="navbar">
            <Link className="nameHome" to="top" smooth={true} duration={800} onClick={() => setClicked("none")}>Erin Sellers</Link>
            <div className="navLinks">
                <Link to="about" smooth={true} duration={800} onClick={() => setClicked("about")}>About</Link>
                <Link to="projects" smooth={true} duration={800} onClick={() => setClicked("projects")}>Projects</Link>
                <Link to="contact" smooth={true} duration={800} onClick={() => setClicked("contact")}>Get in Touch</Link>
                <a href={resume}>Resume</a>
            </div>
        </div>
    )
}

export default NavBar;