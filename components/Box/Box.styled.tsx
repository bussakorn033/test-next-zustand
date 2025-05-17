import styled, {css} from "styled-components";
import {BoxProps} from "./Box.types";
import {toPx} from "@/src/utils/Utility";

function calPadding(padding: number = 0, borderWidth: number = 0) {
  return Number(padding - borderWidth);
}

function transformFlexProperties(
  prop:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around"
    | "flex-end"
    | "flex-start"
    | "baseline"
    | undefined,
) {
  if (prop === "end") return "flex-end";
  if (prop === "start") return "flex-start";
  return prop;
}

export const Box = styled.div<BoxProps>`
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

  ${({direction, gap}) => {
    if (!direction || direction === "none") return;
    const isColumn = direction.includes("column");
    const isReverse = direction.includes("reverse");
    const flexDirection = isColumn
      ? isReverse
        ? "column-reverse"
        : "column"
      : isReverse
      ? "row-reverse"
      : "row";
    return css`
      flex-direction: ${flexDirection};
      gap: ${gap}px;
    `;
  }}

  ${({direction, alignItems}) =>
    direction &&
    alignItems &&
    css`
      align-items: ${transformFlexProperties(alignItems)};
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
      background-color: ${bgColor};
    `}

  ${({borderWidth}) =>
    borderWidth &&
    borderWidth > 0 &&
    borderWidth <= 2 &&
    css`
      border-style: solid;
      border-width: ${borderWidth}px;
    `}

  ${({border, borderWidth}) =>
    border &&
    css`
      border-width: 0;
      ${border === "all"
        ? css`
            border-width: ${borderWidth}px;
          `
        : css`border-${border}-width: ${borderWidth}px;`}
    `}

  ${({boxShadow}) =>
    boxShadow !== "none" &&
    css`
      box-shadow: ${(() => {
        switch (boxShadow) {
          case "top":
            return "0px -2px 0px rgba(0, 0, 0, 0.04), 0px -4px 0px rgba(76, 87, 101, 0.06)";
          case "bottom":
            return "0px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 0px rgba(76, 87, 101, 0.06)";
          default:
            return "none";
        }
      })()};
    `}

  ${({borderColor}) =>
    borderColor &&
    css`
      border-color: ${borderColor};
    `}

  ${({borderRadius, border}) =>
    borderRadius &&
    css`
      ${() => {
        const radiusMap = {
          none: "0px",
          xs: "4px",
          sm: "8px",
          md: "12px",
          lg: "16px",
          xl: "24px",
          circle: "50%",
        };
        const value = radiusMap[borderRadius] || borderRadius;
        return border === "all"
          ? css`
              border-radius: ${value};
            `
          : css`
          border-${border}-left-radius: ${value};
          border-${border}-right-radius: ${value};
        `;
      }}
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
      color: ${color};
    `}
`;
