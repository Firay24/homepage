// library style
import { Button, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";

// components
import CardModul from "./cardModul";

// data
import { dataItems } from "./data";

interface CardModulProps {
  title: string;
  imgSrc: any;
}

const ModulSection = () => {
  return (
    <Stack
      marginTop={20}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      <Heading fontSize={"30px"}>Our Featured and Past Project</Heading>
      <Button
        backgroundColor="primary.100"
        _hover={{ backgroundColor: "primary.200" }}
        color={"white"}
      >
        Download
      </Button>

      {/* module card components */}
      <Grid
        marginTop={8}
        gap={5}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {dataItems.map((item: CardModulProps, index: number) => (
          <GridItem key={index}>
            <CardModul {...item} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default ModulSection;
