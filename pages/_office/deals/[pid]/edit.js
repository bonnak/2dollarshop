import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import request from '../../../../utils/request';
import AppLayout from '../../../../layouts/AppLayout';
import DealForm from '../../../../components/deals/DealForm';

export default function DealEditPage() {
  const router = useRouter();
  const [deal, setDeal] = useState();
  const [validationErrors, setValidationErrors] = useState();
  const saveDeal = useCallback(async (payload) => {
    try {
      await request.put(`/api/deals/${router.query.id}`, payload);
      setValidationErrors();
    } catch (errRes) {
      const err = errRes.response.data;

      if (err.errors) setValidationErrors(err.errors);
    }
  }, []);

  useEffect(() => {
    console.log(router);
    request
      .get(`/api/deals/${router.query.id}`)
      .then(({ data }) => setDeal(data));
  }, []);

  return (
    <AppLayout>
      <Container>
        <div>
          <h2>Create Deal</h2>
          <DealForm
            deal={deal}
            onSubmit={(payload) => saveDeal(payload)}
            validationErrors={validationErrors}
          />
        </div>
      </Container>
    </AppLayout>
  );
}
