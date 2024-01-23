import { HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

interface ReadMoreLessProps {
  text: string;
  maxLength: number;
}

const ReadMoreLess = ({ text, maxLength }: ReadMoreLessProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortenedText = isExpanded ? text : text.slice(0, maxLength);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Stack>
      <Text>{shortenedText}</Text>
      <HStack
        fontSize={"14px"}
        color={"primary.100"}
        cursor={"pointer"}
        _hover={{ fontWeight: "semibold" }}
        width={"fit-content"}
        onClick={toggleReadMore}
      >
        <Text>{isExpanded ? "Read Less" : "Read More"}</Text>
        {isExpanded ? <HiArrowLongLeft /> : <HiArrowLongRight />}
      </HStack>
    </Stack>
  );
};

export default ReadMoreLess;
