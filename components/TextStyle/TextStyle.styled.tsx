import styled, {css} from "styled-components";
import {DSTextStyleProps} from "./TextStyle.types";

interface TextStyleProps extends DSTextStyleProps {
  limitLine?: number;
}

const textStyleMixin = (
  fontSize: string,
  fontWeight: string,
  lineHeight: string,
  letterSpacing: string
) => css`
  font-family: var(--font-family-primary);
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  color: var(--text-color, currentColor);
`;

export const TextStyle = styled.p<TextStyleProps>`
  ${({variant}) => {
    switch (variant) {
      case "specialH1":
        return textStyleMixin(
          `var(--font-size-heading-1-large)`,
          `var(--font-weight-bold)`,
          "38px",
          `var(--letter-spacing-wide)`
        );

      case "specialH2":
        return textStyleMixin(
          `var(--font-size-heading-2-small)`,
          `var(--font-weight-bold)`,
          `var(--line-height-26)`,
          `var(--letter-spacing-wide)`
        );

      case "pageTitle":
        return textStyleMixin(
          `var(--font-size-heading-2)`,
          `var(--font-weight-bold)`,
          `var(--line-height-24)`,
          `var(--letter-spacing-wide)`
        );

      case "h1":
        return textStyleMixin(
          `var(--font-size-heading-1)`,
          `var(--font-weight-bold)`,
          `var(--line-height-36)`,
          `var(--letter-spacing-wide)`
        );

      case "h2":
        return textStyleMixin(
          `var(--font-size-heading-2)`,
          `var(--font-weight-bold)`,
          `var(--line-height-26)`,
          `var(--letter-spacing-wide)`
        );

      case "h3":
        return textStyleMixin(
          `var(--font-size-base)`,
          `var(--font-weight-bold)`,
          `var(--line-height-24)`,
          `var(--letter-spacing-wide)`
        );

      case "h4":
        return textStyleMixin(
          `var(--font-size-small)`,
          `var(--font-weight-bold)`,
          `var(--line-height-20)`,
          `var(--letter-spacing-wide)`
        );

      case "paragraphBig":
        return textStyleMixin(
          `var(--font-size-heading-2-small)`,
          `var(--font-weight-regular)`,
          `var(--line-height-24)`,
          `var(--letter-spacing-normal)`
        );

      case "paragraphMedium":
        return textStyleMixin(
          `var(--font-size-base)`,
          `var(--font-weight-regular)`,
          `var(--line-height-24)`,
          `var(--letter-spacing-normal)`
        );
      default:
        return textStyleMixin(
          `var(--font-size-base)`,
          `var(--font-weight-regular)`,
          `var(--line-height-24)`,
          `var(--letter-spacing-normal)`
        );
    }
  }}

  ${({limitLine}) =>
    limitLine &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${limitLine};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

  ${({whiteSpace}) =>
    whiteSpace &&
    css`
      white-space: ${whiteSpace};
    `}

  ${({wordBreak}) =>
    wordBreak &&
    css`
      word-break: ${wordBreak};
    `}

  ${({textAlign}) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
`;
