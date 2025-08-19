/**
 * Text style component props
 * @param id - ID of component
 * @param variant - Text variation following design system
 * @param className - Custom styles
 * @param tag - HTML tag used for rendering
 * @param children - Text content
 * @param $limitLine - Number of lines to truncate the text to (0 = no truncation)
 * @param $whiteSpace - White space handling (default: "pre-line")
 * @param $wordBreak - Word break behavior
 * @param $textAlign - Text alignment
 * @param color - Text color from CSS variables
 * @param textDecoration - Text decoration style
 */

export interface TextStyleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	id?: string;
	variant?:
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'paragraphMedium'
		| 'paragraphSmall'
		| 'paragraphSmallTable'
		| 'paragraphXSmall'
		| 'labelMedium'
		| 'labelSmall'
		| 'labelSmallBold'
		| 'labelXSmall'
		| 'labelXSmallBold'
		| 'valueSmall'
		| 'buttonMedium'
		| 'buttonBig'
		| 'pageTitle'
		| 'timeDevice'
		| 'allCap'
		| 'allCapSmall'
		| 'mobileH4'
		| 'mobileLabelSmallBold'
		| 'span';
	className?: string;
	tag?: string;
	children?: React.ReactNode;
	$limitLine?: number;
	$whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
	$wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
	$textAlign?: 'left' | 'center' | 'right' | string | undefined;
	color?: string;
	textDecoration?: 'none' | 'underline' | 'line-through' | 'overline';
	$alignContent?: 'start' | 'center' | 'end' | 'baseline' | string;
	$justifyContent?: 'start' | 'center' | 'end' | 'baseline' | string;
	$alignItems?: 'start' | 'center' | 'end' | 'baseline' | string;
	width?: string | number;
	height?: string | number;
	flex?: number;
}
