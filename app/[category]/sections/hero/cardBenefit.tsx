// library style
import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";

// icons
import { FaRegFileLines } from "react-icons/fa6";

const CardBenefit = () => {
  return (
    <Stack
      border={"1px"}
      rounded={"xl"}
      borderColor={"gray.500"}
      padding={4}
      minWidth={"262px"}
      width={"full"}
    >
      <Stack gap={0}>
        {/* row-1: icon and title */}
        <Stack>
          <Grid templateColumns={"repeat(5, 1fr)"} alignItems={"center"}>
            {/* icon */}
            <GridItem>
              <Stack
                textAlign={"center"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"22px"}>
                  <FaRegFileLines />
                </Text>
              </Stack>
            </GridItem>
            {/* title */}
            <GridItem colSpan={4}>
              <Stack>
                <Text fontSize={"20px"} fontWeight={"semibold"}>
                  Manfaat
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
        {/* row-2: description */}
        <Stack>
          <Grid templateColumns={"repeat(5, 1fr)"}>
            <GridItem colSpan={4} colStart={2}>
              <Stack>
                <Text color={"primary.300"} fontSize={"14px"}>
                  Pelajari dasar bahasa pemrograman, functional programming.
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardBenefit;
