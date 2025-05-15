import classNames from "classnames";
import {TextStyle} from "../TextStyle";
import * as S from "./Button.styled";
import {ButtonProps} from "./Button.types";
import Icon from "../Icon/Icon";

export const Button = ({
  variant = "primary",
  size = "medium",
  width = "normal",
  borderRadius = "normal",
  iconLeft,
  iconRight,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const classnames = classNames(className, "ds-ui-button");

  const icon = iconRight ?? iconLeft;
  const isIconOnly = Boolean(icon && !children);
  const iconSize = size === "large" ? 32 : 24;
  const iconColor =
    variant === "primary" ? "var(--color-neutral-light)" : "currentColor";

  const textStyleVariant: "buttonMedium" | "buttonBig" = {
    medium: "buttonMedium",
    large: "buttonBig",
  }[size] as "buttonMedium" | "buttonBig";

  return (
    <S.StyledButton
      tag="button"
      role="button"
      direction={iconRight ? "row-reverse" : "row"}
      alignItems="center"
      variant={variant}
      size={size}
      width={width}
      borderRadius={borderRadius}
      disabled={disabled}
      isIconOnly={isIconOnly}
      justifyContent="center"
      className={classnames}
      {...rest}
    >
      {icon && (
        <Icon
          width={iconSize}
          height={iconSize}
          icon={icon}
          color={iconColor}
        />
      )}
      {children && <TextStyle variant={textStyleVariant}>{children}</TextStyle>}
      {iconLeft && iconRight && (
        <Icon
          width={iconSize}
          height={iconSize}
          icon={iconLeft}
          color={iconColor}
        />
      )}
    </S.StyledButton>
  );
};

export default Button;
