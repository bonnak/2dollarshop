import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import GlobalSearch from '../components/GlobalSearch';

export default function PageHeader() {
  return (
    <header className="app-header">
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="app-main-nav"
        >
          <Navbar.Brand href="/">Two-Dollars.com</Navbar.Brand>
          <div className="flex-grow-1">
            <GlobalSearch />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav-bar-right">
            <Nav>
              <NavDropdown title="Deals" id="collasible-nav-dropdown dark">
                <NavDropdown.Item href="/products/deals/new-deals">
                  New Deals
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/deals/freebie">
                  Freebie
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/deals/stores">
                  Stores
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/deals/popular-deals">
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
