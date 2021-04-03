import { useContext, useState, useEffect } from 'react';
import {
  Container,
  Table,
  Breadcrumb,
  Spinner,
  FormControl,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';
import AppLayout from '../../../layouts/AppLayout';
import { Context as DealContext } from '../../../contexts/DealContext';

export default function DealsPage() {
  const {
    state: { deals },
    fetchDeals,
  } = useContext(DealContext);
  const [fetching, setFetching] = useState(false);
  const fetchAsync = async ({ page, itemsPerPage } = {}) => {
    setFetching(true);

    try {
      fetchDeals({ page, itemsPerPage });
    } catch {}

    setFetching(false);
  };

  useEffect(() => {
    fetchAsync();
  }, []);

  return (
    <AppLayout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Deals</Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex justify-content-between mb-4">
          <FormControl placeholder="Search ..." className="w-25" />
          <Link href="/_office/deals/create">
            <Button variant="primary">Add New</Button>
          </Link>
        </div>
        <div className="position-relative">
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>External Link</th>
                <th>Tag</th>
                <th className="__whitespace-nowrap">Last Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id}>
                  <td>{deal.title}</td>
                  <td>{deal.externalLink}</td>
                  <td>{deal.tags.join(', ')}</td>
                  <td className="__whitespace-nowrap">
                    {moment(deal.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link href={`${deal.id}/edit`}>
                        <Button variant="outline-primary">Edit</Button>
                      </Link>
                      <Button variant="outline-danger ml-2">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {fetching && (
            <div className="position-absolute d-flex align-items-center justify-content-center __top-0 __left-0 __right-0 __bottom-0">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </div>
      </Container>
    </AppLayout>
  );
}
