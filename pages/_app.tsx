import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../config/theme';
import { JuliaSetProvider } from '../hooks/useJuliaFunction';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <JuliaSetProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </JuliaSetProvider>
    </ChakraProvider>
  );
}

export default MyApp;
