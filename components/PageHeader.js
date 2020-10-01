import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import GlobalSearch from '../components/GlobalSearch';

export default function PageHeader() {
  return (
    <header className="app-header">
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">Two-Dollars.com</Navbar.Brand>
          <div className="flex-grow-1">
            <GlobalSearch />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav-bar-right">
            <Nav>
              <NavDropdown title="Deals" id="collasible-nav-dropdown dark">
                <NavDropdown.Item href="#new-deals">New Deals</NavDropdown.Item>
                <NavDropdown.Item href="#freebie">Freebie</NavDropdown.Item>
                <NavDropdown.Item href="#stores">Stores</NavDropdown.Item>
                <NavDropdown.Item href="#popular-deals">
                  Popular Deals
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/users/signin">Sign-in</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/users/signup">Register</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
