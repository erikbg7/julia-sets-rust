import React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
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
      <AccordionButton>
        <Heading as={'h3'} size={'sm'} flex={1} textAlign={'left'}>
          {sectionName}
        </Heading>
        <AccordionIcon />
      </AccordionButton>
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
