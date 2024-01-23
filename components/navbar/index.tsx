"use client";

// library style
import {
  Button,
  HStack,
  Image,
  Spacer,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

// state from react
import { useEffect, useState } from "react";

// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

// assets
import LogoImg from "@/assets/logo.png";
import LogoWonderfull from "@/assets/logo-wonderfull.png";
import LogoEss from "@/assets/logo-ess.png";

// components
import ItemOfMenu from "./sections/itemOfMenu";
import ItemOfAccordion from "./sections/itemOfAccordion";
import ItemOfDropdown from "./sections/itemOfDropdown";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiRectangleStack } from "react-icons/hi2";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headerBgColor = useColorModeValue("white", "gray.800");
  const headerTextColor = useColorModeValue("black", "white");
  const imageUrl: string = LogoWonderfull.src as string;
  const imageUrl2: string = LogoEss.src as string;
  const location = usePathname();

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
        {/* logo */}
        <Link href="/">
          <HStack gap={0}>
            <Image
              width={{ base: "30%", md: "15%" }}
              src={imageUrl}
              alt="logo wondefrull indonesia"
            />
            <Image
              width={{ base: "30%", md: "15%" }}
              src={imageUrl2}
              alt="logo ess"
            />
          </HStack>
        </Link>

        <Spacer />

        {isMobile ? (
          // components navbar in mobile size
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
                <Stack marginTop={3} marginLeft={8}>
                  <Link href="/">
                    <Image width="50%" src={imageUrl} alt="logo avatar" />
                  </Link>
                </Stack>
                <Stack
                  gap={8}
                  color={
                    scrolling || isMobile || location !== "/"
                      ? "black"
                      : "white"
                  }
                  marginTop={10}
                >
                  <ItemOfMenu title="Home" isMobile />
                  <ItemOfMenu title="About" isMobile />
                  <ItemOfAccordion />
                  <ItemOfMenu title="Contact" isMobile />
                </Stack>
              </Stack>
            ) : null}

            {/* button to open/close menu item in mobile size */}
            <Button
              alignItems="center"
              onClick={toggleMenu}
              backgroundColor={"transparent"}
              color={
                isMenuOpen || scrolling || location !== "/"
                  ? "blackAlpha.800"
                  : "white"
              }
              fontSize={"25px"}
              _hover={{ backgroundColor: "transparent", color: "#7879F1" }}
            >
              {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </Button>
          </>
        ) : (
          // navbar components in tab or desktop size
          <HStack
            gap={8}
            color={scrolling || location !== "/" ? "black" : "white"}
          >
            <ItemOfMenu title="Home" />
            <ItemOfMenu title="About" />
            <ItemOfDropdown />
            <ItemOfMenu title="Contact" />
          </HStack>
        )}
      </HStack>
    </Stack>
  );
};

export default Header;
