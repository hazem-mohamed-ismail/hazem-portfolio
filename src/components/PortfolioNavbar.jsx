import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.webp";

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
        <Navbar.Brand href="#home" className="portfolio-brand d-flex align-items-center">
          <img src={logo} alt="Hazem Mohamed logo" className="brand-symbol" />
          <span className="px-2 brand-name">Hazem Mohamed</span>
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