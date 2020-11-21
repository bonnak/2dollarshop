import { Container, Nav } from 'react-bootstrap';

export default function SubMenu() {
  return <div className="app-submenu">
    <Container>
      <Nav className="app-submenu__nav">
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
    </Container>
  </div>;
}
