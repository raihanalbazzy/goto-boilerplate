"use client";
import React from "react";
import Sider from "antd/es/layout/Sider";
import Layout from "antd/es/layout";
import Button from "antd/es/button";
import Menu from "antd/es/menu";
import Image from "next/image";

import { MainLayoutType } from "./models/types";
// Change the DEFAULT_SIDE_ITEM to role based menu
import { DEFAULT_SIDE_ITEM } from "./models/columns";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useToggle } from "@uidotdev/usehooks";

const { Header, Content } = Layout;

const MainLayout: MainLayoutType = ({ children }) => {
  const [collapsed, toggle] = useToggle(true);
  return (
    <Layout className="min-h-screen!">
      <Sider
        className="text-right"
        theme="light"
        collapsible
        collapsed={collapsed}
      >
        <Button type="text" onClick={() => toggle()} className="text-right m-4">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={DEFAULT_SIDE_ITEM}
        />
      </Sider>
      <Layout>
        <Header className="!bg-white">
          <figure className=" relative max-w-[150px] h-full">
            <Image src="/images/logo.png" fill alt="logo" />
          </figure>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
