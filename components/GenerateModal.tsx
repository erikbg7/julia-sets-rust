import React from 'react';
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
  onNewFunction: () => void;
};

const GenerateModal = ({ isOpen, onClose, onNewFunction }: ModalProps) => {
  const { re, im, setRe, setIm } = useJuliaSet();

  const onRealChange = (value: string) => setRe(parseFloat(value));
  const onImaginaryChange = (value: string) => setIm(parseFloat(value));
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
