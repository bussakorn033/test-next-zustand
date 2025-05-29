/**
 * @param isOpen - Whether the popover is shown.
 * @param anchorRef - A reference to the DOM element to position the popover relative to.
 * @param children - The content to be rendered inside the popover.
 * @param width - Optional width of the modal (e.g., "500px", "80%").
 * @param onClose - Callback triggered when the modal should close.
 */

export interface PopoverProps
	extends React.HTMLAttributes<HTMLButtonElement | HTMLBaseElement | HTMLElement | undefined> {
	isOpen: boolean;
	anchorRef: React.RefObject<HTMLElement | null>;
	children: React.ReactNode;
	width?: number;
	onClose?: () => void;
	backgroundColor?: string;
	$borderColor?: string;
	padding?: string | number;
	$borderRadius?: string | number;
}
