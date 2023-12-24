import { Stack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface ItemOfMenuProps {
  title: string;
  isMobile?: boolean;
  path?: string;
}

const ItemOfMenu = ({
  title,
  isMobile = false,
  path = "/",
}: ItemOfMenuProps) => {
  return (
    <Stack
      _hover={{ backgroundColor: isMobile ? "#F5F5F5" : "#7879F1" }}
      padding={2}
      rounded={"md"}
      width={isMobile ? "100%" : "auto"}
    >
      <Link href={path}>{title}</Link>
    </Stack>
  );
};

export default ItemOfMenu;
