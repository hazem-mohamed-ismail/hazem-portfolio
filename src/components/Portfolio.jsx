import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import BrushIcon from '@mui/icons-material/Brush'
import GitHubIcon from '@mui/icons-material/GitHub'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import heroImage from '../assets/hazem-pic.png'
import cvFile from '../assets/Hazem-CV.pdf'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio-page">
      <Navbar expand="lg" className="portfolio-navbar fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="portfolio-brand">
            <span className="brand-symbol">H</span>
            Hazem Mohamed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navigation" />
          <Navbar.Collapse id="portfolio-navigation">
            <Nav className="portfolio-navigation ms-auto ">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="py-5">
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
                <p className="hero-description">I build clean, responsive, and user-friendly websites with React and modern front-end technologies.</p>
                <div className="hero-buttons">
                  <Button href={cvFile} download="Hazem-CV.pdf" className="primary-button">Download CV <NorthEastIcon fontSize="small" /></Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="portfolio-section about-section">
          <Container>
            <Row className="align-items-center gy-5">
              <Col lg={8} className="mx-auto">
                <p className="section-label">About Me</p>
                <h2>Turning ideas into useful experiences.</h2>
                <p className="about-text">I am a Front-End Developer who enjoys transforming ideas and designs into practical digital products. I focus on writing organized code and creating interfaces that are simple for people to understand and use.</p>
                <p className="about-text">I am always learning new tools, improving my skills, and looking for better ways to solve problems. My goal is to build websites that look professional, work smoothly, and provide a good experience on every device.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="skills" className="portfolio-section skills-section">
          <Container>
            <p className="section-label">My Skills</p>
            <h2>What I can do</h2>
            <Row className="g-4 skills-row">
              <Col md={6} lg={3}>
                <Card className="skill-card h-100">
                  <Card.Body>
                    <div className="skill-icon"><CodeIcon /></div>
                    <Card.Title>Front-End Development</Card.Title>
                    <Card.Text>I create responsive React interfaces using clean and reusable JSX components.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="skill-card h-100">
                  <Card.Body>
                    <div className="skill-icon"><StorageIcon /></div>
                    <Card.Title>Back-End Basics</Card.Title>
                    <Card.Text>I understand APIs, data handling, and the basics needed to connect front-end applications.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="skill-card h-100">
                  <Card.Body>
                    <div className="skill-icon"><BrushIcon /></div>
                    <Card.Title>UI &amp; UX Design</Card.Title>
                    <Card.Text>I design clear layouts with readable content and simple interactions for users.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card className="skill-card h-100">
                  <Card.Body>
                    <div className="skill-icon"><GitHubIcon /></div>
                    <Card.Title>Git &amp; Collaboration</Card.Title>
                    <Card.Text>I use Git and GitHub to manage projects, track changes, and collaborate efficiently.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="projects" className="portfolio-section projects-section">
          <Container>
            <p className="section-label">Featured Work</p>
            <div className="projects-heading">
              <h2>My Projects</h2>
              <Button href="https://github.com/" target="_blank" rel="noreferrer" className="github-button"><GitHubIcon fontSize="small" /> Visit GitHub</Button>
            </div>
            <Row className="g-4 projects-row">
              <Col md={6} lg={4}>
                <Card className="project-card h-100">
                  <div className="project-preview project-preview-purple"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85" alt="Ahuse project preview" /></div>
                  <Card.Body>
                    <Card.Title>Ahuse</Card.Title>
                    <Card.Text>A responsive landing page for a property service with a clear and welcoming user experience.</Card.Text>
                    <div className="project-links"><a href="https://example.com" target="_blank" rel="noreferrer">Live Demo <NorthEastIcon fontSize="small" /></a><a href="https://github.com/" target="_blank" rel="noreferrer">Code / GitHub <GitHubIcon fontSize="small" /></a></div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="project-card h-100">
                  <div className="project-preview project-preview-blue"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85" alt="App Dashboard project preview" /></div>
                  <Card.Body>
                    <Card.Title>App Dashboard</Card.Title>
                    <Card.Text>A dashboard interface that organizes important information and makes data easier to understand.</Card.Text>
                    <div className="project-links"><a href="https://example.com" target="_blank" rel="noreferrer">Live Demo <NorthEastIcon fontSize="small" /></a><a href="https://github.com/" target="_blank" rel="noreferrer">Code / GitHub <GitHubIcon fontSize="small" /></a></div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="project-card h-100">
                  <div className="project-preview project-preview-grey"><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c6d2?auto=format&fit=crop&w=900&q=85" alt="Easy Rentn project preview" /></div>
                  <Card.Body>
                    <Card.Title>Easy Rentn</Card.Title>
                    <Card.Text>A simple rental web application focused on easy browsing and a straightforward booking flow.</Card.Text>
                    <div className="project-links"><a href="https://example.com" target="_blank" rel="noreferrer">Live Demo <NorthEastIcon fontSize="small" /></a><a href="https://github.com/" target="_blank" rel="noreferrer">Code / GitHub <GitHubIcon fontSize="small" /></a></div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="portfolio-footer">
        <Container><span>Hazem Mohamed Ismail</span><span>Designed and built with React</span><span>© 2026</span></Container>
      </footer>
    </div>
  )
}

export default Portfolio