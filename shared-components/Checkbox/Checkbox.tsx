import {forwardRef} from "react";
import {TextStyle} from "../TextStyle";
import * as S from "./Checkbox.styled";
import {CheckboxProps} from "./Checkbox.types";
import classNames from "classnames";

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
          onChange={onChange}
          ref={ref}
          {...props}
        />
        <S.StyledCheckbox checked={checked} />
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
