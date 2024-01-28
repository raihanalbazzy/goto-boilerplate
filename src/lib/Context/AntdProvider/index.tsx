import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";
import { AntdProviderType } from "./models/types";
import { antdTheme } from "./models/theme";

const AntdProvider: AntdProviderType = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

export default AntdProvider;
