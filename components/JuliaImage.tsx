import { AspectRatio, Box } from '@chakra-ui/react';
import React from 'react';

const JuliaImage = () => {
  return (
    <Box margin={'0px 30px 10px 30px'}>
      <AspectRatio maxW={['100vw', '100vh']} ratio={1}>
        <canvas id={'canvas'} width={600} height={600} />
      </AspectRatio>
    </Box>
  );
};

export { JuliaImage };
