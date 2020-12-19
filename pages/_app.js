import { useContext, useEffect } from 'react';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from '../contexts/AuthContext';
import '../styles/globals.scss';

function Local() {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return <></>;
}

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
    <Local />
    <Component {...pageProps} />;
  </AuthProvider>;
}

export default MyApp;
