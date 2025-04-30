import classNames from "classnames";
import {forwardRef} from "react";
import * as S from "./Box.styled";
import {BoxProps} from "./Box.types";

export const DSBox = forwardRef<HTMLElement | undefined, BoxProps>(
  (
    {className, tag, boxShadow, bgColor, hover, fullWidth, ...rest}: BoxProps,
    ref
  ) => {
    const classnames = classNames(className, "ds-box");

    return (
      <S.Box
        as={tag}
        bgColor={bgColor}
        boxShadow={boxShadow}
        className={classnames}
        // data-fullwidth={fullWidth}
        fullWidth={fullWidth}
        hover={hover}
        ref={ref}
        {...rest}
      >
        {rest?.children}
      </S.Box>
    );
  }
);

DSBox.defaultProps = {
  bgColor: "transparent",
  borderWidth: 0,
  boxShadow: "none",
  tag: "div",
  border: "all",
  borderRadius: "none",
  direction: "none",
};

DSBox.displayName = "DSBox";

export default DSBox;
