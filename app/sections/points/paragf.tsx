// library style
import { HStack, Stack, Text } from "@chakra-ui/react";

// icons
import { HiArrowLongRight } from "react-icons/hi2";

interface ParagComponentProps {
  title: string;
  description: string;
}

const ParagComponent = ({ title, description }: ParagComponentProps) => {
  return (
    <Stack>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        {title}
      </Text>
      <Text fontSize={"16px"}>{description}</Text>
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
  );
};

export default ParagComponent;
