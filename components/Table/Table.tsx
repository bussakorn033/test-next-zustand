import classNames from "classnames";
import {forwardRef} from "react";
import * as S from "./Table.styled";
import {TableProps} from "./Table.types";

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
  (
    {
      className,
      tag = "div",
      TableShadow = "none",
      bgColor = "transparent",
      hover,
      fullWidth,
      fullHeight,
      border = "all",
      borderRadius = "none",
      borderWidth = 0,
      direction = "none",
      ...rest
    }: TableProps,
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-table");

    return (
      <S.Table
        as={tag}
        bgColor={bgColor}
        TableShadow={TableShadow}
        className={classnames}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        hover={hover}
        border={border}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        direction={direction}
        ref={ref}
        {...rest}
      >
        {rest?.children}
      </S.Table>
    );
  },
);

Table.displayName = "Table";

export default Table;
