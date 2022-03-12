import React from 'react';
import { Heading } from '@chakra-ui/react';

const Function = ({ exp, cRe, cIm }) => {
  return (
    <Heading as={'h2'}>
      <span>
        <span>Z</span>
        <sup>{exp}</sup>
        <span>{cRe > 0 ? `+${cRe}` : cRe}</span>
        <span>{cIm > 0 ? `+${cIm}` : cIm}i</span>
      </span>
    </Heading>
  );
};

export default Function;
