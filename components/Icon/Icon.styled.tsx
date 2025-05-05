import styled, { css } from "styled-components";
import { IconProps } from "./Icon.types";

export const Icon = styled.i<IconProps>`
  ${(props) => {
    if (props.variant) {
      return css`
        /* color: ${props.color}; */
      `;
    }
  }}
  ${(props) => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }}
  ${(props) => {
    if (props.height) {
      return css`
        height: ${props.height};
      `;
    }
  }}
  ${(props) => {
    if (props.color) {
      return css`
        color: ${props.color || "#002D63"};
        path {
          fill: currentColor;
          stroke: currentColor;
        }
        
      `;
    }
  }}
`;
