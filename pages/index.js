import { Container } from 'react-bootstrap';
import AppLayout from '../layouts/AppLayout';
import BrowseCategories from '../components/BrowseCategories';
import LatestDeals from '../components/LatestDeals';
import MainCarousel from '../components/MainCarousel';

const latestDeals = [
  {
    title: 'Free 14 LinkedIn learning courses', 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    createdAt: '2020-09-01', 
    expiredAt: '2020-10-01', 
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M'
  },
  {
    title: 'Free 14 LinkedIn learning courses', 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    createdAt: '2020-09-01', 
    expiredAt: '2020-10-01', 
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M'
  },
  {
    title: 'Free 14 LinkedIn learning courses', 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    createdAt: '2020-09-01', 
    expiredAt: '2020-10-01', 
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M'
  }
]

export default function Home() {
  return (
    <AppLayout>
      <Container>
        <div className="mt-2 d-flex">
          <div className="mr-2"><BrowseCategories /></div>
          <div className="flex-grow-1">
            <MainCarousel />
            <LatestDeals items={latestDeals} />
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}
