// Library imports
import { Text } from "@chakra-ui/react";
import { Dropdown, Menu, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const ItemOfDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="sma">
        <Link href="/sma">SMA</Link>
      </Menu.Item>
      <Menu.Item key="smp">
        <Link href="/smp">SMP</Link>
      </Menu.Item>
      <Menu.Item key="sd">
        <Link href="/sd">SD</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Text cursor={"pointer"}>
        <Space>
          Category
          <IoIosArrowDown />
        </Space>
      </Text>
    </Dropdown>
  );
};

export default ItemOfDropdown;
