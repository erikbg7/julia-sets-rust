import React from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import { JuliaHeader } from '../components/JuliaHeader';
import { JuliaImage } from '../components/JuliaImage';
import { GenerateModal } from '../components/GenerateModal';
import { useJuliaSet } from '../hooks/useJuliaFunction';
import { generateJuliaImage } from '../utils/generate';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { color, size } = useJuliaSet();
  const toast = useToast();

  const onGenerate = async (re: number, im: number) => {
    const startTime = performance.now();
    await generateJuliaImage(re, im, size, color);
    const endTime = performance.now();

    setTimeout(() => {
      toast({
        title: `Finished in ${endTime - startTime} ms`,
        status: 'info',
        variant: 'solid',
        isClosable: true,
        position: 'top-right',
      });
    }, 300);
  };

  return (
    <Box height={'100vh'} display={['block', 'grid']} gridTemplateColumns={'320px 1fr'}>
      <JuliaHeader display={['flex', 'none']} />
      <SettingsSidebar onGenerateJuliaSet={onOpen} />
      <JuliaImage />
      <GenerateModal isOpen={isOpen} onClose={onClose} onNewFunction={onGenerate} />
    </Box>
  );
};

export default Home;

// const onGenerateJuliaSet = () => {
//   const canvas = document.getElementById('canvas');
//   //@ts-ignore
//   const context = canvas.getContext('2d');
//   const baseImage = new Image();
//   baseImage.src = 'julia_set.png';
//   setTimeout(() => {
//     //@ts-ignore
//     console.warn(canvas.width, canvas.height, baseImage, baseImage.height, baseImage.width);
//     //@ts-ignore
//     context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height, 0, 0, canvas.width, canvas.height);
//     toast({
//       title: 'Finished in 117.6 ms',
//       status: 'info',
//       variant: 'solid',
//       isClosable: true,
//       position: 'top-right',
//     });
//   }, 300);
//   // context.drawImage(baseImage, 0, 0, 600, 600, 0, 0, 360, 360);
// };
