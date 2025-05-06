import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ImgNodataPngSVG: React.FC<IconProps> = ({
  color = "#002D63",
  size = "24px",
  width,
  height,
  ...rest
}) => (
  <StyledSvg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2ZM5 0C2.23858 0 0 2.23858 0 5V19C0 21.7614 2.23858 24 5 24H19C21.7614 24 24 21.7614 24 19V5C24 2.23858 21.7614 0 19 0H5Z"
      fill="currentColor"
    />
  </StyledSvg>
);

export default ImgNodataPngSVG;
