import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function Loading(): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      {loading && (
        <div className="spinner-wrapper">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <>
        <Component {...pageProps} />
        <Loading />
      </>
    </ChakraProvider>
  );
}
