import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default MyApp
