import react from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function NavBar() {
  const navBarStyles = {
    backgroundColor: "#22b2ae",
    minHeight: "80px",
  };
  const white = {
    color: "white",
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "large",
  };

  return (
    <react.Fragment>
      <Navbar sticky="top" className="p-0" style={navBarStyles} expand="xl">
        <Container>
          <Navbar.Brand href="/" className="nav-title navbar-title-font-white">
            Muddy Shoe Prints
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={white} href="/travel">
                Travel
              </Nav.Link>
              <Nav.Link style={white} href="/about">
                About
              </Nav.Link>
              {/* <Nav.Link style={white} href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link style={white} href="/new">
                Create A Post
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </react.Fragment>
  );
}
export default NavBar;
