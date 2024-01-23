// library style
import { Grid, GridItem, Icon, Stack, Text } from "@chakra-ui/react";

// icons
import { FaRegFileLines } from "react-icons/fa6";
import { IconProps } from "@chakra-ui/react";

interface CardBenefitProps {
  title: string;
  sub: string;
  icon: React.ElementType;
}

const CardBenefit = ({ title, sub, icon }: CardBenefitProps) => {
  return (
    <Stack
      border={"1px"}
      rounded={"xl"}
      borderColor={"gray.500"}
      padding={4}
      minWidth={"262px"}
      width={"full"}
      minHeight={"130px"}
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
                <Icon as={icon} fontSize={"22px"} />
              </Stack>
            </GridItem>
            {/* title */}
            <GridItem colSpan={4}>
              <Stack>
                <Text fontSize={"20px"} fontWeight={"semibold"}>
                  {title}
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
                  {sub}
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
