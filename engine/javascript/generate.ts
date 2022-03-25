import * as math from 'mathjs';

const iterateFunction = (re, im, iteration, c) => {
  const z = math.complex(re, im);
  if (iteration === 255 || math.norm(z) > 2) {
    return iteration;
  }
  const zpow = math.add(math.pow(z, 2), c);
  return iterateFunction(zpow.re, zpow.im, iteration + 1, c);
};

const normalizeRange = (index, range) => {
  return -1.2 + (2 * index * 1.2) / range;
};

const generateSet = (h, w, power, cRe, cIm) => {
  const c = math.complex(cRe, cIm);

  let result = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      result.push(Math.random() * 255);
      // const normalRe = normalizeRange(j, w);
      // const normalIm = normalizeRange(i, h);
      //
      // const iteration = iterateFunction(normalRe, normalIm, 0, c);
      // result.push(iteration);
    }
  }

  return result;
};

export { generateSet };
