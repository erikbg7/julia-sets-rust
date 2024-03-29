import React from 'react';
import { Heading } from '@chakra-ui/react';

type Props = {
  exp: number;
  cRe?: number;
  cIm?: number;
  size?: 'sm' | 'md';
};

const Function = ({ exp, cRe, cIm, size }: Props) => {
  const isDefined = !!cRe || !!cIm;

  return (
    <Heading as={'h4'} textAlign={'center'} my={5} size={size}>
      <span>
        {!isDefined && (
          <span>
            f<sub>c</sub>(z) ={' '}
          </span>
        )}
        <span>
          z<sup>{exp}</sup>{' '}
        </span>
        {!!cRe && <span> {cRe > 0 ? `+${cRe}` : cRe} </span>}
        {!!cIm && <span> {cIm > 0 ? `+${cIm}` : cIm}i </span>}
        {!isDefined && <span>+ c</span>}
      </span>
    </Heading>
  );
};

export { Function };
