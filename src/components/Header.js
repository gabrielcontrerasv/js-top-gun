import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';

const Header = (props) => {
  return( 
    <>
    <Navbar>
    <Navbar.Brand href="#"><strong>PET SHOP</strong></Navbar.Brand>
    <Nav>
      <Nav.Item >Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
      <Nav.Menu title="About">
        <Nav.Item>Company</Nav.Item>
        <Nav.Item>Equipo</Nav.Item>
        <Nav.Menu title="Contacto">
          <Nav.Item>Via email</Nav.Item>
          <Nav.Item>Via telephone</Nav.Item>
        </Nav.Menu>
      </Nav.Menu>
    </Nav>
    <Nav pullRight>
      <Nav.Item >Tienda</Nav.Item>
    </Nav>
  </Navbar>
  </>
  );
}

export default Header;