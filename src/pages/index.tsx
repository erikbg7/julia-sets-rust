import React from 'react';
import SettingsSidebar from '../components/SettingsSidebar';
import { Box, useDisclosure } from '@chakra-ui/react';
import { JuliaImage } from '../components/JuliaImage';
import { GenerateModal } from '../components/GenerateModal';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: 'block', md: 'grid' }} gridTemplateColumns={'320px 1fr'}>
      <SettingsSidebar onGenerateJuliaSet={onOpen} />
      <JuliaImage />
      <GenerateModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Home;
