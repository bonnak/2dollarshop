import { Navbar, Nav, Card } from 'react-bootstrap';

export default function PageFooter() {
  return <footer>
    <Card className="text-center">
      <Card.Header>Go to Top</Card.Header>
      <Card.Body>
        <Card.Title>Two-Dollars.com.au</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/advertise">Advertises</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">Term of Use</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/advertise">Mobile Apps</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Card className="text-center">
      <Card.Footer className="text-muted">© Copyright 2021 Two-Dollars.com.au ABN:</Card.Footer>
    </Card>
  </footer>;
}
