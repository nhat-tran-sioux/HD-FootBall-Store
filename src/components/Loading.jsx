import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

import { Box } from "@mui/material";

const animationGrow = keyframes`
  to {
    transform: scale(0);
  }
`;

const LoadingBall = styled(Box)`
  will-change: transform;
  width: ${({ theme }) => theme.spacing.baseUnit};
  height: ${({ theme }) => theme.spacing.baseUnit};
  content: "";
  border-radius: 50%;
  animation: ${animationGrow} 1s ease-in-out infinite alternate;
  animation-delay: ${({ index }) => (1 / 3) * index}s;
  transform-origin: 100% 50%;
`;

const Loading = ({ height, itemColors }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
    width="100%"
  >
    {itemColors.map((backgroundColor, i) => (
      <LoadingBall
        key={`loading-ball-${backgroundColor}`}
        backgroundColor={backgroundColor}
        m="baseDown3"
        index={i}
      />
    ))}
  </Box>
);

Loading.defaultProps = {
  height: "auto",
  itemColors: ["red", "blue", "yellow"],
};

Loading.propTypes = {
  height: PropTypes.string,
  itemColors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Loading;
