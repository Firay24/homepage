// library style
import { Avatar, HStack, Stack, Text } from "@chakra-ui/react";

// asset
import profilImg from "@/assets/profile.jpg";

// icon
import ButtonIcons from "./buttonIcons";

const CardTeam = () => {
  const imageUrl: string = profilImg.src as string;
  return (
    <Stack
      border={"1px"}
      borderColor={"gray.300"}
      rounded={"xl"}
      padding={8}
      width={"300px"}
      height={"auto"}
      cursor={"pointer"}
      _hover={{ backgroundColor: "gray.50" }}
    >
      <HStack gap={5}>
        <Avatar src={imageUrl} name="John Carter" />
        <Stack gap={0}>
          <Text fontWeight={"bold"} fontSize={"20px"}>
            John Carter
          </Text>
          <Text fontSize={"14px"} color={"primary.300"} fontWeight={"medium"}>
            CEO & CO-FOUNDER
          </Text>
        </Stack>
      </HStack>
      <Stack marginTop={2}>
        <Text fontSize={"14px"} color={"primary.300"}>
          Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit
          pretium nulla sed enim iaculis mi.{" "}
        </Text>
      </Stack>
      <ButtonIcons />
    </Stack>
  );
};

export default CardTeam;
