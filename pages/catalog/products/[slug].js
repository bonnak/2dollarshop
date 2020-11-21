import { useRouter } from 'next/router';
import AppLayout from '../../../layouts/AppLayout';

export default function ProductDetail() {
  const router = useRouter();

  return <AppLayout>
    <p>This is product detail {router.query.id}</p>
  </AppLayout>;
}
