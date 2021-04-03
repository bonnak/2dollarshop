import { useCallback, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Breadcrumb } from 'react-bootstrap';
import AppLayout from '../../../../layouts/AppLayout';
import DealForm from '../../../../components/deals/DealForm';
import { Context as DealContext } from '../../../../contexts/DealContext';

export default function DealEditPage() {
  const { fetchDealById, updateDeal } = useContext(DealContext);
  const router = useRouter();
  const [deal, setDeal] = useState();
  const [validationErrors, setValidationErrors] = useState();
  const saveDeal = useCallback(async (payload) => {
    setValidationErrors();

    try {
      await updateDeal({ ...payload, id: deal.id });
      router.replace('/_office/deals');
    } catch (errRes) {
      const err = errRes.response.data;

      if (err.errors) setValidationErrors(err.errors);
    }
  }, []);

  useEffect(() => {
    console.log(router);
    fetchDealById(router.query.id).then(({ data }) => setDeal(data));
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
          <Breadcrumb.Item active>Edit #{router.query.id}</Breadcrumb.Item>
        </Breadcrumb>
        <div>
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
