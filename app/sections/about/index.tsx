"use client";

// library style
import { Grid, GridItem, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

// assets
import SenseiImg from "@/assets/sensei.png";

// icons
import { HiArrowLongRight } from "react-icons/hi2";
import ReadMoreLess from "./readMoreLess";

const AboutSection = () => {
  const paragh =
    "Selamat datang di situs resmi Edu-tourism Laboratorium Enterprise System and Solution Universitas Telkom. Sebuah tempat di mana petualangan pengetahuan bertautan erat dengan pesona alam yang memukau. Bersama-sama, kita akan mengarungi perjalanan edukatif yang melibatkan diri dalam keindahan alam dan kearifan lokal, menciptakan pengalaman belajar yang tak terlupakan. Mari kita terus meresapi kekayaan Banyuwangi melalui lensa pendidikan dan pariwisata yang menyeluruh. Selamat menjelajah! 🌿📚✨";
  return (
    <Grid
      marginTop={20}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      alignItems={"center"}
      paddingRight={10}
      id="about"
    >
      {/* image section */}
      <GridItem>
        <Image width={650} src={SenseiImg} alt="guru avatar" />
      </GridItem>

      {/* content text section */}
      <GridItem paddingLeft={{ base: 10, md: 0 }}>
        <Stack gap={3}>
          <Text fontSize={"20px"} color={"primary.100"}>
            About us
          </Text>
          <Heading fontSize={"30px"}>
            Menggali Ilmu, Menikmati Keindahan!
          </Heading>
          <ReadMoreLess text={paragh} maxLength={200} />
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default AboutSection;
