import type { PropsWithChildren } from "react";
import React from "react";
import MainLayout from "../MainLayout/Lazy";

// Change by using API
const login = false;

const RootLayout = ({ children }: PropsWithChildren) => {
  if (login) {
    return <MainLayout>{children}</MainLayout>;
  }
  return children;
};

export default RootLayout;
