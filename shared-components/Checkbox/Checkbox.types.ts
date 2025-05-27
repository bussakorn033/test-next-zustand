import React from "react";
import {TextStyleProps} from "../TextStyle";

/**
 * Checkbox component props
 * @param label - The text label displayed next to the checkbox.
 * @param labelVariant - The text style variant for the label. Defaults to "labelSmall" if not provided.
 * @param checked - Indicates whether the checkbox is checked.
 * @param onChange - Event handler for when the checkbox state changes.
 * @param ...rest - Any additional native input props.
 */

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelVariant?: TextStyleProps["variant"];
  labelColor?: TextStyleProps["color"];
  checkColor?: TextStyleProps["color"];
  className?: string;
  gap?: number;
  name?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
