import { MenuProps } from "antd";
import { PropsWithChildren } from "react";

export type MainLayoutType = (props: PropsWithChildren) => JSX.Element;
export type MenuItem = Required<MenuProps>["items"][number];
