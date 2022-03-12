import Link from 'next/link';
import Layout from '../components/Layout';
import SettingsSidebar from '../components/SettingsSidebar';
import { AspectRatio, Box, Center } from '@chakra-ui/react';
import Function from '../components/Function';
import React, { useEffect, useState } from 'react';
import { JuliaHeader } from '../components/JuliaHeader';

const IndexPage = () => {
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
    <Box display={'flex'} flexDir={['column', 'row-reverse']} justifyContent={['end', 'flex-end']}>
      <JuliaHeader display={['flex', 'none']} />
      <Box margin={'0px 30px 10px 30px'}>
        <AspectRatio maxW={['100vw', '100vh']} ratio={1}>
          <canvas id={'canvas'} width={600} height={600} />
          {/*style={{ margin: '20px 40px' }}*/}
        </AspectRatio>
      </Box>
      {/*<Box display={'contents'} margin={['20px', 'auto']}>*/}
      {/*<Box id={'canvas'} as={'canvas'} width={'90vw'} height={'90vw'} margin={'20px auto'}></Box>*/}
      {/*// GOOD ONE*/}

      {/*<canvas id={'canvas'} width={600} height={600} style={{ margin: '20px 40px' }} />*/}
      {/*</Box>*/}
      {/*<Box as={'canvas'} id={'canvas'} width={600} height={600} margin={['20px', 'auto']}></Box>*/}
      <SettingsSidebar onSizeChange={setSize} onColorChange={setColor} onGenerateJuliaSet={onGenerateJuliaSet} />
      {/*<Function exp={2} cRe={0.2} cIm={-0.279} />*/}
      {/*<canvas id={'canvas'} width={'100px'} height={'100px'} />*/}
      {/**/}
      {/**/}
      {/**/}
      {/**/}
      {/*<canvas id={'canvas'} width={600} height={600} />*/}
      {/*<Box*/}
      {/*  id={'canvas2'}*/}
      {/*  as={'canvas'}*/}
      {/*  height={['100vw', '100vh', '100vh']}*/}
      {/*  width={['100vw', '100vh', '100vh']}*/}
      {/*  // bg={'red'}*/}
      {/*  my={0}*/}
      {/*  mx={'auto'}*/}
      {/*/>*/}
      {/*{color} kkk {size}*/}
    </Box>
  );
};

export default IndexPage;
