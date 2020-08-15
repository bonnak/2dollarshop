import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

export default function PageHeader() {
  return <header>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
    <Navbar expand="lg" variant="light" bg="light" className="nav-link">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/#">Computing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#">Groceries</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/#">Health &amp; Beauty</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computing">Home &amp; Garden</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computing">Fashion &amp; Apparel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computing">Mobiles</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computing">Books &amp; Magazines</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/computing">Internet</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </header>;
}