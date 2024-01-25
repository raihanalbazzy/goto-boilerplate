import primaryToken from "../../../../theme";
import { ThemeConfig } from "antd";
import { Inter } from "next/font/google";

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
