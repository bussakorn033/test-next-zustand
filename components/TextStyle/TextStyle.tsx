import classNames from "classnames";
import React, {forwardRef} from "react";
// import styles from "./TextStyle.module.scss";

import {DSBox} from "../Box";
import {DSTextStyleProps} from "./TextStyle.types";
import {StyledText} from "./TextStyle.styled";

export const DSTextStyle = forwardRef<
  HTMLElement | undefined,
  DSTextStyleProps
>(
  (
    {
      variant,
      color,
      className,
      tag,
      children,
      limitLine,
      whiteSpace,
      wordBreak,
      style,
      ...rest
    }: DSTextStyleProps,
    ref
  ) => {
    const classnames = classNames(
      "ds-text-style",
      // styles[variant || ""],
      // {
      //   [styles["text-style"]]: limitLine,
      // },
      className
    );

    let customTag = "p";
    switch (variant) {
      case "specialH1":
      case "pageTitle":
      case "h1":
        customTag = "h1";
        break;
      case "h2":
      case "specialH2":
        customTag = "h2";
        break;
      case "h3":
        customTag = "h3";
        break;
      case "h4":
        customTag = "h4";
        break;
      case "buttonBig":
      case "buttonMedium":
      case "buttonSmall":
      case "clickableLabel":
      case "linkBig":
      case "linkMedium":
      case "linkSmall":
        customTag = "a";
        break;
      case "span":
        customTag = "span";
        break;
      default:
        customTag = "p";
    }

    return (
      <DSBox
        tag={tag ? tag : customTag}
        className={classnames}
        ref={ref}
        {...rest}
      >
        <StyledText
          variant={variant}
          className={classnames}
          limitLine={limitLine}
          whiteSpace={whiteSpace}
          wordBreak={wordBreak}
          style={
            {
              "--text-color": color && `var(--${color})`,
              "--ds-text-style-limit-line": limitLine,
              whiteSpace: whiteSpace,
              wordBreak: wordBreak,
            } as React.CSSProperties
          }
        >
          {children}
        </StyledText>
      </DSBox>
    );
  }
);

DSTextStyle.defaultProps = {
  variant: "paragraphMedium",
  whiteSpace: "pre-line",
  limitLine: 0,
};

DSTextStyle.displayName = "DSTextStyle";

export default DSTextStyle;
