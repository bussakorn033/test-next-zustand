import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ImgProfileCircleSVG: React.FC<IconProps> = ({
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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 16C8 14.3431 9.34315 13 11 13H13C14.6569 13 16 14.3431 16 16V17H8V16Z"
      fill="currentColor"
    />
  </StyledSvg>
);

export default ImgProfileCircleSVG;
