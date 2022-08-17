import React from 'react';
import { Box, Flex, HStack, Stack, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { useJuliaSet } from '../hooks/useJuliaFunction';
import { Function } from './Function';

const NavBar = () => {
  const { re, im } = useJuliaSet();

  return (
    <Box as={'nav'} position={'relative'} zIndex={9} color={'#EFEFF1'} px={12}>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        h={{ base: 28, md: 16 }}
        // maxW={'7xl'}
        m={'auto'}
        alignItems={'center'}
        justifyContent={{ base: 'space-evenly', md: 'space-between' }}
      >
        <HStack>
          <NextLink href={'/'}>
            <Image src={'/julia-sets.svg'} width={25} height={25} />
          </NextLink>
          <Heading as="h1" size="md" isTruncated>
            Julia Sets Generator
          </Heading>
        </HStack>

        {(!!re || !!im) && (
          <HStack>
            <Text fontWeight={'bold'}>Current Function: </Text>
            <Function exp={2} cRe={re} cIm={im} size={'md'} />
          </HStack>
        )}

        <Box as={'address'}>
          <Stack
            // as={'small'}
            spacing={2}
            direction={'row'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text> Made by Erik Blanca </Text> <IoLogoGithub size={25} />{' '}
            <IoLogoLinkedin size={25} />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export { NavBar };
