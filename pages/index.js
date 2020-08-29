import { Container } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';
import LatestDeals from '../components/LatestDeals';
import MainCarousel from '../components/MainCarousel';

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <div className="mt-2 d-flex">
          <div className="mr-2"><BrowseCategories /></div>
          <div className="flex-grow-1">
            <MainCarousel />
            <LatestDeals />
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}
