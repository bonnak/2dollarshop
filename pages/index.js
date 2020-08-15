import { Container, Row, Col } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';
import LatestDeals from '../components/LatestDeals';

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <Row>
          <Col><BrowseCategories /></Col>
          <Col>
            <div>Carousal</div>
            <LatestDeals />
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
}
