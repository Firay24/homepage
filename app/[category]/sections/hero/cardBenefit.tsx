import { Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import { FaRegFileLines } from "react-icons/fa6";

const CardBenefit = () => {
  return (
    <Stack
      border={"1px"}
      rounded={"xl"}
      borderColor={"gray.500"}
      padding={4}
      width={"262px"}
    >
      <Stack gap={0}>
        <Stack>
          <Grid templateColumns={"repeat(5, 1fr)"} alignItems={"center"}>
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
            <GridItem colSpan={4}>
              <Stack>
                <Text fontSize={"20px"} fontWeight={"semibold"}>
                  Manfaat
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
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
      {/* <HStack>
        <Stack
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={"22px"}>
            <FaRegFileLines />
          </Text>
        </Stack>
        <Stack>
          <Text fontSize={"20px"} fontWeight={"semibold"}>
            Manfaat
          </Text>
        </Stack>
      </HStack>
      <Stack>
        <Text color={"primary.300"} fontSize={"14px"}>
          Pelajari dasar bahasa pemrograman, functional programming.
        </Text>
      </Stack> */}
    </Stack>
  );
};

export default CardBenefit;
