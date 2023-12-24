import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

const ItemOfAccordion = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem border={"none"}>
        <h2>
          <AccordionButton justifyContent={"center"} alignItems={"center"}>
            <HStack>
              <Box as="span" flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </HStack>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack>
            <Text>SMA</Text>
            <Text>SMP</Text>
            <Text>SD</Text>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ItemOfAccordion;
