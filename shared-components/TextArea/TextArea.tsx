import {TextAreaProps} from "./TextArea.types";
import {forwardRef, useEffect} from "react";
import classNames from "classnames";
import * as S from "./TextArea.styled";
import {TextStyle} from "../TextStyle";
import Icon from "../Icon/Icon";
import {Box} from "../Box";

export const TextArea = forwardRef<undefined | any, TextAreaProps>(
  (
    {
      id,
      label,
      labelHelping,
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
      clearable,
      ...rest
    }: TextAreaProps,
    ref,
  ) => {
    const isNormalInput =
      type === "text" ||
      type === "number" ||
      type === "email" ||
      type === "password";

    const classnames = classNames(className, "ds-text-field");

    const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    };
    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && false) {
        event.preventDefault();
        if (onChange) {
          onChange({
            target: {name: rest.name, value: event.currentTarget.value},
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };
    const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && false) {
        event.preventDefault();
        if (onChange) {
          onChange({
            target: {name: rest.name, value: event.currentTarget.value},
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };
    const onKeyPressHandler = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (event.key === "Enter" && false) {
        event.preventDefault();
        if (onChange) {
          onChange({
            target: {name: rest.name, value: event.currentTarget.value},
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };
    const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      if (event.target) {
        event.target.select();
      }
      if (onChange) {
        onChange({
          target: {name: rest.name, value: event.currentTarget.value},
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange({
          target: {name: rest.name, value: event.currentTarget.value},
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };
    const onClickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange({
          target: {name: rest.name, value: event.currentTarget.value},
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };
    const onMouseDownHandler = (event: React.MouseEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
        event.currentTarget.select();
      }
      if (onChange) {
        onChange({
          target: {name: rest.name, value: event.currentTarget.value},
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };
    const onMouseUpHandler = (event: React.MouseEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
        event.currentTarget.select();
      }
      if (onChange) {
        onChange({
          target: {name: rest.name, value: event.currentTarget.value},
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

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
      <S.TextAreaWrapper
        className={classnames}
        disabled={disabled}
        value={value}
        clearable={clearable}
        {...rest}
      >
        <Box direction="row" alignItems="center" gap={6}>
          <TextStyle variant="labelXSmall" color="--color-secondary">
            {label}
          </TextStyle>
          {labelHelping && (
            <TextStyle
              variant="labelXSmall"
              color="--color-secondary"
              alignContent="center"
            >
              <Icon
                icon="help_circle_fill"
                width={12}
                height={12}
                color="--color-secondary"
              />
            </TextStyle>
          )}
        </Box>
        <S.InputWrapper error={error}>
          {iconLeft && <S.Icon>{iconLeft}</S.Icon>}
          <TextStyle
            variant="labelSmall"
            color="--color-primary"
            alignContent="center"
            flex={1}
          >
            <S.InputTextArea
              {...rest}
              id={id}
              disabled={disabled}
              value={value}
              clearable={clearable}
              onChange={onchangeHandler}
              onKeyDown={onKeyDownHandler}
              onKeyUp={onKeyUpHandler}
              onKeyPress={onKeyPressHandler}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onClick={onClickHandler}
              onMouseDown={onMouseDownHandler}
              onMouseUp={onMouseUpHandler}
            />
          </TextStyle>
          {clearable && value && !disabled && (
            <S.ClearButton
              type="button"
              name={rest.name}
              onClick={() => {
                onChange &&
                  onChange({
                    target: {name: rest.name, value: ""},
                  } as React.ChangeEvent<HTMLInputElement>);
              }}
            >
              <Icon
                icon="cancel_circle_fill"
                width={20}
                height={20}
                color="--color-neutral-grey-lighter"
              />
            </S.ClearButton>
          )}
          {iconRight && <S.Icon>{iconRight}</S.Icon>}
        </S.InputWrapper>
        {helpingText && (
          <S.HelpingText error={error}>
            <TextStyle variant="labelXSmall">{helpingText}</TextStyle>
          </S.HelpingText>
        )}
      </S.TextAreaWrapper>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
