import { Col, Container, Row } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="portfolio-section about-section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={8} className="mx-auto">
            <p className="section-label">About Me</p>
            <h2>Turning ideas into useful experiences.</h2>
            <p className="about-text">
              I am a Front-End Developer who enjoys transforming ideas and designs into practical digital products. I focus on writing organized code and creating interfaces that are simple for people to understand and use.
            </p>
            <p className="about-text">
              I am always learning new tools, improving my skills, and looking for better ways to solve problems. My goal is to build websites that look professional, work smoothly, and provide a good experience on every device.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
