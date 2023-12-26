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

const TabSection = () => {
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
              <Text>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </Text>
              <Text marginTop={3}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </Text>
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
                          Perkenalan
                        </Text>
                        <Text color={"primary.300"} fontSize={"14px"}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here, making it look like readable English.
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
                    fontWeight={"semibold"}
                    fontSize={"14px"}
                    paddingTop={3}
                    backgroundColor={"gray.50"}
                  >
                    <OrderedList spacing={2}>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        Do eiusmod tempor incididunt ut labore et dolore magna
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                    </OrderedList>
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
                          Perkenalan
                        </Text>
                        <Text color={"primary.300"} fontSize={"14px"}>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using Content here, content
                          here, making it look like readable English.
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
                    fontWeight={"semibold"}
                    fontSize={"14px"}
                    paddingTop={3}
                    backgroundColor={"gray.50"}
                  >
                    <OrderedList spacing={2}>
                      <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        Do eiusmod tempor incididunt ut labore et dolore magna
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
                      <ListItem>
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                        <Text color={"gray.700"} fontWeight={"normal"}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which dont look even slightly believable.
                        </Text>
                      </ListItem>
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
