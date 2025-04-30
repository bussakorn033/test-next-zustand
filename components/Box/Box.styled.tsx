import styled, {css} from "styled-components";
import {BoxProps} from "./Box.types";

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
    | undefined
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
    if (props.fullWidth) {
      return css`
        width: 100%;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.maxWidth) {
      return css`
        max-width: ${props.maxWidth}px;
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
    if (props.m && props.m >= 0) {
      return css`
        margin: ${props.m}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mx && props.mx >= 0) {
      return css`
        margin-left: ${props.mx}px;
        margin-right: ${props.mx}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.my && props.my >= 0) {
      return css`
        margin-top: ${props.my}px;
        margin-bottom: ${props.my}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mt && props.mt >= 0) {
      return css`
        margin-top: ${props.mt}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mb && props.mb >= 0) {
      return css`
        margin-bottom: ${props.mb}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.mr && props.mr >= 0) {
      return css`
        margin-right: ${props.mr}px;
      `;
    }
  }}
  ${(props: BoxProps) => {
    if (props.ml && props.ml >= 0) {
      return css`
        margin-left: ${props.ml}px;
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
    if (props.p && props.p >= 0) {
      return css`
        padding: ${calPadding(props.p, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.px || props.px === 0) && props.px >= 0) {
      return css`
        padding-left: ${calPadding(props.px, props.borderWidth)}px;
        padding-right: ${calPadding(props.px, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.py || props.py === 0) && props.py >= 0) {
      return css`
        padding-top: ${calPadding(props.py, props.borderWidth)}px;
        padding-bottom: ${calPadding(props.py, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.pt || props.pt === 0) && props.pt >= 0) {
      return css`
        padding-top: ${calPadding(props.pt, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.pb || props.pb === 0) && props.pb >= 0) {
      return css`
        padding-bottom: ${calPadding(props.pb, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.pr || props.pr === 0) && props.pr >= 0) {
      return css`
        padding-right: ${calPadding(props.pr, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.pl || props.pl === 0) && props.pl >= 0) {
      return css`
        padding-left: ${calPadding(props.pl, props.borderWidth)}px;
      `;
    }
  }}
    ${(props: BoxProps) => {
    if ((props.column || props.column === 0) && props.column >= 0) {
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
