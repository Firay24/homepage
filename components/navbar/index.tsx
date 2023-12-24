"use client";
// library style
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

// state from react
import { useEffect, useState } from "react";

// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

// assets
import LogoImg from "@/assets/logo.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const headerBgColor = useColorModeValue("white", "gray.800");
  const headerTextColor = useColorModeValue("black", "white");
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageUrl: string = LogoImg.src as string;

  // handler isScroll?
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // toggle to show menu when mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "sma",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          SMA
        </a>
      ),
    },
    {
      key: "smp",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          SMP
        </a>
      ),
    },
    {
      key: "sd",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          SD
        </a>
      ),
    },
  ];

  return (
    <Stack
      position="fixed"
      width="full"
      bg={scrolling ? headerBgColor : "transparent"}
      transition="background-color 0.3s"
      boxShadow={scrolling ? "sm" : "none"}
      zIndex={999}
    >
      <HStack paddingX={10} paddingY={4} color={headerTextColor}>
        <Image width="250px" src={imageUrl} alt="logo avatar" />
        <Spacer />
        {isMobile ? (
          <>
            {isMenuOpen ? (
              <Stack
                position="fixed"
                top="0"
                left="0px"
                textAlign="center"
                width="full"
                backgroundColor={"white"}
                padding={3}
                height={"100vh"}
              >
                <Stack>
                  <Image width="250px" src={imageUrl} alt="logo avatar" />
                </Stack>
                <Stack
                  gap={8}
                  color={scrolling || isMobile ? "black" : "white"}
                  marginTop={10}
                >
                  <Text as={"a"} href="/">
                    Home
                  </Text>
                  <Text>About</Text>
                  <Accordion allowMultiple>
                    <AccordionItem border={"none"}>
                      <h2>
                        <AccordionButton
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <HStack>
                            <Box as="span" flex="1" textAlign="left">
                              Category
                            </Box>
                            <AccordionIcon />
                          </HStack>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack>
                          <Text>SMA</Text>
                          <Text>SMP</Text>
                          <Text>SD</Text>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Text>Contact</Text>
                </Stack>
              </Stack>
            ) : null}
            <Button
              alignItems="center"
              onClick={toggleMenu}
              backgroundColor={"transparent"}
              color={isMenuOpen ? "blackAlpha.800" : "white"}
              fontSize={"25px"}
              _hover={{ backgroundColor: "transparent", color: "#7879F1" }}
            >
              {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </Button>
          </>
        ) : (
          <HStack gap={8} color={scrolling ? "black" : "white"}>
            <Stack
              _hover={{ backgroundColor: "#7879F1" }}
              padding={2}
              rounded={"md"}
            >
              <Text as={"a"} href="/">
                Home
              </Text>
            </Stack>
            <Stack
              _hover={{ backgroundColor: "#7879F1" }}
              padding={2}
              rounded={"md"}
            >
              <Text as={"a"} href="/">
                About
              </Text>
            </Stack>
            <Dropdown menu={{ items }}>
              <Text cursor={"pointer"} onClick={(e) => e.preventDefault()}>
                <Space>
                  Category
                  <IoIosArrowDown />
                </Space>
              </Text>
            </Dropdown>
            <Stack
              _hover={{ backgroundColor: "#7879F1" }}
              padding={2}
              rounded={"md"}
            >
              <Text as={"a"} href="/">
                Contact
              </Text>
            </Stack>
          </HStack>
        )}
      </HStack>
    </Stack>
  );
};

export default Header;
