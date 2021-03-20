import axios from 'axios';
import { Container, Table, Breadcrumb } from 'react-bootstrap';
import AppLayout from '../../../layouts/AppLayout';

export default function DealsPage({ deals }) {
  return (
    <AppLayout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Deals</Breadcrumb.Item>
        </Breadcrumb>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  const { data: deals } = await axios.get('/api/deals');
  console.log(deals);
  return {
    props: {
      deals,
    },
  };
}
