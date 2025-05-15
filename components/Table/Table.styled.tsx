import styled, {css} from "styled-components";
import {TableProps} from "./Table.types";

export const Table = styled.div<TableProps>`
  display: flex;
  flex-direction: column;
  width: ${({fullWidth}) => (fullWidth ? "100%" : "auto")};
  height: ${({fullHeight}) => (fullHeight ? "100%" : "auto")};

  ${({bgColor}) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  ${({border}) =>
    border &&
    css`
      border: ${border === "all"
        ? "1px solid var(--color-table-border-dark)"
        : "none"};
    `}

  ${({borderRadius}) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}

  ${({borderWidth}) =>
    borderWidth &&
    css`
      border-width: ${borderWidth}px;
    `}

  ${({TableShadow}) =>
    TableShadow &&
    css`
      box-shadow: ${TableShadow};
    `}
`;
