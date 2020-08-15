import AppLayout from '../layouts/AppLayout';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function Home() {
  return (
    <AppLayout>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </AppLayout>
  );
}
