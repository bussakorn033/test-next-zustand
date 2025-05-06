import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const CheckCircleSVG: React.FC<IconProps> = ({
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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7071 10.2929C17.0976 9.90237 17.0976 9.26921 16.7071 8.87868C16.3166 8.48816 15.6834 8.48816 15.2929 8.87868L11 13.1716L8.70711 10.8787C8.31658 10.4882 7.68342 10.4882 7.29289 10.8787C6.90237 11.2692 6.90237 11.9024 7.29289 12.2929L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L16.7071 10.2929Z"
      fill="currentColor"
    />
  </StyledSvg>
);

export default CheckCircleSVG;
