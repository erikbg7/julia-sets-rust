import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Stack,
  RadioGroup,
  Radio,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import ActionButtons from './ActionButtons';
import AccordionSection from './AccordionSection';
import { JuliaHeader } from './JuliaHeader';

const COLOR_SETS = {
  GRAYSCALE: 'Grayscale',
  RAINBOW: 'Rainbow',
  BLUESCALE: 'Bluescale',
};

const SIZE_SETS = {
  SEVENTWENTY: '720',
  ONEEIGHTY: '1080',
  TWOK: '2K',
  FOURK: '4K',
};

const SettingsSidebar = ({ onSizeChange, onColorChange, onGenerateJuliaSet }: any) => {
  return (
    <Box
      as={'aside'}
      position={'relative'}
      width={['unset', '320px']}
      height={'100vh'}
      px={4}
      textAlign={'center'}
      borderTopRadius={10}
    >
      <JuliaHeader display={['none', 'flex']} />
      <Box padding={'10px 0'}>Current Function: z^2 + 0.3 +0.6i</Box>
      <Accordion allowMultiple defaultIndex={[0, 1]}>
        <AccordionItem>
          <AccordionSection name={'Color Schema'} />
          <AccordionPanel pb={4}>
            <RadioGroup onChange={onColorChange} defaultValue={COLOR_SETS.GRAYSCALE}>
              <Stack>
                {Object.values(COLOR_SETS).map((value) => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionSection name={'Size'} />
          <AccordionPanel pb={4}>
            <RadioGroup onChange={onSizeChange} defaultValue={SIZE_SETS.SEVENTWENTY}>
              <Stack>
                {Object.values(SIZE_SETS).map((value) => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <ActionButtons onGenerateJuliaSet={onGenerateJuliaSet} />

      <Box as={'address'} position={'absolute'} bottom={5} left={0} right={0}>
        <Stack as={'small'} spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
          <Text> Made by Erik Blanca </Text> <IoLogoGithub /> <IoLogoLinkedin />
        </Stack>
      </Box>
    </Box>
  );
};

export default SettingsSidebar;
