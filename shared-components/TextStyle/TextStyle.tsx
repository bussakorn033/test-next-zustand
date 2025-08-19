import classNames from 'classnames';
import React, { forwardRef } from 'react';
import * as S from './TextStyle.styled';
import { TextStyleProps } from './TextStyle.types';

export const TextStyle = forwardRef<HTMLElement | undefined, TextStyleProps>(
	({
		children,
		color = undefined,
		variant = 'paragraphMedium',
		className = '',
		tag = '',
		$limitLine = 0,
		$whiteSpace = 'pre-line',
		$wordBreak = 'normal',
		$textAlign = 'left',
		textDecoration = 'none',
		...rest
	}: TextStyleProps) => {
		const classnames = classNames(className, 'ds-ui-text-style');

		let customTag = tag === 'p' ? tag : 'label';
		switch (variant) {
			/* Desktop Headings */
			case 'h2' /* 32px bold, 44px */:
				customTag = 'h2';
				break;
			case 'h3' /* 16px bold, 24px */:
				customTag = 'h3';
				break;
			case 'h4' /* 24px bold, 34px */:
				customTag = 'h4';
				break;
			case 'h5' /* 20px bold, 30px */:
				customTag = 'h5';
				break;
			case 'h6' /* 16px bold, 24px */:
				customTag = 'h6';
				break;

			/* Paragraphs - all use p tag */
			case 'paragraphMedium': /* 16px regular, 24px */
			case 'paragraphSmall': /* 14px regular, 20px */
			case 'paragraphXSmall' /* 12px regular, 16px */:
				customTag = 'label';
				break;

			/* Labels */
			case 'labelMedium': /* 16px regular, 24px */
			case 'labelSmall': /* 14px regular, 20px */
			case 'labelSmallBold': /* 14px bold, 20px */
			case 'labelXSmall': /* 12px regular, 16px */
			case 'labelXSmallBold' /* 12px bold, 16px */:
				customTag = 'label';
				break;

			/* Values - all use p tag */
			case 'valueSmall' /* 14px regular, 20px */:
				customTag = 'label';
				break;

			/* Special Cases */
			case 'pageTitle' /* 20px bold, 24px */:
				customTag = 'h1';
				break;
			case 'timeDevice' /* 7.5px regular, 100% */:
				customTag = 'label';
				break;
			case 'allCap' /* 12px regular, 16px, uppercase */:
				customTag = 'span';
				break;
			case 'allCapSmall' /* 12px regular, 16px, uppercase */:
				customTag = 'span';
				break;

			/* Mobile Specific */
			case 'mobileH4' /* 14px bold, 20px */:
				customTag = 'h4';
				break;
			case 'mobileLabelSmallBold' /* 14px bold, 24px */:
				customTag = 'label';
				break;

			/* Inline Elements */
			case 'span':
				customTag = 'span';
				break;

			/* Default case */
			default:
				customTag = 'label';
				break;
		}

		return (
			<S.TextStyle
				as={customTag}
				variant={variant}
				className={classnames}
				$limitLine={$limitLine}
				$whiteSpace={$whiteSpace}
				$wordBreak={$wordBreak}
				$textAlign={$textAlign}
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
