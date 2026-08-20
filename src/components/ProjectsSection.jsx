import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import projectImg from "../assets/project-pic.png";

function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section projects-section">
      <Container>
        <p className="section-label">Featured Work</p>
        <div className="projects-heading">
          <h2>My Projects</h2>
          <Button href="https://github.com/" target="_blank" rel="noreferrer" className="github-button">
            <GitHubIcon fontSize="small" /> Visit GitHub
          </Button>
        </div>
        <Row className="g-4 projects-row">
          <Col md={6} lg={4} className="mx-auto">
            <Card className="project-card h-100">
              <div className="project-preview">
                <img src={projectImg} alt="E-Commerce Website" />
              </div>
              <Card.Body>
                <Card.Title>E-Commerce Website</Card.Title>
                <Card.Text>
                  A responsive landing page for a property service with a clear and welcoming user experience.
                </Card.Text>
                <div className="project-links">
                  <a href="https://value-clothes-e-commerce-prj.vercel.app/" target="_blank" rel="noreferrer">
                    Live Demo <NorthEastIcon fontSize="small" />
                  </a>
                  <a href="https://github.com/hazem-mohamed-ismail/value-clothes-ecommerce" target="_blank" rel="noreferrer">
                    Code / GitHub <GitHubIcon fontSize="small" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
