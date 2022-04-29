import React, { useEffect, useState } from 'react';
import { AspectRatio, Box, Spinner, useToast } from '@chakra-ui/react';
import { useJuliaSet } from '../hooks/useJuliaFunction';
import { generateJuliaImage, getToastConfig } from '../utils/generate';
import { ENGINE_SETS } from '../config/sets';

const JuliaImage = () => {
  const toast = useToast();
  const { re, im, engine, color, size } = useJuliaSet();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (re || im) &&
      engine === ENGINE_SETS.RUST &&
      (function () {
        setIsLoading(true);
        setTimeout(async () => {
          const startTime = performance.now();
          await generateJuliaImage(re, im, size, color);
          const endTime = performance.now();
          setTimeout(() => toast(getToastConfig(endTime - startTime)), 300);
          setIsLoading(false);
        }, 0);
      })();
  }, [re, im, color, size]);

  return (
    <Box as={'main'} margin={'auto 30px auto 30px'}>
      <AspectRatio maxW={['100vw', '90vh']} ratio={1} margin={'auto'}>
        <canvas id={'canvas'} width={600} height={600} />
      </AspectRatio>
      {!re && !im && <Box>No function selected</Box>}
      {isLoading && (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      )}
    </Box>
  );
};

export { JuliaImage };
