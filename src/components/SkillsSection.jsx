import { Card, Col, Container, Row } from "react-bootstrap";
import reactLogo from "../assets/logos/React-icon.svg";
import muiLogo from "../assets/logos/mui-.svg";
import javascriptLogo from "../assets/logos/javascript-logo.svg";
import ReactBootstrap from "../assets/logos/react-bootstrap.svg";
import htmlLogo from "../assets/logos/html5.svg";
import githubLogo from "../assets/logos/github.svg";
import gitLogo from "../assets/logos/git.svg";
import cssLogo from "../assets/logos/css.svg";
import bootstrapLogo from "../assets/logos/Bootstrap.svg";

const skills = [
  { name: "HTML5", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JavaScript", icon: javascriptLogo },
  { name: "React", icon: reactLogo },
  { name: "MUI", icon: muiLogo },
  { name: "React Bootstrap", icon: ReactBootstrap },
  { name: "Bootstrap", icon: bootstrapLogo },
  { name: "Git", icon: gitLogo },
  { name: "GitHub", icon: githubLogo },
];

function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section skills-section">
      <Container>
<<<<<<< HEAD
        <h2>My Skills</h2>
=======
        <p className="section-label">My Skills</p>
        <h2>What I can do</h2>
>>>>>>> 11fb480c9175b18738f8d43e880c7b88e79deffc
        <Row className="g-4 skills-row">
          {skills.map((skill) => (
            <Col key={skill.name} xs={6} lg={3}>
              <Card className="skill-card h-100">
                <Card.Body>
                  <div className="skill-icon"><img src={skill.icon} alt={skill.name} /></div>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SkillsSection;
