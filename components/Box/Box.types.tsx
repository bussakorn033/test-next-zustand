export enum deviceModel {
  IPHONE_6 = "iPhone 6",
}

export interface BoxProps
  extends React.HTMLAttributes<
    HTMLButtonElement | HTMLBaseElement | HTMLElement | undefined
  > {
  /**
   * ID of component
   */
  id?: string;
  as?: any;
  htmlFor?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLElement | HTMLBaseElement | undefined
  >;
  children?: React.ReactNode;
  className?: string;
  textAlign?: "left" | "center" | "right";
  alignItems?: "start" | "center" | "end" | "baseline";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "space-between"
    | "space-around";
  bgColor?: string;
  color?: string;
  border?: "all" | "top" | "bottom";
  borderWidth?: 0 | 1 | 2;
  borderColor?: string;
  /**
   * borderRadius: none: '0' | xs: '4px' | sm: '8px'| md: '12px'| lg: '16px'| xl: '24px'| circle: '50%'
   */
  borderRadius?: string;
  boxShadow?: "none" | "top" | "bottom";
  tag?: string;
  direction?:
    | "none"
    | "row"
    | "row-reverse"
    | "row-wrap"
    | "column"
    | "column-reverse";
  hover?: boolean;
  fullWidth?: boolean;
  column?: number;
  p?: number;
  m?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  gap?: number;
  /**
   * ID of component
   */
  gapRow?: number;
  gapColumn?: number;
  limit?: number;
  maxWidth?: number;
  oldDevice?: boolean;
}
