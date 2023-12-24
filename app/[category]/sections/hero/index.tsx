import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeroImg from "@/assets/heroModule.png";
import Image from "next/image";
import imgSD from "@/assets/sd.jpg";
import { PiMedal } from "react-icons/pi";
import CardBenefit from "./cardBenefit";

const HeroSection = () => {
  return (
    <Stack>
      <Stack position={"relative"}>
        <Image src={HeroImg} alt="Hero image" />
      </Stack>
      <Stack position={"absolute"} top={"100px"}>
        <Stack paddingX={10}>
          <Grid templateColumns="repeat(5, 1fr)" alignItems={"center"}>
            {/* image section */}
            <GridItem>
              <Stack
                width={{ base: "200px", md: "150px", lg: "200px" }}
                height={{ base: "200px", md: "150px", lg: "200px" }}
                position={"relative"}
                rounded={"xl"}
                overflow={"hidden"}
                _hover={{ cursor: "pointer" }}
              >
                <Box
                  width={"100%"}
                  height={"100%"}
                  position={"relative"}
                  rounded={"md"}
                  overflow={"hidden"}
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  transition={"transform 0.3s ease"}
                >
                  <Image
                    src={imgSD}
                    alt="murid sd"
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </Stack>
            </GridItem>

            {/* text section */}
            <GridItem colSpan={3}>
              <Stack width={"90%"}>
                <Heading>Modul Belajar SD</Heading>
                <Text>
                  Pelajari dasar bahasa pemrograman, functional programming,
                  object-oriented programming (OOP), serta concurrency dengan
                  menggunakan Kotlin.
                </Text>
              </Stack>
            </GridItem>

            {/* button download */}
            <GridItem>
              <Stack backgroundColor={"white"} padding={4} rounded={"xl"}>
                <Stack textAlign={"center"}>
                  <Text color={"primary.300"}>
                    Dowload modul dibawah ini sekarang
                  </Text>
                </Stack>
                <Button
                  backgroundColor={"primary.100"}
                  color={"white"}
                  _hover={{ backgroundColor: "primary.200" }}
                >
                  Download
                </Button>
              </Stack>
            </GridItem>
          </Grid>
          <Stack marginTop={8}>
            <HStack fontSize={"18px"}>
              <PiMedal />
              <Text fontWeight={"medium"}>Apa yang Anda dapatkan?</Text>
            </HStack>
            <Grid
              marginTop={5}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
            >
              <GridItem>
                <CardBenefit />
              </GridItem>
              <GridItem>
                <CardBenefit />
              </GridItem>
              <GridItem>
                <CardBenefit />
              </GridItem>
              <GridItem>
                <CardBenefit />
              </GridItem>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
