import React, { createContext, ReactNode, useContext, useState, Dispatch } from 'react';
import { COLOR_SETS, ColorValuesType, SIZE_SETS, SizeValuesType } from '../config/sets';

type JuliaSetProviderProps = {
  children: ReactNode;
};

type JuliaSetContext = {
  color: ColorValuesType;
  size: SizeValuesType;
  setColor: Dispatch<ColorValuesType>;
  setSize: Dispatch<SizeValuesType>;
  re: number;
  im: number;
  setRe: Dispatch<number>;
  setIm: Dispatch<number>;
};

const JuliaSetContext = createContext<JuliaSetContext>(undefined);

const JuliaSetProvider = ({ children }: JuliaSetProviderProps) => {
  const [color, setColor] = useState<ColorValuesType>(COLOR_SETS.GRAYSCALE);
  const [size, setSize] = useState<SizeValuesType>(SIZE_SETS.R720);
  const [re, setRe] = useState(0.4);
  const [im, setIm] = useState(-0.6);

  return (
    <JuliaSetContext.Provider
      value={{
        color,
        size,
        re,
        im,
        setColor,
        setSize,
        setRe,
        setIm,
      }}
    >
      {children}
    </JuliaSetContext.Provider>
  );
};

const useJuliaSet = () => {
  const context = useContext(JuliaSetContext);

  if (!context) {
    throw new Error('useJuliaSet needs to be inside a JuliaSetProvider');
  }

  return context;
};

export { JuliaSetProvider, useJuliaSet };
