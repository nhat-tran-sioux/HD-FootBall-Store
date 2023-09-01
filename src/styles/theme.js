/* eslint-disable import/no-anonymous-default-export */
import { breakpoints, spacing, siteColors } from "./utils";

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
