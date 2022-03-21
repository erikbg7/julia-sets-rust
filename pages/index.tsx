import React, { useCallback, useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import {
  Box,
  Button,
  Text,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { JuliaHeader } from '../components/JuliaHeader';
import { Function } from '../components/Function';
import { JuliaImage } from '../components/JuliaImage';
import { FunctionInput } from '../components/FunctionInput';

const Home = () => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState('grayScale');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onGenerateJuliaSet = () => {
    const canvas = document.getElementById('canvas');
    //@ts-ignore
    const context = canvas.getContext('2d');
    const baseImage = new Image();
    baseImage.src = 'julia_set.png';
    setTimeout(() => {
      //@ts-ignore
      console.warn(canvas.width, canvas.height, baseImage, baseImage.height, baseImage.width);
      //@ts-ignore
      context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height, 0, 0, canvas.width, canvas.height);
      toast({
        title: 'Finished in 117.6 ms',
        status: 'info',
        variant: 'solid',
        isClosable: true,
        position: 'top-right',
      });
    }, 300);
    // context.drawImage(baseImage, 0, 0, 600, 600, 0, 0, 360, 360);
  };

  const onNewFunction = useCallback(() => {
    onClose();
    onGenerateJuliaSet();
  }, [onClose, onGenerateJuliaSet]);

  return (
    <Box height={'100vh'} display={['block', 'grid']} gridTemplateColumns={'320px 1fr'}>
      <JuliaHeader display={['flex', 'none']} />
      <SettingsSidebar onSizeChange={setSize} onColorChange={setColor} onGenerateJuliaSet={onOpen} />
      <JuliaImage />
      {/*{color} kkk {size}*/}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalContent>
          <ModalHeader>Create a new Julia set</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>We use quadratic polynomials to generate more beautiful sets, those can be expressed as:</Text>
            <Function exp={2} />
            <Text>Where c is a complex number. Please, provide the values for the real and imaginary numbers</Text>
            <FunctionInput />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onNewFunction}>Generate</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
