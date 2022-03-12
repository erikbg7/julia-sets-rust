import React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

type Props = {
  defaultValue: string;
  sectionName: string;
  sectionItems: string[];
  onChange: () => void;
};

const AccordionSection = ({ defaultValue, sectionItems, sectionName, onChange }: Props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={600}>
            {sectionName}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <RadioGroup onChange={onChange} defaultValue={defaultValue}>
          <Stack>
            {sectionItems.map((value) => (
              <Radio key={value} value={value}>
                {value}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </AccordionPanel>
    </AccordionItem>
  );
};

export { AccordionSection };
