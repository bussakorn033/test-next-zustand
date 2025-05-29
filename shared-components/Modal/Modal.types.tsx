/**
 * A reusable modal dialog component.
 *
 * Displays content in a centered overlay with an optional width and height.
 * Closes when:
 * - Clicking outside the modal
 * - Pressing the `Escape` key
 * - Clicking the close button (×)
 *
 * @param isOpen - Controls whether the modal is visible.
 * @param onClose - Callback triggered when the modal should close.
 * @param children - The content to render inside the modal.
 * @param width - Optional width of the modal (e.g., "500px", "80%").
 * @param height - Optional height of the modal (e.g., "300px", "auto").
 * @param title - Optional title of the modal.
 * @param className - Optional additional class name for the modal container.
 */

export interface ModalProps extends React.HTMLAttributes<HTMLHeadingElement> {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
	className?: string;
	m?: string | number;
	width?: string | number;
	$minWidth?: string | number;
	$maxWidth?: string | number;
	height?: string | number;
	minHeight?: string | number;
	$maxHeight?: string | number;
}
