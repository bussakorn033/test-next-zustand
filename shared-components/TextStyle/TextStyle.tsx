import classNames from 'classnames';
import React, { forwardRef } from 'react';
import * as S from './TextStyle.styled';
import { TextStyleProps } from './TextStyle.types';

export const TextStyle = forwardRef<HTMLElement | undefined, TextStyleProps>(
  (
    {
      variant = 'paragraphMedium',
      color,
      className = '',
      tag = '',
      children,
      limitLine = 0,
      whiteSpace = 'pre-line',
      wordBreak = 'normal',
      textAlign = 'left',
      textDecoration = 'none',
      ...rest
    }: TextStyleProps,
    ref
  ) => {
    const classnames = classNames(className, 'ds-ui-text-style');

    let customTag = 'p';
    switch (variant) {
      // Desktop Headings
      case 'h2': // 32px bold, 44px
        customTag = 'h2';
        break;
      case 'h4': // 24px bold, 34px
        customTag = 'h4';
        break;
      case 'h6': // 16px bold, 24px
        customTag = 'h6';
        break;

      // Paragraphs - all use p tag
      case 'paragraphMedium': // 16px regular, 24px
      case 'paragraphSmall': // 14px regular, 20px
      case 'paragraphXSmall': // 12px regular, 16px
        customTag = 'p';
        break;

      // Labels
      case 'labelMedium': // 16px regular, 24px
      case 'labelSmall': // 14px regular, 20px
      case 'labelSmallBold': // 14px bold, 20px
      case 'labelXSmall': // 12px regular, 16px
      case 'labelXSmallBold': // 12px bold, 16px
        customTag = 'label';
        break;

      // Values - all use p tag
      case 'valueSmall': // 14px regular, 20px
        customTag = 'p';
        break;

      // Special Cases
      case 'pageTitle': // 20px bold, 24px
        customTag = 'h1';
        break;
      case 'allCap': // 12px regular, 16px, uppercase
        customTag = 'span';
        break;
      case 'allCapSmall': // 12px regular, 16px, uppercase
        customTag = 'span';
        break;

      // Mobile Specific
      case 'mobileH4': // 14px bold, 20px
        customTag = 'h4';
        break;
      case 'mobileLabelSmallBold': // 14px bold, 24px
        customTag = 'label';
        break;

      // Inline Elements
      case 'span':
        customTag = 'span';
        break;

      // Default case
      default:
        customTag = 'p';
        break;
    }

    return (
      <S.TextStyle
        as={tag || customTag || 'p'}
        variant={variant}
        className={classnames}
        limitLine={limitLine}
        whiteSpace={whiteSpace}
        wordBreak={wordBreak}
        textAlign={textAlign}
        textDecoration={textDecoration}
        {...rest}
        style={
          {
            ...rest.style,
            '--text-color': color && `var(${color})`
          } as React.CSSProperties
        }
      >
        {children}
      </S.TextStyle>
    );
  }
);

TextStyle.displayName = 'TextStyle';

export default TextStyle;
