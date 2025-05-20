/**
 * @param isOpen - Whether the popover is shown.
 * @param anchorRef - A reference to the DOM element to position the popover relative to.
 * @param children - The content to be rendered inside the popover.
 */

export interface PopoverProps
	extends React.HTMLAttributes<HTMLButtonElement | HTMLBaseElement | HTMLElement | undefined> {
	isOpen: boolean;
	anchorRef: React.RefObject<HTMLElement | null>;
	children: React.ReactNode;
}
