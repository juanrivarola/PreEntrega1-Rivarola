import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img src="/favicon.png" alt="Logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Remeras</Nav.Link>
            <Nav.Link href="#features">Buzos</Nav.Link>
            <Nav.Link href="#pricing">Pantalones</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </div>  
  )
}  

export default NavBar