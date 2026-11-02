import { Col, Container, Row } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="portfolio-section about-section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={8} className="mx-auto">
            <p className="section-label">About Me</p>
            <h2>Front-end developer, growing into MERN stack.</h2>
            <p className="about-text">
              I'm a third-year student and a front-end developer focused on React. I'm currently learning backend development with Node.js, Express, and MongoDB to become a MERN stack developer, and I'm looking for my first junior role in Cairo.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
