import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export default function PageHeader() {
  return <header className="app-header">
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">Two-Dollars.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
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