import { COLOR_GENERATORS, ColorValuesType, SIZE_RESOLUTION, SizeValuesType } from '../config/sets';
import { generateSet } from '../engines/javascript/generate';
import { helloWorld } from '../engines';
import { UseToastOptions } from '@chakra-ui/react';

const generateJuliaImage = async (
  re: number,
  im: number,
  size: SizeValuesType,
  color: ColorValuesType
) => {
  const { width, height } = SIZE_RESOLUTION[size];

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  const img = context.createImageData(width, height);

  const arr = new Uint8Array(width * height);
  await (
    await helloWorld
  )(width, height, 2, re, im, arr);

  // const arr: number[] = generateSet(width, height, 2, re, im);
  // const arr: number[] = generateSet(width, height, 2, re, im);

  let off = 0;
  arr.forEach((el) => {
    const [r, g, b] = COLOR_GENERATORS[color](el);
    img.data[off++] = r;
    img.data[off++] = g;
    img.data[off++] = b;
    img.data[off++] = 255;
  });

  const resizedImage = await window.createImageBitmap(img, 0, 0, img.width, img.height);
  context.drawImage(
    resizedImage,
    0,
    0,
    resizedImage.width,
    resizedImage.height,
    0,
    0,
    canvas.width,
    canvas.height
  );
};

const getToastConfig = (time: number): UseToastOptions => ({
  title: `Finished in ${time} ms`,
  status: 'info',
  variant: 'solid',
  isClosable: true,
  position: 'top-right',
});

export { generateJuliaImage, getToastConfig };
