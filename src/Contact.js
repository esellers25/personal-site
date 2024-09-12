import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from "../src/documents/ESellers-Resume-2024.pdf"

function Contact(){
    return(
        <section id="contact">
            <div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/erin-e-sellers/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" color="#4e8672"/></a>
                    <a href="https://github.com/esellers25" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color="#4e8672"/></a>
                    <a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFilePdf} size="3x"color="#4e8672"/></a>
	            </div>
            </div>
        </section>
    )
}

export default Contact; 