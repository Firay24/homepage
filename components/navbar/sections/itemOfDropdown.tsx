// lbrary style
import { Text } from "@chakra-ui/react";
import { Dropdown, Space } from "antd";

// icon
import { IoIosArrowDown } from "react-icons/io";

// data
import items from "../util/data";

const ItemOfDropdown = () => {
  return (
    <Dropdown menu={{ items }}>
      <Text cursor={"pointer"} onClick={(e) => e.preventDefault()}>
        <Space>
          Category
          <IoIosArrowDown />
        </Space>
      </Text>
    </Dropdown>
  );
};

export default ItemOfDropdown;
