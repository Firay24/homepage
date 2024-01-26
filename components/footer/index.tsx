import { Divider, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import LogoImg from "@/assets/logo-ess-white.png";
import { Image } from "@chakra-ui/react";
import SosmedIcons from "./sosmedIcons";

const FooterSection = () => {
  const imgUrl: string = LogoImg.src as string;
  return (
    <Stack backgroundColor={"#155D7A"} marginTop={20} padding={10} id="footer">
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
        <GridItem>
          <Stack>
            <Stack>
              <Image src={imgUrl} alt="logo" width={"40%"} />
            </Stack>
            <Stack width={{ base: "100%", md: "70%" }}>
              <Text color={"white"} fontWeight={"normal"}>
                Edu-Tourism Laboratorium Enterprise System and Solution
                Universitas Telkom
              </Text>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={{ base: "start", md: "end" }}>
            <SosmedIcons />
          </Stack>
        </GridItem>
      </Grid>
      <Divider marginY={3} />
      <Stack textAlign={"center"}>
        <Text color={"white"} fontWeight={"normal"} fontSize={"12px"}>
          Copyright © 2024 ESS Laboratory | Universitas Telkom
        </Text>
      </Stack>
    </Stack>
  );
};

export default FooterSection;
