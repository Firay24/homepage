// library style
import { Stack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface ItemOfMenuProps {
  title: string;
  isMobile?: boolean;
  path: string;
  to: string;
}

const ItemOfMenu = ({ title, isMobile = false, path, to }: ItemOfMenuProps) => {
  const location = usePathname();
  return (
    <Stack
      _hover={{
        backgroundColor: isMobile ? "#F5F5F5" : "#196D8F",
        color: "white",
      }}
      padding={2}
      rounded={"md"}
      width={isMobile ? "100%" : "auto"}
      cursor="pointer"
    >
      {location !== "/" ? (
        <NextLink href={path}>{title}</NextLink>
      ) : (
        <Link to={to} smooth={true} duration={500} spy={true}>
          {title}
        </Link>
      )}
    </Stack>
  );
};

export default ItemOfMenu;
