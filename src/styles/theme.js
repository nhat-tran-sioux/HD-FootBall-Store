/* eslint-disable import/no-anonymous-default-export */
import { breakpoints } from "./breakpoints";
import { spacing } from "./spacing";
import { siteColors } from "./colors";

export default {
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
};
