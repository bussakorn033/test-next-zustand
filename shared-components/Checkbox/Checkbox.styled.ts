import styled, {css} from "styled-components";
import {Box} from "../Box";
import {CheckboxProps} from "./Checkbox.types";

export const HiddenCheckbox = styled.input.attrs<CheckboxProps>({
  type: "checkbox",
})`
  width: 16px;
  height: 16px;
  margin: -1px;
  padding: 0;
  position: absolute;
  z-index: 1;
  opacity: 0;
  white-space: nowrap;
`;

export const StyledCheckbox = styled(Box)<CheckboxProps>`
  cursor: pointer;
  position: relative;
  z-index: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: ${({checked, checkColor}) =>
    checked && checkColor
      ? `var(${checkColor})`
      : checked
      ? "var(--color-primary)"
      : "var(--color-neutral-light)"};
  border: ${({checkColor}) =>
    `2px solid var(${checkColor ? checkColor : "--color-primary"})`};
  border-radius: 4px;
  transition: background-color 150ms, border-color 150ms;

  ${({checked}) =>
    checked &&
    css`
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      &::after {
        content: "\\2713";
        font-size: var(--font-size-12);
        font-weight: var(--font-weight-bold);
        color: white;
      }
    `}
`;

export const CheckboxContainer = styled(Box)`
  position: relative;
`;
