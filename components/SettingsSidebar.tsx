import React from 'react';
import { Accordion, Stack, Box, Text, Heading } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import ActionButtons from './ActionButtons';
import { AccordionSection } from './AccordionSection';
import { JuliaHeader } from './JuliaHeader';
import { Function } from './Function';

const COLOR_SETS = {
  GRAYSCALE: 'Grayscale',
  RAINBOW: 'Rainbow',
  BLUESCALE: 'Bluescale',
};

const SIZE_SETS = {
  R720: '720',
  R1080: '1080',
  R2K: '2K',
  R4K: '4K',
};

const SettingsSidebar = ({ onSizeChange, onColorChange, onGenerateJuliaSet }: any) => {
  return (
    <Box
      as={'aside'}
      position={['absolute', 'relative']}
      width={['100%', '320px']}
      height={['50vh', '100vh']}
      px={4}
      bottom={0}
      textAlign={'center'}
      borderTopRadius={10}
    >
      <JuliaHeader display={['none', 'flex']} />
      <Accordion allowMultiple defaultIndex={[0, 1]}>
        <AccordionSection
          sectionName={'Color Schema'}
          sectionItems={Object.values(COLOR_SETS)}
          defaultValue={COLOR_SETS.GRAYSCALE}
          onChange={onColorChange}
        />
        <AccordionSection
          sectionName={'Image Size'}
          sectionItems={Object.values(SIZE_SETS)}
          defaultValue={SIZE_SETS.R720}
          onChange={onSizeChange}
        />
      </Accordion>
      <Box padding={'10px 0'}>
        <Heading as={'h4'} size={'sm'}>
          Current Function:
        </Heading>
        <Function exp={2} cRe={0.3} cIm={0.6} />
      </Box>

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
