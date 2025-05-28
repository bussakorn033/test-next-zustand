/**
 * @param orientation - The orientation of the divider.
 * - `horizontal`: Divider is rendered as a horizontal line (default).
 * - `vertical`: Divider is rendered as a vertical line.
 * @param color - The color of the divider line.
 * @param weight - The thickness of the divider in pixels.
 * @param className - Optional class name to apply custom styles.
 */

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  weight?: number;
  className?: string;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;
}
