import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const AlertCircleSVG: React.FC<IconProps> = ({
  color,
  size,
  width,
  height,
  ...rest
}) => (
  <StyledSvg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.3333 14.6663C24.0171 14.6663 24.5806 15.1811 24.6577 15.8442L24.6666 15.9997V23.9997C24.6666 24.7361 24.0697 25.333 23.3333 25.333C22.6495 25.333 22.0859 24.8183 22.0089 24.1552L22 23.9997V15.9997C22 15.2633 22.5969 14.6663 23.3333 14.6663ZM23.3533 30.6663C24.0897 30.6663 24.6866 31.2633 24.6866 31.9997C24.6866 32.6835 24.1719 33.247 23.5088 33.324L23.3333 33.333C22.5969 33.333 22 32.7361 22 31.9997C22 31.3159 22.5147 30.7523 23.1778 30.6753L23.3533 30.6663Z"
      fill="#DA2110"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.3333 39.9997C32.1698 39.9997 39.3333 32.8362 39.3333 23.9997C39.3333 15.1631 32.1698 7.99967 23.3333 7.99967C14.4967 7.99967 7.33329 15.1631 7.33329 23.9997C7.33329 32.8362 14.4967 39.9997 23.3333 39.9997ZM23.3333 42.6663C33.6426 42.6663 42 34.309 42 23.9997C42 13.6904 33.6426 5.33301 23.3333 5.33301C13.024 5.33301 4.66663 13.6904 4.66663 23.9997C4.66663 34.309 13.024 42.6663 23.3333 42.6663Z"
      fill="#DA2110"
    />
  </StyledSvg>
);

AlertCircleSVG.defaultProps = {
  color: "#002D63",
  width: "24px",
  height: "24px",
};

AlertCircleSVG.displayName = "AlertCircleSVG";

export default AlertCircleSVG;
