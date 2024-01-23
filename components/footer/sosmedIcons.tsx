// library style
import { Button, HStack, Link as ChakraLink } from "@chakra-ui/react";

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const SosmedIcons = () => {
  const icons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    AiFillInstagram,
    FaYoutube,
  ];
  const socialMediaLinks = [
    "#",
    "#",
    "#",
    "https://www.instagram.com/esslabriset?igsh=MTh4b3A1cWVncmFiOQ==",
    "#",
  ];

  return (
    <HStack marginTop={5}>
      {icons.map((Icon, index) => (
        <ChakraLink
          href={socialMediaLinks[index]}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          isExternal
        >
          <Button color={"primary.300"} size={"sm"}>
            <Icon />
          </Button>
        </ChakraLink>
      ))}
    </HStack>
  );
};

export default SosmedIcons;
