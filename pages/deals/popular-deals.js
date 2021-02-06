import { Container } from 'react-bootstrap';
import AppLayout from '../../layouts/AppLayout';

export default function PopularDeals() {
  return (
    <AppLayout>
      <Container className="popular-deals">
        <div>
          <h2>Popular Deals</h2>
        </div>
      </Container>
    </AppLayout>
  );
}
