// write a typescript interface for the Box component

/**
 * Box component props
 * @param id - ID of the component
 * @param as - Render element type (e.g., 'div', 'button', etc.)
 * @param htmlFor - Used for labels targeting form inputs
 * @param tag - Custom tag string
 * @param children - React children nodes
 * @param disabled - Whether the component is disabled
 * @param onClick - Function to handle click events
 * @param hover - Whether to apply hover styling
 * @param fullWidth - If true, sets width to 100%
 * @param fullHeight - If true, sets height to 100vdh
 * @param column - Number of columns (if applicable)
 * @param width - Width of the component
 * @param height - Height of the component
 * @param minWidth - Minimum width of the component
 * @param maxWidth - Maximum width of the component
 * @param minHeight - Minimum height of the component
 * @param maxHeight - Maximum height of the component
 * @param limit - Limit value (context-specific)
 * @param textAlign - Horizontal text alignment
 * @param alignItems - Flex alignment on cross axis
 * @param justifyContent - Flex alignment on main axis
 * @param direction - Flexbox direction
 * @param p - Padding
 * @param px - Horizontal padding (left + right)
 * @param py - Vertical padding (top + bottom)
 * @param pt - Padding top
 * @param pb - Padding bottom
 * @param pr - Padding right
 * @param pl - Padding left
 * @param m - Margin
 * @param mx - Horizontal margin (left + right)
 * @param my - Vertical margin (top + bottom)
 * @param mt - Margin top
 * @param mb - Margin bottom
 * @param mr - Margin right
 * @param ml - Margin left
 * @param gap - Gap between elements
 * @param gapRow - Row gap
 * @param gapColumn - Column gap
 * @param className - Custom CSS class names
 * @param bgColor - Background color
 * @param color - Text color
 * @param border - Border sides
 * @param borderWidth - Border thickness
 * @param borderColor - Border color
 * @param borderRadius - Border radius (e.g., '4px', '50%')
 * @param boxShadow - Shadow style
 */

export interface BoxProps
  extends React.HTMLAttributes<
    HTMLButtonElement | HTMLBaseElement | HTMLElement | undefined
  > {
  id?: string;
  as?: any;
  htmlFor?: string;
  tag?: string;

  children?: React.ReactNode;

  disabled?: boolean;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLElement | HTMLBaseElement | undefined
  >;
  hover?: boolean;

  fullWidth?: boolean;
  fullHeight?: boolean;
  column?: number;
  width?: string | number;
  height?: string | number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  limit?: number;
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
  direction?:
    | "none"
    | "row"
    | "row-reverse"
    | "row-wrap"
    | "column"
    | "column-reverse";

  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  gap?: number;
  gapRow?: number;
  gapColumn?: number;

  className?: string;
  bgColor?: string;
  color?: string;
  border?: "all" | "top" | "bottom";
  borderWidth?: 0 | 1 | 2;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: "none" | "top" | "bottom";
}
