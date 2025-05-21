import React from "react";

/**
 * Button component props
 * @param id - ID of component
 * @param className - CSS class names that can be appended to the component
 * @param variant - Button variation
 * @param label - Button label
 * @param size - Optional size
 * @param width - Optional width
 * @param borderRadius - Optional border radius
 * @param iconLeft - Optional icon on the left
 * @param iconRight - Optional icon on the right
 * @param disabled - Button disabled state
 * @param children - Button content
 */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  variant?:
    | "primary"
    | "negative"
    | "secondary"
    | "secondary-negative"
    | "ghost-primary"
    | "ghost-secondary"
    | "ghost-negative"
    | "ghost-primary-no-padding"
    | "ghost-secondary-no-padding"
    | "ghost-negative-no-padding"
    | "ghost-icon-primary"
    | "ghost-icon-secondary"
    | "ghost-icon-negative"
    | "ghost-icon-primary-no-padding"
    | "ghost-icon-secondary-no-padding"
    | "ghost-icon-negative-no-padding"
    | undefined;
  label?: string;
  size?: "medium" | "large";
  sizeIcon?: string | number | null;
  flex?: string | number | null;
  flexWrap?: string | null;
  width?: "normal" | "full";
  borderRadius?: "normal" | "round" | "none";
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
