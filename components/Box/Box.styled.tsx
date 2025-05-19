// Box.styled.ts
import styled, {css} from "styled-components";
import {BoxProps} from "./Box.types";
import {toPx, transformFlexProperties} from "@/src/utils/Utility";

const getRadius = (value: BoxProps["borderRadius"]) => {
  switch (value) {
    case "none":
      return "0px";
    case "xs":
      return "4px";
    case "sm":
      return "8px";
    case "md":
      return "12px";
    case "lg":
      return "16px";
    case "xl":
      return "24px";
    case "circle":
      return "50%";
    default:
      return `${value}`;
  }
};

const calPadding = (
  padding: string | number = 0,
  borderWidth: string | number = 0,
): number => {
  const toNumber = (value: string | number): number =>
    typeof value === "string" ? parseFloat(value) || 0 : value;

  return toNumber(padding) - toNumber(borderWidth);
};

export const Box = styled.div<Omit<BoxProps, "as">>`
  &[role="button"] {
    cursor: pointer;
    * {
      cursor: pointer;
    }
  }

  &[aria-disabled="true"] {
    cursor: default;
    opacity: 0.5;
    pointer-events: none;
    * {
      cursor: default;
    }
  }

  ${({direction, gap, gapRow, gapColumn}) => {
    if (direction !== "none") {
      return css`
        display: flex;
      `;
    } else if (gap || gapRow || gapColumn) {
      return css`
        display: grid;
        ${gap && `gap: ${gap}px;`}
        ${gapRow && `row-gap: ${gapRow}px;`}
        ${gapColumn && `column-gap: ${gapColumn}px;`}
      `;
    }
  }}

  ${({overflow}) =>
    overflow &&
    css`
      overflow: ${overflow};
    `}
  ${({overflowX}) =>
    overflowX &&
    css`
      overflow-x: ${overflowX};
    `}
  ${({overflowY}) =>
    overflowY &&
    css`
      overflow-y: ${overflowY};
    `}
  ${({fullWidth}) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({fullHeight}) =>
    fullHeight &&
    css`
      height: 100dvh;
    `}

  ${({width}) =>
    width &&
    css`
      width: ${toPx(width)};
    `}
  ${({height}) =>
    height &&
    css`
      height: ${toPx(height)};
    `}
  ${({minWidth}) =>
    minWidth &&
    css`
      min-width: ${toPx(minWidth)};
    `}
  ${({minHeight}) =>
    minHeight &&
    css`
      min-height: ${toPx(minHeight)};
    `}
  ${({maxWidth}) =>
    maxWidth &&
    css`
      max-width: ${toPx(maxWidth)};
    `}
  ${({maxHeight}) =>
    maxHeight &&
    css`
      max-height: ${toPx(maxHeight)};
    `}

  ${({direction, gap}) =>
    direction &&
    css`
      flex-direction: ${direction.replace("-wrap", "")};
      ${direction.includes("wrap") &&
      css`
        flex-wrap: wrap;
      `}
      ${gap !== undefined &&
      css`
        gap: ${gap}px;
      `}
    `}
  ${({flex}) =>
    flex &&
    css`
      flex: ${flex};
    `}

  ${({direction, alignItems, alignContent}) =>
    direction &&
    alignItems &&
    alignContent &&
    css`
      align-items: ${transformFlexProperties(alignItems)};
      align-content: ${transformFlexProperties(alignContent)};
    `}

  ${({direction, justifyContent}) =>
    direction &&
    justifyContent &&
    css`
      justify-content: ${transformFlexProperties(justifyContent)};
    `}

  ${({column, justifyContent}) =>
    column &&
    justifyContent &&
    css`
      justify-items: ${transformFlexProperties(justifyContent)};
    `}

  ${({hover}) =>
    hover &&
    css`
      cursor: pointer;
    `}

  ${({m}) =>
    m &&
    css`
      margin: ${toPx(m)};
    `}
  ${({mx}) =>
    mx &&
    css`
      margin-left: ${toPx(mx)};
      margin-right: ${toPx(mx)};
    `}
  ${({my}) =>
    my &&
    css`
      margin-top: ${toPx(my)};
      margin-bottom: ${toPx(my)};
    `}
  ${({mt}) =>
    mt &&
    css`
      margin-top: ${toPx(mt)};
    `}
  ${({mb}) =>
    mb &&
    css`
      margin-bottom: ${toPx(mb)};
    `}
  ${({mr}) =>
    mr &&
    css`
      margin-right: ${toPx(mr)};
    `}
  ${({ml}) =>
    ml &&
    css`
      margin-left: ${toPx(ml)};
    `}

  ${({bgColor}) =>
    bgColor &&
    css`
      background-color: var(--text-bg-color, currentColor);
    `}

  ${({borderWidth, border}) =>
    borderWidth &&
    borderWidth > 0 &&
    css`
      border-style: solid;
      ${border === "all"
        ? css`
            border-width: ${borderWidth}px;
          `
        : css`
        border-width: 0;
        border-${border}-width: ${borderWidth}px;
      `}
    `}

  ${({boxShadow}) =>
    boxShadow !== "none" &&
    css`
      box-shadow: ${boxShadow === "top"
        ? "0px -2px 0px rgba(0, 0, 0, 0.04), 0px -4px 0px rgba(76, 87, 101, 0.06)"
        : "0px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 0px rgba(76, 87, 101, 0.06)"};
    `}

  ${({borderColor}) =>
    borderColor &&
    css`
      border-color: var(--text-border-color, currentColor);
    `}

    ${({borderRadius, border}) =>
    borderRadius &&
    css`
      ${border === "all"
        ? css`
            border-radius: ${getRadius(borderRadius)};
          `
        : css`
          border-${border}-left-radius: ${getRadius(borderRadius)};
          border-${border}-right-radius: ${getRadius(borderRadius)};
        `}
    `}

  ${({p, borderWidth}) =>
    p !== undefined &&
    css`
      padding: ${calPadding(p, borderWidth)}px;
    `}
  ${({px, borderWidth}) =>
    px !== undefined &&
    css`
      padding-left: ${calPadding(px, borderWidth)}px;
      padding-right: ${calPadding(px, borderWidth)}px;
    `}
  ${({py, borderWidth}) =>
    py !== undefined &&
    css`
      padding-top: ${calPadding(py, borderWidth)}px;
      padding-bottom: ${calPadding(py, borderWidth)}px;
    `}
  ${({pt, borderWidth}) =>
    pt !== undefined &&
    css`
      padding-top: ${calPadding(pt, borderWidth)}px;
    `}
  ${({pb, borderWidth}) =>
    pb !== undefined &&
    css`
      padding-bottom: ${calPadding(pb, borderWidth)}px;
    `}
  ${({pr, borderWidth}) =>
    pr !== undefined &&
    css`
      padding-right: ${calPadding(pr, borderWidth)}px;
    `}
  ${({pl, borderWidth}) =>
    pl !== undefined &&
    css`
      padding-left: ${calPadding(pl, borderWidth)}px;
    `}

  ${({column}) =>
    column &&
    css`
      display: grid;
      grid-template-columns: repeat(${column}, minmax(0, 1fr));
      grid-template-rows: auto;
      word-break: break-word;
    `}

  ${({limit}) =>
    limit &&
    css`
      > *:nth-child(n + ${limit + 1}) {
        display: none;
      }
    `}

  ${({textAlign}) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
  ${({color}) =>
    color &&
    css`
      color: var(--text-color, currentColor);
    `}
  ${({boxSizing}) =>
    boxSizing &&
    css`
      box-sizing: ${boxSizing};
    `}
    
  ${({position}) =>
    position &&
    css`
      position: ${position};
    `}
  ${({zIndex}) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}
  ${({top}) =>
    top !== undefined &&
    css`
      top: ${top};
    `}
  ${({bottom}) =>
    bottom !== undefined &&
    css`
      bottom: ${bottom};
    `}
  ${({left}) =>
    left !== undefined &&
    css`
      left: ${left};
    `}
  ${({right}) =>
    right !== undefined &&
    css`
      right: ${right};
    `}
`;
