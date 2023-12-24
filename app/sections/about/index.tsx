import { Grid, GridItem, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SenseiImg from "@/assets/sensei.png";
import { HiArrowLongRight } from "react-icons/hi2";

const AboutSection = () => {
  return (
    <Grid
      marginTop={20}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      alignItems={"center"}
      paddingRight={10}
    >
      <GridItem>
        <Image width={650} src={SenseiImg} alt="guru avatar" />
      </GridItem>
      <GridItem paddingLeft={{ base: 10, md: 0 }}>
        <Stack gap={3}>
          <Text fontSize={"20px"} color={"primary.100"}>
            Experience
          </Text>
          <Heading fontSize={"30px"}>
            We provide you the best experience
          </Heading>
          <Text>
            You dont have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </Text>
          <HStack
            fontSize={"14px"}
            color={"primary.100"}
            cursor={"pointer"}
            _hover={{ fontWeight: "semibold" }}
            width={"fit-content"}
          >
            <Text>More Info</Text>
            <HiArrowLongRight />
          </HStack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default AboutSection;
