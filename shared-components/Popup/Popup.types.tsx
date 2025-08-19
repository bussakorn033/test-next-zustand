/**
 * A reusable Popup dialog component.
 *
 * Displays content in a centered overlay with an optional width and height.
 * Closes when:
 * - Clicking outside the Popup
 * - Pressing the `Escape` key
 * - Clicking the close button (×)
 *
 * @param variant - Popup variation
 * @param title - Title of the Popup.
 * @param description - Description of the Popup.
 * @param popupName - use for write activilog close popup.
 * @param primaryButtonLabel - Label of primary button.
 * @param primaryButtonAction - Action of primary button.
 * @param primaryButtonType - Type of primary button.
 * @param secondaryButtonLabel - Label of secondary button.
 * @param secondaryButtonAction - Action of secondary button.
 * @param ghostButtonLabel - Label of ghost button.
 * @param ghostButtonAction - Action of ghost button.
 */

export interface PopupProps extends React.HTMLAttributes<HTMLHeadingElement> {
	variant?: 'confirm' | 'error';
	title: string;
	description: string;
	popupName?: string;
	primaryButtonLabel?: string;
	primaryButtonAction?: () => void;
	primaryButtonType?: 'primary' | 'negative';
	secondaryButtonLabel?: string;
	secondaryButtonAction?: () => void;
	ghostButtonLabel?: string;
	ghostButtonAction?: () => void;
}
