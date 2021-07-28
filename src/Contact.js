import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from "../src/documents/ESellers-Resume.pdf"

function Contact(){
    return(
        <section id="contact">
            <div>
                <h2>Don't be a stranger!</h2>
                <span>
                    <a target="_blank" 
                    rel="noreferrer"
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=erin.e.sellers@gmail.com">
                    Send me an email </a> 
                 or find me elsewhere online.
                </span>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/erin-e-sellers/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" color="#4e8672"/></a>
                    <a href="https://github.com/esellers25" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color="#4e8672"/></a>
                    <a href="https://erinsellers25.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMedium} size="3x" color="#4e8672"/></a>
                    <a href={resume} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFilePdf} size="3x"color="#4e8672"/></a>
	            </div>
            </div>
        </section>
    )
}

export default Contact; 