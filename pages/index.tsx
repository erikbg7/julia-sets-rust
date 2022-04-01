import React from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import { Box, useDisclosure } from '@chakra-ui/react';
import { JuliaHeader } from '../components/JuliaHeader';
import { JuliaImage } from '../components/JuliaImage';
import { GenerateModal } from '../components/GenerateModal';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box height={'100vh'} display={['block', 'grid']} gridTemplateColumns={'320px 1fr'}>
      <JuliaHeader display={['flex', 'none']} />
      <SettingsSidebar onGenerateJuliaSet={onOpen} />
      <JuliaImage />
      <GenerateModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Home;
