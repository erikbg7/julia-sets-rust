import React, { ReactNode } from 'react';
import Head from 'next/head';
import { NavBar } from './NavBar';
import { Box } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Box height={'100vh'} display={'grid'} gridTemplateRows={'1fr 15fr'}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    {children}
  </Box>
);

export default Layout;
