import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { breakpoints, siteColors, spacing } from "../styles";
import Router from "./Router";

const Root = () => (
  <ThemeProvider
    theme={{
      breakpoints,
      spacing,
      fontFamily: {
        base: "FTPolar, Helvetica, system-ui, sans-serif",
      },
      fontWeights: {
        normal: 400,
        bold: 800,
      },
      colors: {
        ...siteColors,
      },
    }}
  >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
