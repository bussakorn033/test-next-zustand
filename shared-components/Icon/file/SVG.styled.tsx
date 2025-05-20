import styled from "styled-components";
import {IconProps} from "./SVG.types";

export const StyledSvg = styled.svg<IconProps>`
  width: ${({width}) => `${width}px` || "24px"};
  height: ${({height}) => `${height}px` || "24px"};
  color: ${({color}) => `var(${color} , #002D63)`};

  path {
    fill: ${({icon}) => (String(icon).includes("img_") ? "" : "currentColor")};
  }
`;
