import React from 'react';
import { Accordion, Stack, Box, Text, Heading } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

import ActionButtons from './ActionButtons';
import { AccordionSection } from './AccordionSection';
import { JuliaHeader } from './JuliaHeader';
import { Function } from './Function';
import { useJuliaSet } from '../hooks/useJuliaFunction';
import { COLOR_SETS, ENGINE_SETS, SIZE_SETS } from '../config/sets';

type SettingsSidebarType = {
  onGenerateJuliaSet: () => void;
};

const SettingsSidebar = ({ onGenerateJuliaSet }: SettingsSidebarType) => {
  const { re, im, setColor, setSize, setEngine } = useJuliaSet();

  return (
    <Box
      as={'aside'}
      position={{ base: 'absolute', md: 'relative' }}
      overflowY={'scroll'}
      width={{ base: '100%', md: '320px' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      height={{ base: '50%', md: '100%' }}
      // height={['50vh', '100vh']}
      px={4}
      bottom={0}
      textAlign={'center'}
    >
      <Box>
        <Heading my={4} as={'h2'} size={'md'}>
          Settings
        </Heading>
        <Accordion allowMultiple defaultIndex={[0, 1, 2]}>
          <AccordionSection
            sectionName={'Color Schema'}
            sectionItems={Object.values(COLOR_SETS)}
            defaultValue={COLOR_SETS.GRAYSCALE}
            onChange={setColor}
          />
          <AccordionSection
            sectionName={'Image Size'}
            sectionItems={Object.values(SIZE_SETS)}
            defaultValue={SIZE_SETS.R720}
            onChange={setSize}
          />
          <AccordionSection
            sectionName={'Engine'}
            sectionItems={Object.values(ENGINE_SETS)}
            defaultValue={ENGINE_SETS.RUST}
            onChange={setEngine}
          />
        </Accordion>
      </Box>
      <Box>
        {!!(re || im) && (
          <Box padding={'10px 0'}>
            <Heading as={'h4'} size={'sm'}>
              Current Function:
            </Heading>
            <Function exp={2} cRe={re} cIm={im} />
          </Box>
        )}
        <ActionButtons onGenerateJuliaSet={onGenerateJuliaSet} />
      </Box>
    </Box>
  );
};

export default SettingsSidebar;
