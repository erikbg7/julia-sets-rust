import { hslToRgb, hsvToRGB } from '../utils/colors';

const COLOR_SETS = {
  GRAYSCALE: 'Grayscale',
  RAINBOW: 'Rainbow',
  BLUESCALE: 'Bluescale',
} as const;

type ColorKeysType = keyof typeof COLOR_SETS;
type ColorValuesType = typeof COLOR_SETS[ColorKeysType];

const SIZE_SETS = {
  R720: '720',
  R1080: '1080',
  R2K: '2K',
  R4K: '4K',
} as const;

type SizeKeysType = keyof typeof SIZE_SETS;
type SizeValuesType = typeof SIZE_SETS[SizeKeysType];

const ENGINE_SETS = {
  JAVASCRIPT: 'Javascript',
  RUST: 'Rust',
} as const;

type EngineKeysType = keyof typeof ENGINE_SETS;
type EngineValuesType = typeof ENGINE_SETS[EngineKeysType];

const SIZE_RESOLUTION: Record<SizeValuesType, { width: number; height: number }> = {
  [SIZE_SETS.R720]: { width: 1280, height: 720 },
  [SIZE_SETS.R1080]: { width: 1080, height: 1080 },
  [SIZE_SETS.R2K]: { width: 2048, height: 2048 },
  [SIZE_SETS.R4K]: { width: 200, height: 200 },
};

const COLOR_GENERATORS: Record<ColorValuesType, (el: number) => number[]> = {
  [COLOR_SETS.GRAYSCALE]: (el: number) => hslToRgb((el * 7) / 255, 1, 0.5),
  [COLOR_SETS.BLUESCALE]: (el: number) => hslToRgb(0.55, 1, el / 255 + 0.16),
  [COLOR_SETS.RAINBOW]: (el: number) => hsvToRGB(0.55, 1, el / 255 + 0.16),
};

export { COLOR_GENERATORS, COLOR_SETS, SIZE_RESOLUTION, SIZE_SETS, ENGINE_SETS };
export type { ColorValuesType, SizeValuesType, EngineValuesType };
