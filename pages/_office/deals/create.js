import { useCallback, useState, useContext } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AppLayout from '../../../layouts/AppLayout';
import DealForm from '../../../presenters/deals/DealForm';
import { Context as DealContext } from '../../../contexts/DealContext';

export default function DealCreatePage() {
  const { createDeal } = useContext(DealContext);
  const router = useRouter();
  const [validationErrors, setValidationErrors] = useState();
  const saveDeal = useCallback(async (payload) => {
    setValidationErrors();

    try {
      await createDeal(payload);
      router.replace('/_office/deals');
    } catch (errRes) {
      const err = errRes.response.data;

      if (err.errors) setValidationErrors(err.errors);
    }
  }, []);

  return (
    <AppLayout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">
              <span>Home</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/_office/deals">
              <span>Deals</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>New</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <DealForm
            onSubmit={(payload) => saveDeal(payload)}
            validationErrors={validationErrors}
          />
        </div>
      </Container>
    </AppLayout>
  );
}
