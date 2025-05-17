/**
 * Box component props
 *
 * === Layout ===
 * @param display - CSS display type (e.g., 'flex', 'grid', 'table', 'inline')
 * @param position - CSS positioning (e.g., 'relative', 'absolute', 'sticky')
 * @param top - Top offset
 * @param bottom - Bottom offset
 * @param left - Left offset
 * @param right - Right offset
 * @param zIndex - Stacking order
 * @param fullWidth - Sets width to 100%
 * @param fullHeight - Sets height to 100vh
 * @param width - Width of the component
 * @param height - Height of the component
 * @param minWidth - Minimum width
 * @param maxWidth - Maximum width
 * @param minHeight - Minimum height
 * @param maxHeight - Maximum height
 *
 * === Flex/Grid ===
 * @param flex - Flex property value
 * @param column - Column count (for grid)
 * @param direction - Flex direction
 * @param alignItems - Align items on cross axis
 * @param justifyContent - Align items on main axis
 * @param gap - Gap between items
 * @param gapRow - Row gap
 * @param gapColumn - Column gap
 *
 * === Spacing ===
 * @param p - Padding
 * @param px - Horizontal padding
 * @param py - Vertical padding
 * @param pt - Padding top
 * @param pb - Padding bottom
 * @param pr - Padding right
 * @param pl - Padding left
 * @param m - Margin
 * @param mx - Horizontal margin
 * @param my - Vertical margin
 * @param mt - Margin top
 * @param mb - Margin bottom
 * @param mr - Margin right
 * @param ml - Margin left
 *
 * === Overflow ===
 * @param overflow - Overflow value
 * @param overflowX - Horizontal overflow
 * @param overflowY - Vertical overflow
 *
 * === Text & Background ===
 * @param textAlign - Text alignment
 * @param bgColor - Background color
 * @param color - Text color
 *
 * === Border ===
 * @param border - Border side(s)
 * @param borderWidth - Border width
 * @param borderColor - Border color
 * @param borderRadius - Border radius
 * @param boxShadow - Shadow type
 *
 * === Behavior ===
 * @param disabled - Disable the element
 * @param hover - Apply hover effect
 * @param limit - Custom limit value
 *
 * === HTML Attributes ===
 * @param id - ID of the component
 * @param as - Render element type (e.g., 'div', 'button')
 * @param htmlFor - For labels
 * @param tag - Custom tag
 * @param className - Custom className
 * @param children - React children
 * @param onClick - Click handler
 */

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  as?: any;
  htmlFor?: string;
  tag?: string;
  children?: React.ReactNode;

  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  hover?: boolean;

  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;

  position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | string;
  zIndex?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;

  flex?: string | number;
  column?: number;
  direction?:
    | "none"
    | "row"
    | "row-reverse"
    | "row-wrap"
    | "column"
    | "column-reverse"
    | string;

  display?:
    | "flex"
    | "grid"
    | "inline"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "block"
    | "table"
    | "contents"
    | "none"
    | string;
  boxSizing?: "border-box" | "content-box" | string;

  overflow?: "auto" | "scroll" | "hidden" | "visible";
  overflowX?: "auto" | "scroll" | "hidden" | "visible";
  overflowY?: "auto" | "scroll" | "hidden" | "visible";

  textAlign?: "left" | "center" | "right";
  alignItems?: "start" | "center" | "end" | "baseline";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";

  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;

  gap?: string | number;
  gapRow?: string | number;
  gapColumn?: string | number;

  className?: string;
  bgColor?: "var(--color-error)" | "#f00" | "red" | string;
  color?: "var(--color-error)" | "#f00" | "red" | string;
  border?: "all" | "top" | "bottom";
  borderWidth?: 0 | 1 | 2;
  borderColor?: "var(--color-error)" | "#f00" | "red" | string;
  borderRadius?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "circle" | string;
  boxShadow?: "none" | "top" | "bottom";

  limit?: number;
}
