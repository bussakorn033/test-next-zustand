import classNames from "classnames";
import React, {forwardRef} from "react";
// import styles from "./TextStyle.module.scss";

import {DSBox} from "../Box";
import {DSTextStyleProps} from "./TextStyle.types";
// import {TextStyle} from "./TextStyle.styled";
import * as S from "./TextStyle.styled";

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
    const classnames = classNames("ds-text-style", className);

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
      <S.TextStyle
        as={tag ? tag : customTag}
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
      </S.TextStyle>
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
