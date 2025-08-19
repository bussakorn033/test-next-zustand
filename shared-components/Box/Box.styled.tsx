import styled, { css } from 'styled-components';
import { BoxProps } from './Box.types';
import { toPx, transformFlexProperties } from '@/utils/Utility';

const getRadius = (value: BoxProps['$borderRadius']) => {
	switch (value) {
		case 'none':
			return '0px';
		case 'xs':
			return '4px';
		case 'sm':
			return '8px';
		case 'xsm':
			return '10px';
		case 'md':
			return '12px';
		case 'lg':
			return '16px';
		case 'xl':
			return '24px';
		case 'circle':
			return '50%';
		default:
			return `${value}`;
	}
};

const calPadding = (padding: string | number = 0, $borderWidth: string | number = 0): string => {
	const toNumber = (value: string | number): number =>
		typeof value === 'string' ? parseFloat(value) || 0 : value;

	const border = toNumber($borderWidth);

	if (typeof padding === 'string' && padding.trim().includes(' ')) {
		/* NOTE: Process multi-value padding if padding is a string containing space-separated values. */
		const tokens = padding.trim().split(/\s+/);
		const newTokens = tokens.map((token) => {
			const num = parseFloat(token) || 0;
			/* NOTE: Extract the unit by removing the numeric part from token. */
			const unit = token.replace(num.toString(), '');
			return `${num - border}${unit}`;
		});
		return newTokens.join(' ');
	}

	return toPx(toNumber(padding) - border);
};

