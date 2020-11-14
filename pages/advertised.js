import AppLayout from '../layouts/AppLayout';
import { Container } from 'react-bootstrap';

export default function Advertised() {
  return (
    <AppLayout>
      <Container className="advertised">
        <div>
          <h2>Advertised</h2>
        </div>
      </Container>
    </AppLayout>
  );
}
