import styled from "styled-components";
import {IconProps} from "./SVG.types";

export const StyledSvg = styled.svg<IconProps>`
  width: ${({size}) => `${size}px` || "24px"};
  height: ${({size}) => `${size}px` || "24px"};

  /* font-size: ${({size}) => `${size}px` || "24px"}; */
  color: ${({color}) => color || "#002D63"};

  path {
    fill: currentColor;
  }
`;
