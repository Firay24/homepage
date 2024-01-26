"use client";
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

// icon
import { PiMedal } from "react-icons/pi";

// component
import CardBenefit from "./cardBenefit";

// data
import { benefit } from "../../data";

interface HeroSectionProps {
  title?: string;
  imgSrc?: any;
  heroContent?: string;
  description?: string;
  file?: string;
  id?: string;
}

interface CardBenefitProps {
  title: string;
  sub: string;
  icon: React.ElementType;
}

const HeroSection = ({
  title,
  imgSrc,
  heroContent,
  file,
  id,
}: HeroSectionProps) => {
  const handleDownload = () => {
    const fileUrl = typeof file === "string" ? file : "https://default-url.com";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", `modul-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                  height={{ base: "250px", md: "full", lg: "200px" }}
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
                      src={imgSrc}
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
                  <Heading>{title}</Heading>
                  <Text>{heroContent}</Text>
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
                      onClick={handleDownload}
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
                {benefit.map((item: CardBenefitProps, index: number) => (
                  <GridItem key={index}>
                    <CardBenefit {...item} />
                  </GridItem>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
