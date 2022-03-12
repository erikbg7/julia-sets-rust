import React, { useState } from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import { Box } from '@chakra-ui/react';
import { JuliaHeader } from '../components/JuliaHeader';
import { JuliaImage } from '../components/JuliaImage';

const Home = () => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState('grayScale');

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
    }, 300);
    // context.drawImage(baseImage, 0, 0, 600, 600, 0, 0, 360, 360);
  };

  return (
    <Box height={'100vh'} display={['block', 'grid']} gridTemplateColumns={'320px 1fr'}>
      <JuliaHeader display={['flex', 'none']} />
      <SettingsSidebar onSizeChange={setSize} onColorChange={setColor} onGenerateJuliaSet={onGenerateJuliaSet} />
      <JuliaImage />
      {/*<Function exp={2} cRe={0.2} cIm={-0.279} />*/}
      {/*{color} kkk {size}*/}
    </Box>
  );
};

export default Home;
