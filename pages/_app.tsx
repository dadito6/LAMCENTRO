// pages/_app.tsx
import '../styles/globals.css'; // Asegúrate de que esta línea esté presente
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;