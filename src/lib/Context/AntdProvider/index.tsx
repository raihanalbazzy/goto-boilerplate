import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { antdTheme } from "./models/theme";
import type { AntdProviderType } from "./models/types";

const AntdProvider: AntdProviderType = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default AntdProvider;
