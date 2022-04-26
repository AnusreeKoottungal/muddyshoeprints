import react from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
function NavBar() {
  const cursiveFont = {
    'fontFamily': "'Fasthand', cursive",
    'color': 'white',
    'padding': '5px',
    'fontSize': '-webkit-xxx-large'
  };
  const white = {'color': 'white'};
  const background = {
    'backgroundImage': "url('https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=400')"
  }
  return (
    <react.Fragment>
      <Navbar bg="light" className=" navbar-dark bg-dark" expand="xl">
        <Container>
          <Navbar.Brand href="/" style={cursiveFont}>Muddy Shoe Prints</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={white} href="/travel">Travel</Nav.Link>
              <Nav.Link style={white} href="/about">About</Nav.Link>
              <Nav.Link style={white} href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </react.Fragment>
  );
}
export default NavBar;
