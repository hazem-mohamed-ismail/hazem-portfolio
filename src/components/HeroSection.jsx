import { Button, Col, Container, Row } from "react-bootstrap";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/hazem-pic.webp";
import cvFile from "../assets/Hazem-CV.pdf";

const contactItems = [
  { name: "GitHub", icon: faGithub, href: "https://github.com/hazem-mohamed-ismail" },
  { name: "LinkedIn", icon: faLinkedin, href: "https://www.linkedin.com/in/hazem-ismail-219134272/" },
  { name: "WhatsApp", icon: faWhatsapp, href: "https://wa.me/201017573550" },
  { name: "Email", icon: faEnvelope, href: "mailto:hazemmelaskry@gmail.com" },
];

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={6} className="hero-image-column">
            <div className="hero-image-container">
              <span className="decorative-star star-one">✦</span>
              <span className="decorative-star star-two">✦</span>
              <div className="profile-image-placeholder">
                <img src={heroImage} alt="Professional profile placeholder" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <p className="section-label">Hello, I&apos;m Hazem</p>
            <h1>Front-End <span>Developer</span></h1>
            <p className="hero-description">
              I build clean, responsive, and user-friendly websites with React and modern front-end technologies.
            </p>
            <div className="hero-buttons">
              <Button href={cvFile} download="Hazem-CV.pdf" className="primary-button">
                Download CV <NorthEastIcon fontSize="small" />
              </Button>
            </div>
            <div className="contact-links">
              {contactItems.map((contact) => (
                <a key={contact.name} href={contact.href} target="_blank" rel="noreferrer" className="contact-link" aria-label={contact.name}>
                  <FontAwesomeIcon icon={contact.icon} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
