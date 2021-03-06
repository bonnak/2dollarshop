import { useCallback, useState } from 'react';
import { Container } from 'react-bootstrap';
import request from '../../utils/request';
import AppLayout from '../../layouts/AppLayout';
import DealForm from '../../components/deals/DealForm';

export default function DealCreatePage() {
  const [validationErrors, setValidationErrors] = useState();
  const saveDeal = useCallback(async (payload) => {
    try {
      await request.post('/api/deals', payload);
      setValidationErrors();
    } catch (errRes) {
      const err = errRes.response.data;

      if (err.errors) setValidationErrors(err.errors);
    }
  }, []);

  return (
    <AppLayout>
      <Container>
        <div>
          <h2>Create Deal</h2>
          <DealForm
            onSubmit={(payload) => saveDeal(payload)}
            validationErrors={validationErrors}
          />
        </div>
      </Container>
    </AppLayout>
  );
}
