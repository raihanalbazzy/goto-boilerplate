"use client";

import React from "react";
import Button from "antd/es/button";
import Layout from "antd/es/layout";
import Sider from "antd/es/layout/Sider";
import Menu from "antd/es/menu";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useToggle } from "@uidotdev/usehooks";
import Image from "next/image";
// Change the DEFAULT_SIDE_ITEM to role based menu
import { DEFAULT_SIDE_ITEM } from "./models/columns";
import type { MainLayoutType } from "./models/types";

const { Header, Content } = Layout;

const MainLayout: MainLayoutType = ({ children }) => {
  const [collapsed, toggle] = useToggle(true);
  return (
    <Layout className="min-h-screen!">
      <Sider className="text-right" theme="light" collapsible collapsed={collapsed}>
        <Button type="text" onClick={() => toggle()} className="m-4 text-right">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={DEFAULT_SIDE_ITEM} />
      </Sider>
      <Layout>
        <Header className="!bg-white">
          <figure className=" relative h-full max-w-[150px]">
            <Image src="/images/logo.png" fill alt="logo" />
          </figure>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
