import { Container } from 'react-bootstrap';
import AppLayout from '../../layouts/AppLayout';

export default function Freebie() {
  return (
    <AppLayout>
      <Container className="freebie">
        <div>
          <h2>Freebie</h2>
        </div>
      </Container>
    </AppLayout>
  );
}
