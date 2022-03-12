import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

const JuliaImage = () => {
  return (
    <Box as={'main'} margin={'auto 30px auto 30px'}>
      <AspectRatio maxW={['100vw', '90vh']} ratio={1} margin={'auto'}>
        <canvas id={'canvas'} width={600} height={600} />
      </AspectRatio>
    </Box>
  );
};

export { JuliaImage };
