import { useState } from 'react';
import { Link } from 'react-scroll';
import resume from "../src/documents/ESellers-Resume-2024.pdf";

function NavBar(){
    
    const [clicked, setClicked] = useState("none")

    return(
        <div className="navbar">
            <Link className="nameHome" to="top" smooth={true} duration={800} onClick={() => setClicked("none")}>Erin Sellers</Link>
            <div className="navLinks">
                <a href={resume}>Resume</a>
            </div>
        </div>
    )
}

export default NavBar;