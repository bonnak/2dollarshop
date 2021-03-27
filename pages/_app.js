import { useContext, useEffect } from 'react';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from '../contexts/AuthContext';
import {
  Provider as CategoryProvider,
  Context as CategoryContext,
} from '../contexts/CategoryContext';
import { Provider as DealProvider } from '../contexts/DealContext';

import '../styles/globals.scss';

function Local() {
  const { tryLocalSignin } = useContext(AuthContext);
  const { fetchCategories } = useContext(CategoryContext);

  useEffect(() => {
    tryLocalSignin();
    fetchCategories();
  }, []);

  return <></>;
}

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CategoryProvider>
        <DealProvider>
          <Local />
          <Component {...pageProps} />
        </DealProvider>
      </CategoryProvider>
    </AuthProvider>
  );
}

export default MyApp;
