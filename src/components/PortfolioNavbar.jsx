import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className="portfolio-navbar fixed-top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="#home" className="portfolio-brand">
          <span className="brand-symbol">H</span>
          Hazem Mohamed
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navigation" />

        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="portfolio-navigation ms-auto">
            <Nav.Link href="#home" onClick={closeNavbar}>
              Home
            </Nav.Link>

            <Nav.Link href="#about" onClick={closeNavbar}>
              About Me
            </Nav.Link>

            <Nav.Link href="#skills" onClick={closeNavbar}>
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" onClick={closeNavbar}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;