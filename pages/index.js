import { Container, Row, Col } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';
import LatestDeals from '../components/LatestDeals';
import MainCarousel from '../components/MainCarousel';

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Row className="mt-4">
          <Col sm={3}><BrowseCategories /></Col>
          <Col sm={8}>
            <MainCarousel />
            <LatestDeals />
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
}
