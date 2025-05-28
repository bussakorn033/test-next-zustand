/**
 * @param variant - Toast variation
 * @param message - Message on toast
 * @param duration - Time for toast visible (milliseconds)
 */

export interface ToastProps {
	variant?: 'error' | 'success' | 'warning' | 'info';
	message: string;
	duration?: number;
}
