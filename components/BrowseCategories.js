import { Nav } from 'react-bootstrap';
import Link from 'next/link';

const categories = [
  'Electrical & Electronic',
  'Computing',
  'Gaming',
  'Groceries',
  'Health & Beauty',
  'Home & Garden',
  'Fashions & Apparel',
  'Mobiles',
  'Alcohols',
  'Automotive',
  'Books & Mogazines',
  'Dinning & Takeaway',
  'Education',
  'Entertainment',
  'Financial',
  'Internet',
  'Pets',
  'Sport & Outdoors',
  'Toys & Kids',
  'Travel',
  'Other ...',
]

export default function BrowseCategories() {
  return <div className="browse-category">
    <div className="browse-category__row1">
      <p>Browse by categories</p>
    </div>
    <div className="browse-category__row2">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home"></Nav.Link>
        { categories.map((category, index) => {
          return <Nav.Item key={index}>
            <Link
              href={{ pathname: '/catalog/products', query: { category }}}
            >
              <a className="nav-link">{category}</a>
            </Link>
          </Nav.Item>
        })}
      </Nav>
    </div>
  </div>
}