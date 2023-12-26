import type { MenuProps } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    key: "sma",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/sma">
        SMA
      </Link>
    ),
  },
  {
    key: "smp",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/smp">
        SMP
      </Link>
    ),
  },
  {
    key: "sd",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/sd">
        SD
      </Link>
    ),
  },
];

export default items;
