import { useState } from 'react'
import { Link } from 'react-scroll'

function NavBar(){
    
    const [clicked, setClicked] = useState("none")

    return(
        <div className="navbar">
            <Link className="nameHome" to="top" smooth={true} duration={800} onClick={() => setClicked("none")}>Erin Sellers</Link>
            <div className="navLinks">
                <Link to="about" smooth={true} duration={800} onClick={() => setClicked("about")}>About</Link>
                <Link to="projects" smooth={true} duration={800} onClick={() => setClicked("projects")}>Projects</Link>
                <Link to="contact" smooth={true} duration={800} onClick={() => setClicked("contact")}>Contact</Link>
                <Link to="resume" smooth={true} duration={800} onClick={() => setClicked("resume")}>Resume</Link>
            </div>
        </div>
    )
}

export default NavBar;