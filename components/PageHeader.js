import { Navbar, Nav, Form, FormControl, Button, Container, InputGroup } from 'react-bootstrap';
import GlobalSearch from '../components/GlobalSearch';

export default function PageHeader() {
  return <header className="app-header">
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">Two-Dollars.com</Navbar.Brand>
        <div className="flex-grow-1">
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form> */}
          <GlobalSearch />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="nav-bar-right">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/home">Deals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signin">Sign-in</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>    
    </Container>
  </header>;
}