export const Box = styled.div<Omit<BoxProps, 'as'>>`
	${({ $isHover }) =>
		($isHover === true || ($isHover !== undefined && $isHover !== false)) &&
		css`
			cursor: pointer;
			* {
				cursor: pointer;
			}
		`}

	&[role='button'] {
		cursor: ${({ $isHover }) => ($isHover == true || $isHover !== false ? 'pointer' : 'default')};
		* {
			cursor: ${({ $isHover }) => ($isHover == true || $isHover !== false ? 'pointer' : 'default')};
		}
	}

	&[aria-disabled='true'] {
		cursor: default;
		opacity: 0.5;
		pointer-events: none;
		* {
			cursor: default;
		}
	}
	${({ direction, display, gap, gapRow, gapColumn }) => {
		if (direction !== 'none' && display !== 'block') {
			return css`
				display: ${display || 'flex'};
			`;
		} else if (gap || gapRow || gapColumn) {
			return css`
				display: grid;
				${gap && `gap: ${gap}px;`}
				${gapRow && `row-gap: ${gapRow}px;`}
        ${gapColumn && `column-gap: ${gapColumn}px;`}
			`;
		} else if (display) {
			return css`
				display: ${display};
			`;
		}
	}}

	${({ overflow }) =>
		overflow !== undefined &&
		css`
			overflow: ${overflow};
		`}
  	${({ $overflowX }) =>
		$overflowX !== undefined &&
		css`
			overflow-x: ${$overflowX};
		`}
  	${({ $overflowY }) =>
		$overflowY !== undefined &&
		css`
			overflow-y: ${$overflowY};
		`}
  	${({ $isFullWidth }) =>
		$isFullWidth !== undefined &&
		css`
			width: 100%;
		`}
  	${({ $isFullHeight }) =>
		$isFullHeight !== undefined &&
		css`
			height: 100dvh;
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
  	${({ $minWidth }) =>
		$minWidth !== undefined &&
		css`
			min-width: ${toPx($minWidth)};
		`}
  	${({ $minHeight }) =>
		$minHeight !== undefined &&
		css`
			min-height: ${toPx($minHeight)};
		`}
  	${({ $maxWidth }) =>
		$maxWidth !== undefined &&
		css`
			max-width: ${toPx($maxWidth)};
		`}
  	${({ $maxHeight }) =>
		$maxHeight !== undefined &&
		css`
			max-height: ${toPx($maxHeight)};
		`}

  	${({ direction, gap }) =>
		direction !== undefined &&
		css`
			flex-direction: ${direction.replace('-wrap', '')};
			${direction.includes('wrap') &&
			css`
				flex-wrap: wrap;
			`}
			${gap !== undefined &&
			css`
				gap: ${gap}px;
			`}
		`}
  	${({ flex }) =>
		flex !== undefined &&
		css`
			flex: ${flex};
		`}
  	${({ $flexWrap }) =>
		$flexWrap !== undefined &&
		css`
			flex-wrap: ${$flexWrap};
		`}


  	${({ direction, $alignItems }) =>
		direction &&
		$alignItems !== undefined &&
		css`
			align-items: ${transformFlexProperties($alignItems)};
		`}

  	${({ direction, $alignContent }) =>
		direction &&
		$alignContent !== undefined &&
		css`
			align-content: ${transformFlexProperties($alignContent)};
		`}

  	${({ direction, $justifyContent }) =>
		direction &&
		$justifyContent !== undefined &&
		css`
			justify-content: ${transformFlexProperties($justifyContent)};
		`}

  	${({ column, $justifyContent }) =>
		column &&
		$justifyContent !== undefined &&
		css`
			justify-items: ${transformFlexProperties($justifyContent)};
		`}


  	${({ m }) =>
		m !== undefined &&
		css`
			margin: ${toPx(m)};
		`}
  	${({ mx }) =>
		mx !== undefined &&
		css`
			margin-left: ${toPx(mx)};
			margin-right: ${toPx(mx)};
		`}
  	${({ my }) =>
		my !== undefined &&
		css`
			margin-top: ${toPx(my)};
			margin-bottom: ${toPx(my)};
		`}
  	${({ mt }) =>
		mt !== undefined &&
		css`
			margin-top: ${toPx(mt)};
		`}
  	${({ mb }) =>
		mb !== undefined &&
		css`
			margin-bottom: ${toPx(mb)};
		`}
  	${({ mr }) =>
		mr !== undefined &&
		css`
			margin-right: ${toPx(mr)};
		`}
  	${({ ml }) =>
		ml !== undefined &&
		css`
			margin-left: ${toPx(ml)};
		`}

  	${({ $bgColor }) =>
		$bgColor !== undefined &&
		css`
			background-color: var(--text-bg-color, currentColor);
		`}

  	${({ $borderWidth, border }) =>
		$borderWidth &&
		$borderWidth > 0 &&
		css`
			border-style: solid;
			${border === 'all' || border === 'all-radius-down'
				? css`
						border-width: ${$borderWidth}px;
					`
				: border === 'top-dropdown'
					? css`
							border-width: 0px;
							border-top-width: ${$borderWidth}px;
							border-right-width: ${$borderWidth}px;
							border-left-width: ${$borderWidth}px;
						`
					: border === 'down-dropdown'
						? css`
								border-width: 0px;
								border-right-width: ${$borderWidth}px;
								border-left-width: ${$borderWidth}px;
								border-down-width: ${$borderWidth}px;
							`
						: border === 'center-dropdown'
							? css`
									border-width: 0;
									border-right-width: ${$borderWidth}px;
									border-left-width: ${$borderWidth}px;
									border-top-width: ${$borderWidth}px;
								`
							: css`
							border-width: 0;
							border-${border}-width: ${$borderWidth}px;
						`}
		`}

  	${({ $boxShadow }) =>
		$boxShadow !== 'none' &&
		css`
			box-shadow: ${$boxShadow === 'top'
				? '0px -2px 0px rgba(0, 0, 0, 0.04), 0px -4px 0px rgba(76, 87, 101, 0.06)'
				: '0px 2px 0px rgba(0, 0, 0, 0.04), 0px 4px 0px rgba(76, 87, 101, 0.06)'};
		`}

  	${({ $borderColor }) =>
		$borderColor !== undefined &&
		css`
			border-color: var(--text-border-color, currentColor);
		`}

  	${({ $borderRadius, border }) =>
		$borderRadius !== undefined &&
		css`
			${border === 'all'
				? css`
						border-radius: ${getRadius($borderRadius)};
					`
				: border === 'top-dropdown'
					? css`
							border-top-left-radius: ${getRadius($borderRadius)};
							border-top-right-radius: ${getRadius($borderRadius)};
						`
					: border === 'down-dropdown' || border === 'all-radius-down'
						? css`
								border-bottom-left-radius: ${getRadius($borderRadius)};
								border-bottom-right-radius: ${getRadius($borderRadius)};
							`
						: css`
							border-${border}-left-radius: ${getRadius($borderRadius)};
							border-${border}-right-radius: ${getRadius($borderRadius)};
						`}
		`}

  	${({ p, $borderWidth }) =>
		p !== undefined &&
		css`
			padding: ${calPadding(p, $borderWidth)};
		`}
  	${({ px, $borderWidth }) =>
		px !== undefined &&
		css`
			padding-left: ${calPadding(px, $borderWidth)};
			padding-right: ${calPadding(px, $borderWidth)};
		`}
  	${({ py, $borderWidth }) =>
		py !== undefined &&
		css`
			padding-top: ${calPadding(py, $borderWidth)};
			padding-bottom: ${calPadding(py, $borderWidth)};
		`}
  	${({ pt, $borderWidth }) =>
		pt !== undefined &&
		css`
			padding-top: ${calPadding(pt, $borderWidth)};
		`}
  	${({ pb, $borderWidth }) =>
		pb !== undefined &&
		css`
			padding-bottom: ${calPadding(pb, $borderWidth)};
		`}
  	${({ pr, $borderWidth }) =>
		pr !== undefined &&
		css`
			padding-right: ${calPadding(pr, $borderWidth)};
		`}
  	${({ pl, $borderWidth }) =>
		pl !== undefined &&
		css`
			padding-left: ${calPadding(pl, $borderWidth)};
		`}

  	${({ column }) =>
		column !== undefined &&
		css`
			display: grid;
			grid-template-columns: repeat(${column}, minmax(0, 1fr));
			grid-template-rows: auto;
			word-break: break-word;
		`}

  	${({ limit }) =>
		limit !== undefined &&
		css`
			> *:nth-child(n + ${limit + 1}) {
				display: none;
			}
		`}

  	${({ $textAlign }) =>
		$textAlign !== undefined &&
		css`
			text-align: ${$textAlign};
		`}
  	${({ color }) =>
		color !== undefined &&
		css`
			color: var(--text-color, currentColor);
		`}
  	${({ $boxSizing }) =>
		$boxSizing !== undefined &&
		css`
			box-sizing: ${$boxSizing};
		`}
    
  	${({ position }) =>
		position !== undefined &&
		css`
			position: ${position};
		`}
  	${({ $zIndex }) =>
		$zIndex !== undefined &&
		css`
			z-index: ${$zIndex};
		`}
  	${({ top }) =>
		top !== undefined &&
		css`
			top: ${top};
		`}
  	${({ bottom }) =>
		bottom !== undefined &&
		css`
			bottom: ${bottom};
		`}
  	${({ left }) =>
		left !== undefined &&
		css`
			left: ${left};
		`}
  	${({ right }) =>
		right !== undefined &&
		css`
			right: ${right};
		`}
  	${({ pointerEvents }) =>
		pointerEvents !== undefined &&
		css`
			pointer-events: ${pointerEvents};
		`}
`;
