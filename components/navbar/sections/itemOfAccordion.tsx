// lbrary style
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
import Link from "next/link";

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
            <Link href="/sd">SD</Link>
            <Link href="/smp">SMP</Link>
            <Link href="/sma">SMA</Link>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default ItemOfAccordion;
