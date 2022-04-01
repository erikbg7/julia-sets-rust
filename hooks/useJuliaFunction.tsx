import React, { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch } from 'react';
import { COLOR_SETS, ENGINE_SETS, SIZE_SETS } from '../config/sets';
import type { ColorValuesType, EngineValuesType, SizeValuesType } from '../config/sets';

type JuliaSetProviderProps = {
  children: ReactNode;
};

type JuliaSetComplex = {
  re: number;
  im: number;
};

type JuliaSetContext = {
  color: ColorValuesType;
  size: SizeValuesType;
  engine: EngineValuesType;
  setColor: Dispatch<ColorValuesType>;
  setSize: Dispatch<SizeValuesType>;
  setEngine: Dispatch<EngineValuesType>;
  setComplex: Dispatch<JuliaSetComplex>;
} & JuliaSetComplex;

const JuliaSetContext = createContext<JuliaSetContext>(undefined);

const JuliaSetProvider = ({ children }: JuliaSetProviderProps) => {
  const [complex, setComplex] = useState<JuliaSetComplex>({ re: 0, im: 0 });
  const [engine, setEngine] = useState<EngineValuesType>(ENGINE_SETS.RUST);
  const [color, setColor] = useState<ColorValuesType>(COLOR_SETS.GRAYSCALE);
  const [size, setSize] = useState<SizeValuesType>(SIZE_SETS.R720);

  const setters = { setComplex, setEngine, setColor, setSize };
  const values = { re: complex.re, im: complex.im, engine, color, size };

  return (
    <JuliaSetContext.Provider value={{ ...values, ...setters }}>
      {children}
    </JuliaSetContext.Provider>
  );
};

const useJuliaSet = () => {
  const context = useContext(JuliaSetContext);
  return context || throwNoContextError();
};

const throwNoContextError = () => {
  throw new Error('useJuliaSet needs to be inside a JuliaSetProvider');
};

export { JuliaSetProvider, useJuliaSet };
