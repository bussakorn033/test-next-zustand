/**
 * @param position - Position of tooltip.
 * @param content - The text to be displayed inside the tooltip when hovering over the target element.
 * @param children - The content over which the tooltip will appear on hover.
 * 				   - This can be any valid React element (e.g., a button, icon, or text).
 */

export interface TooltipProps {
	position?: 'top' | 'bottom';
	content: string | React.ReactNode;
	children: React.ReactNode;
}
