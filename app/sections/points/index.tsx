// library style
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

// components
import ParagComponent from "./paragf";

// data
import { dataItems } from "./data";

interface DataItemsProps {
  title: string;
  description: string;
}

const PointSections = () => {
  return (
    <Stack marginTop={15}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        paddingX={10}
        alignItems={"center"}
      >
        <GridItem>
          <Stack
            width={{ base: "100%", md: "70%", lg: "60%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontWeight={"black"} fontSize={"30px"}>
              <Box as="span" color="primary.100">
                Why
              </Box>{" "}
              Choosing Us
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={{ md: 3 }} marginTop={{ base: 5 }}>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={5}
          >
            {dataItems.map((item: DataItemsProps, index: number) => (
              <GridItem key={index}>
                <ParagComponent {...item} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default PointSections;
