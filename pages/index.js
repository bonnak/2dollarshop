import { Container, Row, Col } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';
import LatestDeals from '../components/LatestDeals';
import AppCarousel from '../components/AppCarousel';

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Row>
          <Col sm={3}><BrowseCategories /></Col>
          <Col sm={8}>
            <AppCarousel />
            <LatestDeals />
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
}
