import styled, {css} from "styled-components";
import {ButtonProps} from "./Button.types";
import {Box} from "../Box";

interface StyledButtonProps extends ButtonProps {
  isIconOnly?: boolean;
  [key: string]: any;
}

export const StyledButton = styled(Box)<StyledButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Variants */
  ${({variant}) => {
    switch (variant) {
      case "negative":
        return css`
          background: var(--button-negative);
          color: var(--text-primary-light);
          &:hover {
            background: var(--button-hover-negative);
          }
          &:active {
            background: var(--button-active-negative);
          }
          &:disabled,
          &:disabled * {
            background: var(--button-disabled-negative);
            color: var(--button-color-disabled-negative) !important;
          }
        `;
      case "secondary":
        return css`
          box-sizing: border-box;
          background: var(--button-secondary);
          outline: 1px solid var(--button-border-secondary);
          color: var(--button-color-secondary);
          &:hover {
            background: var(--button-hover-secondary);
            /* outline: none; */
          }
          &:active {
            background: var(--button-active-secondary);
            border: 1px solid var(--button-border-secondary);
            /* outline: none; */
          }
          &:disabled,
          &:disabled * {
            background: var(--button-disabled-secondary) !important;
            color: var(--button-color-disabled-secondary) !important;
            outline: none;
          }
          &:focus,
          &:focus-within,
          &:focus-visible {
            outline: 3px solid var(--button-focus-secondary);
            border: 1px solid var(--button-border-secondary);
            /* background: var(--color-neutral-light); */
          }
        `;
      case "secondary-negative":
        return css`
          box-sizing: border-box;
          background: var(--button-secondary-negative);
          outline: 1px solid var(--button-border-secondary-negative);
          color: var(--button-color-secondary-negative);
          &:hover {
            background: var(--button-hover-secondary-negative);
            /* outline: none; */
          }
          &:active {
            background: var(--button-active-secondary-negative);
            border: 1px solid var(--button-border-secondary-negative);
            /* outline: none; */
          }
          &:disabled,
          &:disabled * {
            background: var(--button-disabled-secondary-negative) !important;
            color: var(--button-color-disabled-secondary-negative) !important;
            outline: none;
          }
          &:focus,
          &:focus-within,
          &:focus-visible {
            outline: 3px solid var(--button-focus-secondary-negative);
            border: 1px solid var(--button-border-secondary-negative);
            /* background: var(--color-neutral-light); */
          }
        `;
      case "ghost-primary":
      case "ghost-secondary":
      case "ghost-negative":
      case "ghost-primary-no-padding":
      case "ghost-secondary-no-padding":
      case "ghost-negative-no-padding":
      case "ghost-icon-primary":
      case "ghost-icon-secondary":
      case "ghost-icon-negative":
      case "ghost-icon-primary-no-padding":
      case "ghost-icon-secondary-no-padding":
      case "ghost-icon-negative-no-padding":
        return css`
          overflow: hidden;

          padding: ${variant.includes("-no-padding")
            ? "var(--button-padding-none)"
            : ""} !important;
          border-radius: ${variant.includes("-icon")
            ? "var(--radius-circle)"
            : ""} !important;
          box-sizing: border-box;
          background: var(
            --button-${variant.replace("-icon", "").replace("-no-padding", "")}
          );
          color: var(
            --button-color-${variant.replace("-icon", "").replace("-no-padding", "")}
          );
          &:hover {
            background: var(
              --button-hover-${variant.replace("-icon", "").replace("-no-padding", "")}
            );
          }
          &:active {
            background: var(
              --button-active-${variant.replace("-icon", "").replace("-no-padding", "")}
            );
          }
          &:disabled,
          &:disabled * {
            background: ${variant.includes("-icon")
              ? "var(--button-color-disabled-ghost-icon)"
              : `var(--button-disabled-${variant
                  .replace("-icon", "")
                  .replace("-no-padding", "")})`};
            color: var(
              --button-color-disabled-${variant.replace("-icon", "")}
            ) !important;
            outline: none;
          }
        `;
      default: // primary
        return css`
          padding: ${variant?.includes("-no-padding")
            ? "var(--button-padding-none)"
            : ""} !important;
          box-sizing: border-box;
          background: var(--button-${variant});
          color: var(--button-color-${variant});

          background: var(--button-primary);
          color: var(--text-primary-light);
          &:hover {
            background: var(--button-hover-primary);
          }
          &:active {
            background: var(--button-active-primary);
          }
          &:disabled,
          &:disabled * {
            background: var(--button-disabled-primary);
            color: var(--button-color-disabled-primary) !important;
          }
        `;
    }
  }}

  ${({size, isIconOnly}) => {
    switch (size) {
      case "large":
        return css`
          padding: ${isIconOnly
            ? "var(--button-padding-icon)"
            : "var(--button-padding-large)"};
          gap: 8px;
        `;
      default:
        return css`
          padding: ${isIconOnly
            ? "var(--button-padding-icon)"
            : "var(--button-padding-base)"};
          gap: 8px;
        `;
    }
  }}

  ${({borderRadius}) => {
    switch (borderRadius) {
      case "none":
        return css`
          border-radius: var(--radius-none);
        `;
      case "round":
        return css`
          border-radius: var(--radius-round);
        `;
      default:
        return css`
          border-radius: var(--radius-normal);
        `;
    }
  }}

  ${({width}) => {
    switch (width) {
      case "full":
        return css`
          width: 100%;
        `;
      default:
        return css`
          width: fit-content;
        `;
    }
  }}

  ${({disabled}) =>
    disabled !== undefined &&
    css`
      cursor: default;
      pointer-events: none;
      &:hover * {
        cursor: default;
      }
    `}

  ${({flex}) =>
    flex !== undefined &&
    css`
      flex: ${flex};
    `}
  ${({flexWrap}) =>
    flexWrap !== undefined &&
    css`
      flex-wrap: ${flexWrap};
    `}
`;
