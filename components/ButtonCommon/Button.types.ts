import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ID of component
   */
  id?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Button variation.
   */
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
    | "ghost-icon-negative-no-padding";

  /**
   * Button label
   */
  label?: string;
  /**
   * Optional size
   */
  size?: "medium" | "large";
  /**
   * Optional width
   */
  width?: "normal" | "full";
  /**
   * Optional size
   */
  borderRadius?: "normal" | "round" | "none";
  /**
   * Optional icon
   */
  iconLeft?: string;
  iconRight?: string;
  /**
   * Button disabled
   */
  disabled?: boolean;
  children?: React.ReactNode;
}
