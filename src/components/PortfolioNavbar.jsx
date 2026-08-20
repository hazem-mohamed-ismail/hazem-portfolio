import { Container, Nav, Navbar } from "react-bootstrap";

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="portfolio-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="portfolio-brand">
          <span className="brand-symbol">H</span>
          Hazem Mohamed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navigation" />
        <Navbar.Collapse id="portfolio-navigation">
          <Nav className="portfolio-navigation ms-auto">
            <Nav.Link href="#home" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
