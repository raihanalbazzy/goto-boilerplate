import type { PropsWithChildren } from "react";
import type { MenuProps } from "antd";

export type MainLayoutType = (props: PropsWithChildren) => JSX.Element;
export type MenuItem = Required<MenuProps>["items"][number];
