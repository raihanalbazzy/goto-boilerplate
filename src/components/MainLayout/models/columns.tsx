import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from "@ant-design/icons";
import { getItem } from "../utils";
import type { MenuItem } from "./types";

export const DEFAULT_SIDE_ITEM: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
];
