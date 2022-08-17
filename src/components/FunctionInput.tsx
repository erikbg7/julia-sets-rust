import React from 'react';
import { Box, Heading, NumberInput, NumberInputField } from '@chakra-ui/react';

type FunctionInputProps = {
  onRealChange: (value: string) => void;
  onImaginaryChange: (value: string) => void;
  cRe: number;
  cIm: number;
};

const FunctionInput = ({ cRe, cIm, onRealChange, onImaginaryChange }: FunctionInputProps) => {
  return (
    <>
      <Box>
        <Heading as={'h5'} m={'1rem 3rem'}>
          Re:{' '}
          <NumberInput
            onChange={onRealChange}
            display={'inline-block'}
            ml={'1rem'}
            size="md"
            placeholder={'Re'}
            pattern={'[-+]?([0-9]*.[0-9]+|[0-9]+)'}
            inputMode={'numeric'}
            defaultValue={cRe}
            max={1}
            min={-1}
          >
            <NumberInputField p={'2px'} />
          </NumberInput>
        </Heading>
        <Heading as={'h5'} m={'1rem 3rem'}>
          Im:{' '}
          <NumberInput
            onChange={onImaginaryChange}
            display={'inline-block'}
            ml={'1rem'}
            size="md"
            placeholder={'Im'}
            pattern={'[-+]?([0-9]*.[0-9]+|[0-9]+)'}
            inputMode={'numeric'}
            defaultValue={cIm}
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
