/**
 * Icon component props
 * @param id - ID of component
 * @param className - CSS class names that can be appended to the component
 * @param icon - Icon name or path (required)
 * @param color - Color of the icon (see color guide)
 * @param width - Width of the icon in pixels
 * @param height - Height of the icon in pixels
 */

export interface IconProps {
  id?: string;
  className?: string;
  icon: string | undefined;
  color?: string;
  width?: string | number;
  height?: string | number;
  disabled?: boolean | null;
}
