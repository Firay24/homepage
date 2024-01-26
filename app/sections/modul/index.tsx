// library style
import { Button, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";

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
      paddingX={5}
    >
      <Heading textAlign={{ base: "center", md: "left" }} fontSize={"30px"}>
        Our Program and Study Modules
      </Heading>
      <Text textAlign="center" paddingX={5}>
        Selamat datang di situs resmi Edu-tourism Laboratorium Enterprise System
        and Solution Universitas Telkom. Sebuah tempat di mana petualangan
        pengetahuan bertautan erat dengan pesona alam yang memukau.
        Bersama-sama, kita akan mengarungi perjalanan edukatif yang melibatkan
        diri dalam keindahan alam dan kearifan lokal, menciptakan pengalaman
        belajar yang tak terlupakan. Mari kita terus meresapi kekayaan
        Banyuwangi melalui lensa pendidikan dan pariwisata yang menyeluruh.
        Selamat menjelajah! 🌿📚✨
      </Text>
      <Button
        backgroundColor="primary.100"
        _hover={{ backgroundColor: "primary.200" }}
        color={"white"}
        rounded="full"
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
