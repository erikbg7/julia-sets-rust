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
import React, { useState } from 'react';

const GenerateModal = ({ isOpen, onClose, onNewFunction }) => {
  const [re, setRe] = useState(0.4);
  const [im, setIm] = useState(-0.6);

  const onRealChange = (value) => setRe(parseFloat(value));
  const onImaginaryChange = (value) => setIm(parseFloat(value));
  const onGenerateNewFunction = () => {
    onClose();
    onNewFunction(re, im);
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
          <Function exp={2} cRe={re} cIm={im} />
          <FunctionInput onRealChange={onRealChange} onImaginaryChange={onImaginaryChange} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onGenerateNewFunction}>Generate</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { GenerateModal };
