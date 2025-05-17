import classNames from "classnames";
import {forwardRef} from "react";
import * as S from "./Box.styled";
import {BoxProps} from "./Box.types";

export const Box = forwardRef<HTMLElement | undefined, BoxProps>(
  (
    {
      tag = "div",
      display = "grid",
      direction = "none",
      fullWidth,
      fullHeight,
      bgColor = "transparent",
      boxShadow = "none",
      border = "all",
      borderWidth = 0,
      borderRadius = "none",
      hover,
      className,
      children,
      ...rest
    }: BoxProps,
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-box");

    return (
      <S.Box
        className={classnames}
        as={tag}
        display={display}
        direction={direction}
        fullWidth={fullWidth}
        fullHeight={fullHeight}
        bgColor={bgColor}
        boxShadow={boxShadow}
        border={border}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        hover={hover}
        ref={ref}
        {...rest}
      >
        {children}
      </S.Box>
    );
  },
);

Box.displayName = "Box";

export default Box;
