import {TextFieldProps} from "./TextField.types";
import {forwardRef, useEffect} from "react";
import classNames from "classnames";
import * as S from "./TextField.styled";

export const TextField = forwardRef<undefined | any, TextFieldProps>(
  (
    {
      id,
      label,
      value,
      type,
      variant,
      suffix,
      error,
      disabled,
      helpingText,
      helpingTextRight,
      errorMessage,
      half,
      iconLeft,
      iconRight,
      keyboard,
      className,
      iconTyping,
      onChange,
      maxLength,
      ...rest
    }: TextFieldProps,
    ref,
  ) => {
    const isNormalInput =
      type === "text" ||
      type === "number" ||
      type === "email" ||
      type === "password";

    const classnames = classNames(className, "ds-text-field", {
      [`ds-text-field--${variant}`]: variant,
    });

    useEffect(() => {
      // Fix bug in Chrome mobile: ensure blur on "Done" keyboard press
      const inputElement = document.querySelector(`[id="${id}"]`);
      if (inputElement) {
        const handleBlur = (event: any) => {
          event.target.blur();
        };
        inputElement.addEventListener("blur", handleBlur);

        return () => {
          inputElement.removeEventListener("blur", handleBlur);
        };
      }
    }, [id]);

    return (
      <S.TextFieldWrapper className={classnames}>
        <S.InputWrapper error={error}>
          {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
          <S.Input {...rest} disabled={disabled} id={id} />
          {iconRight && <S.Icon>{iconRight}</S.Icon>}
        </S.InputWrapper>
        {helpingText && (
          <S.HelpingText error={error}>{helpingText}</S.HelpingText>
        )}
      </S.TextFieldWrapper>
    );
  },
);

TextField.defaultProps = {
  type: "text",
  iconTyping: false,
  keyboard: "text",
};

export default TextField;
