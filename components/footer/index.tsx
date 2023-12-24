import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import LogoImg from "@/assets/logoWhite.png";
import Image from "next/image";
import SosmedIcons from "./sosmedIcons";

const FooterSection = () => {
  return (
    <Stack backgroundColor={"primary.100"} marginTop={20} padding={10}>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
        <GridItem>
          <Stack>
            <Stack>
              <Image src={LogoImg} alt="logo" />
            </Stack>
            <Stack width={{ base: "100%", md: "70%" }}>
              <Text color={"white"} fontWeight={"normal"}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
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
          Copyright © 2023 Lorem Comunity | All Rights Reserved
        </Text>
      </Stack>
    </Stack>
  );
};

export default FooterSection;
