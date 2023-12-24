// library style
import { Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";

// component
import CardTeam from "./cardTeam";

const TeamSections = () => {
  return (
    <Stack marginTop={20} alignItems={"center"}>
      <Heading>Meet our team members</Heading>
      <Stack
        width={{ base: "80%", md: "40%" }}
        textAlign={"center"}
        color={"primary.300"}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
          gravida malesuada quam commodo id integer nam.
        </Text>
      </Stack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        marginTop={8}
        gap={5}
        paddingX={10}
      >
        <GridItem>
          <CardTeam />
        </GridItem>
        <GridItem>
          <CardTeam />
        </GridItem>
        <GridItem colSpan={{ md: 2, lg: 1 }} margin={{ md: "auto" }}>
          <CardTeam />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default TeamSections;
