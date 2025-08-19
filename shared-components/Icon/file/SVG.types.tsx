export interface IconProps extends React.HTMLAttributes<HTMLElement> {
	id?: string;
	className?: string;
	icon: string | undefined;
	color?: string | undefined;
	width?: string | number;
	height?: string | number;
	disabled?: boolean | null;
}
