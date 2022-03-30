import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../config/theme';
import { JuliaSetProvider } from '../hooks/useJuliaFunction';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <JuliaSetProvider>
        <Component {...pageProps} />
      </JuliaSetProvider>
    </ChakraProvider>
  );
}

export default MyApp;
