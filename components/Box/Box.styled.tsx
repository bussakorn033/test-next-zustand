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
  if (prop === "end") {
    return "flex-end";
  } else if (prop === "start") {
    return "flex-start";
  } else {
    return prop;
  }
}

export const Box = styled.div`
  &[role="button"] {
    cursor: pointer;
    * {
      cursor: pointer;
      /* background: pink; */
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

  ${(props: Omit<BoxProps, "as">) => {
    if (props.direction !== "none") {
      return css`
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      `;
    } else if (props.gap || props.gapRow || props.gapColumn) {
      return css`
        display: grid;
        ${props.gap && `gap: ${props.gap}px;`}
        ${props.gapRow && `row-gap: ${props.gapRow}px;`}
        ${props.gapColumn && `column-gap: ${props.gapColumn}px;`}
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.overflow) {
      return css`
        overflow: ${props.overflow};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.overflowX) {
      return css`
        overflow-x: ${props.overflowX};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.overflowY) {
      return css`
        overflow-y: ${props.overflowY};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.fullHeight) {
      return css`
        height: 100dvh;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.width) {
      return css`
        width: ${toPx(props.width)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.height) {
      return css`
        height: ${toPx(props.height)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.minWidth) {
      return css`
        min-width: ${toPx(props.minWidth)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.minHeight) {
      return css`
        min-height: ${toPx(props.minHeight)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.maxWidth) {
      return css`
        max-width: ${toPx(props.maxWidth)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.maxHeight) {
      return css`
        max-height: ${toPx(props.maxHeight)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction === "row") {
      return css`
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: ${props.direction};
        flex-direction: ${props.direction};
        gap: ${props.gap}px;
      `;
    } else if (props.direction === "row-wrap") {
      return css`
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-flow: wrap;
        flex-flow: wrap;
        gap: ${props.gap}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction === "row-reverse") {
      return css`
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        gap: ${props.gap}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction === "column") {
      return css`
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: ${props.direction};
        flex-direction: ${props.direction};
        gap: ${props.gap}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction === "column-reverse") {
      return css`
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
        gap: ${props.gap}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction && props.alignItems) {
      return css`
        align-items: ${(props: BoxProps) =>
          transformFlexProperties(props.alignItems)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.direction && props.justifyContent) {
      return css`
        justify-content: ${(props: BoxProps) =>
          transformFlexProperties(props.justifyContent)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.column && props.justifyContent) {
      return css`
        justify-items: ${(props: BoxProps) =>
          transformFlexProperties(props.justifyContent)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.hover) {
      return css`
        cursor: pointer;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.m) {
      return css`
        margin: ${toPx(props.m)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mx) {
      return css`
        margin-left: ${toPx(props.mx)};
        margin-right: ${toPx(props.mx)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.my) {
      return css`
        margin-top: ${toPx(props.my)};
        margin-bottom: ${toPx(props.my)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mt) {
      return css`
        margin-top: ${toPx(props.mt)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mb) {
      return css`
        margin-bottom: ${toPx(props.mb)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mr) {
      return css`
        margin-right: ${toPx(props.mr)};
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.ml) {
      return css`
        margin-left: ${toPx(props.ml)};
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.bgColor) {
      return css`
        background-color: ${props.bgColor};
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (
      props.borderWidth &&
      props.borderWidth > 0 &&
      props.borderWidth &&
      props.borderWidth <= 2
    ) {
      return css`
        border-style: solid;
        border-width: ${props.borderWidth}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.border === "all") {
      return css`
        border-width: ${props.borderWidth}px;
      `;
    } else if (props.border) {
      return css`
      border-width: 0;
      border-${props.border}-width: ${props.borderWidth}px;
        `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.boxShadow !== "none") {
      const boxShadow = () => {
        switch (props.boxShadow) {
          case "top":
            return "0px -2px 0px rgba(0, 0, 0, 0.04), 0px -4px 0px rgba(76, 87, 101, 0.06)";
          case "bottom":
            return "0px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 0px rgba(76, 87, 101, 0.06)";
          case "none":
          default:
            return "none";
        }
      };
      return css`
        box-shadow: ${boxShadow()};
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.borderColor) {
      return css`
        border-color: ${props.borderColor};
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.borderRadius) {
      const radius = () => {
        switch (props.borderRadius) {
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
            return `${props.borderRadius}`;
        }
      };
      if (props.border === "all") {
        return css`
          border-radius: ${radius()};
        `;
      } else {
        return css`
          border-${props.border}-left-radius: ${radius()};
          border-${props.border}-right-radius: ${radius()};
        `;
      }
    }
  }}
    ${(props: BoxProps) => {
    if (props.p) {
      return css`
        padding: ${calPadding(props.p, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.px || props.px === 0) {
      return css`
        padding-left: ${calPadding(props.px, props.borderWidth)}px;
        padding-right: ${calPadding(props.px, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.py || props.py === 0) {
      return css`
        padding-top: ${calPadding(props.py, props.borderWidth)}px;
        padding-bottom: ${calPadding(props.py, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.pt || props.pt === 0) {
      return css`
        padding-top: ${calPadding(props.pt, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.pb || props.pb === 0) {
      return css`
        padding-bottom: ${calPadding(props.pb, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.pr || props.pr === 0) {
      return css`
        padding-right: ${calPadding(props.pr, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.pl || props.pl === 0) {
      return css`
        padding-left: ${calPadding(props.pl, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.column || props.column === 0) {
      return css`
        display: grid;
        grid-template-columns: repeat(${props.column}, 1fr);
        grid-template-columns: repeat(${props.column}, minmax(0, 1fr));
        grid-template-rows: auto;
        word-break: break-word;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.limit) {
      return css`
        > *:nth-child(n + ${props.limit + 1}) {
          display: none;
        }
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.textAlign) {
      return css`
        text-align: ${props.textAlign};
      `;
    }
  }}
    ${(props: BoxProps) => {
    if (props.color) {
      return css`
        color: ${props.color};
      `;
    }
  }}
`;
