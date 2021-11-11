import react from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function NavBar() {
  const cursiveFont = {
    'font-family': "'Fasthand', cursive",
    'color': 'black'
  };
  const black = {'color': 'black'};
  const background = {
    'background-image': "url('https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=400')"
  }
  return (
    <react.Fragment>
      <Navbar style={background} className=" navbar-dark bg-dark" expand="xl">
        <Container>
          <Navbar.Brand href="/" style={cursiveFont}>Muddy Shoe Prints</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={black} href="/travel">Travel</Nav.Link>
              <Nav.Link style={black} href="/about">About</Nav.Link>
              <Nav.Link style={black} href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </react.Fragment>
  );
}
export default NavBar;
