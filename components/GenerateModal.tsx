import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Function } from './Function';
import { FunctionInput } from './FunctionInput';
import { useJuliaSet } from '../hooks/useJuliaFunction';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const GenerateModal = ({ isOpen, onClose }: ModalProps) => {
  const { re, im, setComplex } = useJuliaSet();

  const [cRe, setCRe] = useState(re || 0.4);
  const [cIm, setCIm] = useState(im || -0.6);

  const onRealChange = (value: string) => setCRe(parseFloat(value));

  const onImaginaryChange = (value: string) => setCIm(parseFloat(value));

  const onGenerateNewFunction = () => {
    onClose();
    setComplex({ re: cRe, im: cIm });
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
      <ModalContent>
        <ModalHeader>Create a new Julia set</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>We use quadratic polynomials to generate more beautiful sets, those can be expressed as:</Text>
          <Function exp={2} />
          <Text>Where c is a complex number. Please, provide the values for the real and imaginary numbers</Text>
          <Function exp={2} cRe={cRe} cIm={cIm} />
          <FunctionInput cRe={cRe} cIm={cIm} onRealChange={onRealChange} onImaginaryChange={onImaginaryChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onGenerateNewFunction}>Generate</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { GenerateModal };
