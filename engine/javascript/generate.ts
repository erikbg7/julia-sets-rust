import * as math from 'mathjs';

const iterateFunction = (re: number, im: number, iteration: number, c: math.Complex): number => {
  const z = math.complex(re, im);
  if (iteration === 255 || math.norm(z) > 2) {
    return iteration;
  }
  const zpow = math.add(math.pow(z, 2), c) as math.Complex;
  return iterateFunction(zpow.re, zpow.im, iteration + 1, c);
};

const normalizeRange = (index: number, range: number) => {
  return -1.2 + (2 * index * 1.2) / range;
};

const generateSet = (h: number, w: number, power: number, cRe: number, cIm: number) => {
  const c = math.complex(cRe, cIm);

  const result: number[] = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      // result.push(Math.random() * 255);
      const normalRe = normalizeRange(j, w);
      const normalIm = normalizeRange(i, h);

      const iteration = iterateFunction(normalRe, normalIm, 0, c);
      result.push(iteration);
    }
  }

  return result;
};

export { generateSet };
