import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const SVG: React.FC<IconProps> = ({color, size, width, height}) => (
  <StyledSvg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    color={color}
    width={width}
    height={height}
  ></StyledSvg>
);

SVG.defaultProps = {
  color: "#002D63",
  size: "24px",
  width: "24px",
  height: "24px",
};

SVG.displayName = "SVG";

export default SVG;
