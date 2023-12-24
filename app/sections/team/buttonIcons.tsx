// library style
import { Button, HStack } from "@chakra-ui/react";

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const ButtonIcons = () => {
  const icons = [FaFacebookF, FaTwitter, FaLinkedinIn, AiFillInstagram];
  return (
    <HStack marginTop={5}>
      {icons.map((Icon, index) => (
        <Button color={"primary.300"} size={"sm"} key={index}>
          <Icon />
        </Button>
      ))}
    </HStack>
  );
};

export default ButtonIcons;
