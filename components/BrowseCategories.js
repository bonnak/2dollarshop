import { Nav } from 'react-bootstrap';

export default function BrowseCategories() {
  return <div className="browse-category">
    <div className="browse-category__row1">
      <p>Browse by categories</p>
    </div>
    <div className="browse-category__row2">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Electrical &amp; Electronic</Nav.Link>
        <Nav.Link href="#">Computing</Nav.Link>
        <Nav.Link href="#">Gaming</Nav.Link>
        <Nav.Link href="#">Groceries</Nav.Link>
        <Nav.Link href="#">Health &amp; Beauty</Nav.Link>
        <Nav.Link href="#">Home &amp; Garden</Nav.Link>
        <Nav.Link href="#">Fashions &amp; Apparel</Nav.Link>
        <Nav.Link href="#">Mobiles</Nav.Link>
        <Nav.Link href="#">Alcohols</Nav.Link>
        <Nav.Link href="#">Automotive</Nav.Link>
        <Nav.Link href="#">Books &amp; Mogazines</Nav.Link>
        <Nav.Link href="#">Dinning &amp; Takeaway</Nav.Link>
        <Nav.Link href="#">Education</Nav.Link>
        <Nav.Link href="#">Entertainment</Nav.Link>
        <Nav.Link href="#">Financial</Nav.Link>
        <Nav.Link href="#">Internet</Nav.Link>
        <Nav.Link href="#">Pets</Nav.Link>
        <Nav.Link href="#">Sport &amp; Outdoors</Nav.Link>
        <Nav.Link href="#">Toys &amp; Kids</Nav.Link>
        <Nav.Link href="#">Travel</Nav.Link>
        <Nav.Link href="#">Other ...</Nav.Link>
      </Nav>
    </div>
  </div>
}