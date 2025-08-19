import styled, { css } from 'styled-components';
import { TextStyleProps } from './TextStyle.types';
import { toPx, transformFlexProperties } from '@/utils/Utility';

const textStyleMixin = (
	fontSize: string,
	fontWeight: string,
	lineHeight: string,
	letterSpacing: string,
	textTransform?: string,
	fontFamily?: string
) => css`
	font-family: ${fontFamily ? fontFamily : 'var(--font-family-primary)'};
	font-size: var(${fontSize});
	font-weight: var(${fontWeight});
	line-height: var(${lineHeight});
	letter-spacing: var(${letterSpacing});
	color: var(--text-color, currentColor);
	text-transform: ${textTransform};
`;

export const TextStyle = styled.p<TextStyleProps>`
	margin: 0;

	${({ variant }) => {
		switch (variant) {
			/* Desktop Headings */
			case 'h2':
				return textStyleMixin(
					'--font-size-32',
					'--font-weight-bold',
					'--line-height-44',
					'--letter-spacing-wide'
				);

			case 'h3':
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-bold',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			case 'h4':
				return textStyleMixin(
					'--font-size-24',
					'--font-weight-bold',
					'--line-height-34',
					'--letter-spacing-wide'
				);

			case 'h5':
				return textStyleMixin(
					'--font-size-20',
					'--font-weight-bold',
					'--line-height-30',
					'--letter-spacing-wide'
				);

			case 'h6':
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-bold',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			/* Paragraphs */
			case 'paragraphMedium':
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-light',
					'--line-height-24',
					'--letter-spacing-normal'
				);

			case 'paragraphSmall':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-regular',
					'--line-height-22',
					'--letter-spacing-normal'
				);

			case 'paragraphSmallTable':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-regular',
					'--line-height-26',
					'--letter-spacing-normal'
				);

			case 'paragraphXSmall':
				return textStyleMixin(
					'--font-size-12',
					'--font-weight-regular',
					'--line-height-16',
					'--letter-spacing-normal'
				);

			/* Labels */
			case 'labelMedium':
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-regular',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			case 'labelSmall':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-regular',
					'--line-height-20',
					'--letter-spacing-wide'
				);

			case 'labelSmallBold':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-bold',
					'--line-height-20',
					'--letter-spacing-wide'
				);

			case 'labelXSmall':
				return textStyleMixin(
					'--font-size-12',
					'--font-weight-regular',
					'--line-height-16',
					'--letter-spacing-wide'
				);

			case 'labelXSmallBold':
				return textStyleMixin(
					'--font-size-12',
					'--font-weight-bold',
					'--line-height-16',
					'--letter-spacing-wide'
				);

			/* Values */
			case 'valueSmall':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-regular',
					'--line-height-20',
					'--letter-spacing-normal'
				);

			/* Buttons */
			case 'buttonMedium':
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-regular',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			case 'buttonBig':
				return textStyleMixin(
					'--font-size-20',
					'--font-weight-regular',
					'--line-height-32',
					'--letter-spacing-wide'
				);

			/* Special Cases */
			case 'pageTitle':
				return textStyleMixin(
					'--font-size-20',
					'--font-weight-bold',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			case 'timeDevice':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-regular',
					'--line-height-100per',
					'--letter-spacing-wide'
				);

			case 'allCap':
				return textStyleMixin(
					'--font-size-12',
					'--font-weight-regular',
					'--line-height-16',
					'--letter-spacing-wide'
				);

			case 'allCapSmall':
				return textStyleMixin(
					'--font-size-12',
					'--font-weight-regular',
					'--line-height-16',
					'--letter-spacing-wide',
					'uppercase'
				);

			/* Mobile Specific */
			case 'mobileH4':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-bold',
					'--line-height-20',
					'--letter-spacing-wide'
				);

			case 'mobileLabelSmallBold':
				return textStyleMixin(
					'--font-size-14',
					'--font-weight-bold',
					'--line-height-24',
					'--letter-spacing-wide'
				);

			/* Default style */
			default:
				return textStyleMixin(
					'--font-size-16',
					'--font-weight-regular',
					'--line-height-24',
					'--letter-spacing-normal'
				);
		}
	}}

	${({ $limitLine }) =>
		$limitLine !== undefined &&
		css`
			display: -webkit-box !important;
			-webkit-line-clamp: ${$limitLine};
			-webkit-box-orient: vertical;
			overflow: hidden;
		`}

  ${({ $whiteSpace }) =>
		$whiteSpace !== undefined &&
		css`
			white-space: ${$whiteSpace};
		`}

  ${({ $wordBreak }) =>
		$wordBreak !== undefined &&
		css`
			word-break: ${$wordBreak};
		`}

  ${({ $textAlign }) =>
		$textAlign !== undefined &&
		css`
			text-align: ${$textAlign};
		`}

  ${({ textDecoration }) =>
		textDecoration !== undefined &&
		css`
			text-decoration: ${textDecoration};
		`}

  ${({ $alignContent }) =>
		$alignContent !== undefined &&
		css`
			align-content: ${transformFlexProperties($alignContent)};
		`}
  ${({ $justifyContent }) =>
		$justifyContent !== undefined &&
		css`
			justify-content: ${transformFlexProperties($justifyContent)};
		`}
  ${({ $alignItems }) =>
		$alignItems !== undefined &&
		css`
			align-items: ${transformFlexProperties($alignItems)};
		`}

  ${({ width }) =>
		width !== undefined &&
		css`
			width: ${toPx(width)};
		`}
  ${({ height }) =>
		height !== undefined &&
		css`
			height: ${toPx(height)};
		`}

  ${({ flex }) =>
		flex !== undefined &&
		css`
			flex: ${flex};
		`}
`;
