import React from 'react';
import { AccordionButton, AccordionIcon, Box } from '@chakra-ui/react';

const AccordionSection = ({ name }: { name: string }) => {
  return (
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight={600}>
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
};

export default AccordionSection;
