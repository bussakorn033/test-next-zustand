import classNames from "classnames";
import {forwardRef} from "react";
import {TextStyle} from "../TextStyle";
import * as S from "./Checkbox.styled";
import {CheckboxProps} from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      gap = 12,
      checkColor = "--color-primary",
      name,
      checked,
      disabled,
      onChange,
      label,
      labelVariant = "paragraphSmall",
      labelColor = "--color-primary",
      size = 16,
      ...props
    },
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-button");

    return (
      <S.CheckboxContainer
        className={classnames}
        direction="row"
        alignItems="center"
        gap={gap}
        position="relative"
      >
        <S.HiddenCheckbox
          name={name}
          checked={checked}
          checkColor={checkColor}
          disabled={disabled}
          onChange={(e) => (disabled ? e.preventDefault() : onChange(e))}
          ref={ref}
          size={size}
          {...props}
        />
        <S.StyledCheckbox
          name={name}
          checked={checked}
          checkColor={checkColor}
          disabled={disabled}
          onChange={(e) => (disabled ? e.preventDefault() : onChange(e))}
          ref={ref}
          size={size}
          {...props}
        />
        {label && (
          <TextStyle variant={labelVariant} color={labelColor}>
            {label}
          </TextStyle>
        )}
      </S.CheckboxContainer>
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
