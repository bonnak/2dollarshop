import AppLayout from '../../../layouts/AppLayout';
import { Container } from 'react-bootstrap';

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
