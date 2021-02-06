import { Container } from 'react-bootstrap';
import AppLayout from '../../layouts/AppLayout';
import DealForm from '../../components/deals/DealForm.js';

export default function DealCreatePage () {
  return (
    <AppLayout>
      <Container>
        <div>
          <h2>Create Deal</h2>
          <DealForm />
        </div>
      </Container>
    </AppLayout>
  );
}