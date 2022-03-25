import React, { useCallback, useState } from 'react';
import SettingsSidebar, { IMAGE_SIZES, SIZE_SETS } from '../components/SettingsSidebar';
import { Box, useDisclosure, useToast } from '@chakra-ui/react';
import { JuliaHeader } from '../components/JuliaHeader';
import { JuliaImage } from '../components/JuliaImage';
import { generateSet } from '../engine/javascript/generate';
import { hslToRgb } from '../utils/colors';
import { GenerateModal } from '../components/GenerateModal';

const Home = () => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState('grayScale');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const onGenerate = (re, im) => {
    console.warn({ size, re, im });
    const resolution = Object.keys(SIZE_SETS)[size];
    const { width, height } = IMAGE_SIZES[SIZE_SETS[resolution]];

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const img = context.createImageData(width, height);

    const arr: number[] = generateSet(width, height, 2, 0.279, 0);

    let off = 0;
    arr.forEach((el) => {
      const [r, g, b] = hslToRgb((el * 7) / 255, 1, 0.5);
      img.data[off++] = r;
      img.data[off++] = g;
      img.data[off++] = b;
      img.data[off++] = 255;
    });

    window.createImageBitmap(img, 0, 0, img.width, img.height).then((res) => {
      context.drawImage(res, 0, 0, res.width, res.height, 0, 0, 600, 600);

      setTimeout(() => {
        toast({
          title: 'Finished in 117.6 ms',
          status: 'info',
          variant: 'solid',
          isClosable: true,
          position: 'top-right',
        });
      }, 300);
    });
  };

  return (
    <Box height={'100vh'} display={['block', 'grid']} gridTemplateColumns={'320px 1fr'}>
      <JuliaHeader display={['flex', 'none']} />
      <SettingsSidebar onSizeChange={setSize} onColorChange={setColor} onGenerateJuliaSet={onOpen} />
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
