import type { ThemeConfig } from "antd";
import { Inter } from "next/font/google";
import primaryToken from "../../../../../theme";

const font = Inter({ subsets: ["latin"] });

const antdTheme: ThemeConfig = {
  token: {
    ...font.style,
    fontFamilyCode: font.style.fontFamily,
  },
  components: {
    Button: {
      colorPrimaryBg: primaryToken.gogoGreen,
      colorPrimaryBorder: primaryToken.gogoGreen,
    },
  },
};

export { antdTheme, font };
