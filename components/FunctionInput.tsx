import React, { useState } from 'react';
import { Box, Heading, NumberInput, NumberInputField } from '@chakra-ui/react';

import { Function } from './Function';

const FunctionInput = () => {
  const [re, setRe] = useState(0.4);
  const [im, setIm] = useState(-0.6);

  return (
    <>
      <Function exp={2} cRe={re} cIm={im} />
      <Box>
        <Heading as={'h5'} m={'1rem 3rem'}>
          Re:{' '}
          <NumberInput
            onChange={(value) => setRe(parseFloat(value))}
            display={'inline-block'}
            ml={'1rem'}
            size="md"
            placeholder={'Re'}
            pattern={'[-+]?([0-9]*.[0-9]+|[0-9]+)'}
            inputMode={'numeric'}
            defaultValue={-0.4}
            max={1}
            min={-1}
          >
            <NumberInputField p={'2px'} />
          </NumberInput>
        </Heading>
        <Heading as={'h5'} m={'1rem 3rem'}>
          Im:{' '}
          <NumberInput
            onChange={(value) => setIm(parseFloat(value))}
            display={'inline-block'}
            ml={'1rem'}
            size="md"
            placeholder={'Im'}
            pattern={'[-+]?([0-9]*.[0-9]+|[0-9]+)'}
            inputMode={'numeric'}
            defaultValue={-0.4}
            max={1}
            min={-1}
          >
            <NumberInputField p={'2px'} />
          </NumberInput>
        </Heading>
      </Box>
    </>
  );
};

export { FunctionInput };
