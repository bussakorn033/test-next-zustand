import classNames from "classnames";
import {forwardRef} from "react";
import {Box} from "../Box";
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
      onChange,
      label,
      labelVariant = "paragraphSmall",
      labelColor = "--color-primary",
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
      >
        <S.HiddenCheckbox
          name={name}
          checked={checked}
          checkColor={checkColor}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <S.StyledCheckbox
          name={name}
          checked={checked}
          checkColor={checkColor}
          onChange={onChange}
          ref={ref}
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
