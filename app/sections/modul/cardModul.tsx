// library style
import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CardModulProps {
  title: string;
  imgSrc: any;
}

const CardModul = ({ title, imgSrc }: CardModulProps) => {
  return (
    <Stack
      width={{ base: "300px", md: "200px", lg: "300px" }}
      height={{ base: "300px", md: "200px", lg: "300px" }}
      position={"relative"}
      rounded={"md"}
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
        <Image src={imgSrc} alt="murid sd" layout="fill" objectFit="cover" />
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        background="rgba(0, 0, 0, 0.5)"
        pointerEvents="none"
        rounded={"md"}
      />
      <Stack position={"absolute"} gap={0} left={5} bottom={5}>
        <Text color={"white"} fontWeight={"bold"} fontSize={"20px"}>
          {title}
        </Text>
        <Text color={"primary.60"} fontWeight={"medium"}>
          Modul Belajar
        </Text>
      </Stack>
    </Stack>
  );
};

export default CardModul;
