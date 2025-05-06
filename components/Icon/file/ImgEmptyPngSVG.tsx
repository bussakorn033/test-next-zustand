import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ImgEmptyPngSVG: React.FC<IconProps> = ({
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
      d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7ZM7 5C5.89543 5 5 5.89543 5 7V14.5858L8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L13 14.5858L13.2929 14.2929C13.6834 13.9024 14.3166 13.9024 14.7071 14.2929L19 18.5858V17V7C19 5.89543 18.1046 5 17 5H7Z"
      fill="currentColor"
    />
  </StyledSvg>
);

export default ImgEmptyPngSVG;
