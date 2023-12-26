// library style
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
import Image from "next/image";

// assets
import HeroImg from "@/assets/heroModule.png";
import imgSD from "@/assets/sd.jpg";

// icon
import { PiMedal } from "react-icons/pi";

// component
import CardBenefit from "./cardBenefit";

const HeroSection = () => {
  return (
    <Stack>
      <Stack position={"relative"} height={"fit-content"} paddingBottom={5}>
        {/* hero image section */}
        <Box width={"auto"} height={"100%"}>
          <Image
            src={HeroImg}
            alt="Hero image"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* content hero section overlay */}
        <Stack
          marginTop={"100px"}
          width={"100%"}
          zIndex={100}
          position={{ base: "relative", md: "relative" }}
        >
          <Stack paddingX={10}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              alignItems={"center"}
              gap={5}
            >
              {/* image section */}
              <GridItem rowSpan={{ md: 2, lg: 0 }} height={"100%"}>
                <Stack
                  width={{ base: "100%", md: "auto", lg: "200px" }}
                  height={{ base: "200px", md: "full", lg: "200px" }}
                  position={"relative"}
                  rounded={"xl"}
                >
                  <Box
                    width={"100%"}
                    height={"100%"}
                    position={"relative"}
                    rounded={"xl"}
                    overflow={"hidden"}
                  >
                    {/* <Text>Fira</Text> */}
                    <Image
                      src={imgSD}
                      alt="murid sd"
                      layout={"fill"}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </Box>
                </Stack>
              </GridItem>

              {/* text section */}
              <GridItem colSpan={{ base: 0, md: 2, lg: 3 }}>
                <Stack width={{ base: "full", md: "90%" }}>
                  <Heading>Modul Belajar SD</Heading>
                  <Text>
                    Pelajari dasar bahasa pemrograman, functional programming,
                    object-oriented programming (OOP), serta concurrency dengan
                    menggunakan Kotlin.
                  </Text>
                </Stack>
              </GridItem>

              {/* button download */}
              <GridItem
                colStart={{ md: 2 }}
                colSpan={{ md: 2, lg: 1 }}
                height={{ md: "auto", lg: "200px" }}
                width={{ base: "full", md: "auto" }}
              >
                <Stack justifyContent={"center"} width={"full"} height={"full"}>
                  <Stack
                    backgroundColor={"white"}
                    padding={4}
                    rounded={"xl"}
                    width={{ base: "full", md: "fit-content" }}
                  >
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
                </Stack>
              </GridItem>
            </Grid>

            {/* benefit section */}
            <Stack marginTop={{ base: 8, md: 0 }}>
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
                gap={3}
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
    </Stack>
  );
};

export default HeroSection;
