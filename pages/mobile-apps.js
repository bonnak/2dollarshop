import AppLayout from '../layouts/AppLayout';
import { Container } from 'react-bootstrap';

export default function MobileApps() {
  return (
    <AppLayout>
      <Container className="mobile-apps">
        <div>
          <h2>Mobile Apps</h2>
        </div>
      </Container>
    </AppLayout>
  );
}
