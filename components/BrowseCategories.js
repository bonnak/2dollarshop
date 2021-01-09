import { useContext, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';
import { Context as CategoryContext } from '../contexts/CategoryContext';

export default function BrowseCategories() {
  const { state: { categories }, fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  return <div className="browse-category">
    <div className="browse-category__row1">
      <p>Browse by categories</p>
    </div>
    <div className="browse-category__row2">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home"></Nav.Link>
        { categories.map((category, index) => <Nav.Item key={index}>
            <Link
              href={{ pathname: '/catalog/products', query: { category: category.slug } }}
            >
              <a className="nav-link">{category.name}</a>
            </Link>
          </Nav.Item>)}
      </Nav>
    </div>
  </div>;
}
