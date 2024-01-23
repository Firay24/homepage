import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  List,
  ListItem,
  OrderedList,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GoClock, GoProjectRoadmap } from "react-icons/go";

interface SilabusProps {
  title: string;
  subtitle: string;
  content: string | string[];
}

interface TabSectionProps {
  description?: string;
  silabus?: SilabusProps[];
}

const TabSection = ({ description, silabus }: TabSectionProps) => {
  return (
    <Stack marginTop={5}>
      <Stack paddingX={10}>
        <Tabs variant={"unstyled"}>
          <TabList borderBottom={"2px solid transparent"}>
            <Tab
              _selected={{
                borderBottom: "2px",
                color: "primary.100",
                fontWeight: "semibold",
              }}
              color={"primary.300"}
            >
              Deskripsi
            </Tab>
            <Tab
              _selected={{
                borderBottom: "2px",
                color: "primary.100",
                fontWeight: "semibold",
              }}
              color={"primary.300"}
            >
              Silabus
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>{description}</Text>
              {/* <Text marginTop={3}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </Text> */}
            </TabPanel>
            <TabPanel>
              <Accordion allowMultiple>
                <AccordionItem
                  border={"1px"}
                  borderColor={"gray.400"}
                  rounded={"md"}
                  marginTop={4}
                >
                  <h2>
                    <AccordionButton
                      justifyContent={"start"}
                      alignItems={"start"}
                    >
                      <Stack textAlign={"left"}>
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          {silabus && silabus[0].title}
                        </Text>
                        <Text color={"primary.300"} fontSize={"14px"}>
                          {silabus && silabus[0].subtitle}
                        </Text>
                        <HStack
                          color={"gray.700"}
                          fontSize={"12px"}
                          marginTop={2}
                        >
                          <HStack>
                            <GoClock />
                            <Text>20 Jam</Text>
                          </HStack>
                          <HStack>
                            <GoProjectRoadmap />
                            <Text>10 Topik</Text>
                          </HStack>
                        </HStack>
                      </Stack>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize={"14px"}
                    paddingTop={3}
                    backgroundColor={"gray.50"}
                  >
                    <Text>{silabus && silabus[0].content}</Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  border={"1px"}
                  borderColor={"gray.400"}
                  rounded={"md"}
                  marginTop={4}
                >
                  <h2>
                    <AccordionButton
                      justifyContent={"start"}
                      alignItems={"start"}
                    >
                      <Stack textAlign={"left"}>
                        <Text fontWeight={"semibold"} fontSize={"18px"}>
                          {silabus && silabus[1].title}
                        </Text>
                        <Text color={"primary.300"} fontSize={"14px"}>
                          {silabus && silabus[1].subtitle}
                        </Text>
                        <HStack
                          color={"gray.700"}
                          fontSize={"12px"}
                          marginTop={2}
                        >
                          <HStack>
                            <GoClock />
                            <Text>20 Jam</Text>
                          </HStack>
                          <HStack>
                            <GoProjectRoadmap />
                            <Text>10 Topik</Text>
                          </HStack>
                        </HStack>
                      </Stack>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize={"14px"}
                    paddingTop={3}
                    backgroundColor={"gray.50"}
                  >
                    <OrderedList spacing={2}>
                      {silabus &&
                        Array.isArray(silabus[1].content) &&
                        silabus[1].content.map(
                          (item: string, index: number) => (
                            <ListItem key={index}>{item}</ListItem>
                          )
                        )}
                    </OrderedList>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Stack>
  );
};

export default TabSection;
