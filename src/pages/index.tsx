import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";

import { Home } from "../modules/Home";
import { theme } from "../themes";

const HomeScreen: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default HomeScreen;
