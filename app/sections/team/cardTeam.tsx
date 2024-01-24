// library style
import { Avatar, HStack, Spacer, Stack, Text } from "@chakra-ui/react";

// asset
import profilImg from "@/assets/profile.jpg";

// icon
import ButtonIcons from "./buttonIcons";

interface CardTeamProps {
  name: string;
  email: string;
  desc: string;
}

const CardTeam = ({ name, email, desc }: CardTeamProps) => {
  const imageUrl: string = profilImg.src as string;
  return (
    <Stack
      border={"1px"}
      borderColor={"gray.300"}
      rounded={"xl"}
      padding={8}
      width={"300px"}
      height={"auto"}
      minHeight={"280px"}
      cursor={"pointer"}
      _hover={{ backgroundColor: "gray.50" }}
    >
      <Stack>
        <HStack gap={5}>
          {/* <Avatar src={imageUrl} name="John Carter" /> */}
          <Stack gap={0}>
            <Text fontWeight={"bold"} fontSize={"20px"}>
              {name}
            </Text>
            <Text fontSize={"14px"} color={"primary.300"} fontWeight={"medium"}>
              {email}
            </Text>
          </Stack>
        </HStack>
        <Stack marginTop={2}>
          <Text fontSize={"14px"} color={"primary.300"}>
            {desc}
          </Text>
        </Stack>
      </Stack>
      <Spacer />
      <ButtonIcons />
    </Stack>
  );
};

export default CardTeam;
