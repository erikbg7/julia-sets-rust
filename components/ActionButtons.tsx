import { Button, Stack, useBreakpointValue } from '@chakra-ui/react';
import { IoAddCircle, IoCloudDownload } from 'react-icons/io5';
import React from 'react';
import LinkItem from './LinkItem';

type ActionButtonsProps = {
  onGenerateJuliaSet: () => void;
};

const ActionButtons = ({ onGenerateJuliaSet }: ActionButtonsProps) => {
  const isSmallSize = useBreakpointValue({ base: true, md: false });

  if (isSmallSize) {
    return (
      <Stack
        display={['flex', 'none']}
        zIndex={99}
        justifyContent={'space-evenly'}
        direction={'row'}
        bg={'blackAlpha.900'}
        position={'fixed'}
        bottom={0}
        left={0}
        right={0}
        px={2}
        py={3}
      >
        <Button
          onClick={onGenerateJuliaSet}
          leftIcon={<IoAddCircle size={25} />}
          colorScheme="whatsapp"
          variant="solid"
        >
          New Julia Set
        </Button>
        <Button leftIcon={<IoCloudDownload size={25} />} colorScheme="teal" variant="solid">
          Download PNG
        </Button>
      </Stack>
    );
  }
  return (
    <Stack display={['none', 'flex']} mt={30} spacing={4}>
      <Button onClick={onGenerateJuliaSet} leftIcon={<IoAddCircle size={25} />} colorScheme="whatsapp" variant="solid">
        New Julia Set
      </Button>
      <Button leftIcon={<IoCloudDownload size={25} />} colorScheme="teal" variant="solid">
        Download PNG
      </Button>
      <LinkItem href={'julia-sets'}>What is a Julia set?</LinkItem>
    </Stack>
  );
};

export default ActionButtons;
