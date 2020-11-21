import { useRouter } from 'next/router';
import AppLayout from '../../../layouts/AppLayout';
import Product from '../../../components/Product';

const products = [
  {
    id: 1,
    title: 'Free 14 LinkedIn learning courses',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: '2020-09-01',
    expiredAt: '2020-10-01',
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M',
    category: 'Gaming',
  },
  {
    id: 2,
    title: 'Free 14 LinkedIn learning courses',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: '2020-09-01',
    expiredAt: '2020-10-01',
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M',
    category: 'Gaming',
  },
  {
    id: 3,
    title: 'Free 14 LinkedIn learning courses',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: '2020-09-01',
    expiredAt: '2020-10-01',
    username: 'john',
    avatar: null,
    tags: ['Education', 'Freebei'],
    image: 'https://unsplash.com/photos/XzERvOnfH7M',
    category: 'Pets',
  },
];

export default function Products() {
  const router = useRouter();

  return <AppLayout>
    <p>This is products page:  {router.query.category}</p>
    <div className="latest-deals mt-2">
    {
      products
        .filter((product) => {
          if (router.query.category) return product.category === router.query.category;

          return true;
        })
        .map((product) => <Product key={product.id} { ...product } />)
    }
  </div>
  </AppLayout>;
}
