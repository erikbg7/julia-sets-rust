import React from 'react';
import Image from 'next/image';
import { Heading, ResponsiveValue, Stack } from '@chakra-ui/react';
import { Property } from 'csstype';
import Display = Property.Display;

const JuliaHeader = ({ display }: { display: ResponsiveValue<Property.Display> }) => {
  return (
    <Stack direction={'row'} justifyContent={'center'} p={5} display={display}>
      <Image src={'/julia-sets.svg'} width={25} height={25} />
      <Heading as="h1" size="md" isTruncated>
        Julia Sets Generator
      </Heading>
    </Stack>
  );
};

export { JuliaHeader };
