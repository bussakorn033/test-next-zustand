import classNames from "classnames";
import {IconComponent} from "../Icon/IconList";
import {DSTextStyle} from "../TextStyle";
import * as S from "./Button.styled";
import {DSButtonProps} from "./Button.types";

export const DSButton = ({
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
}: DSButtonProps) => {
  const classnames = classNames("ds-text-style", className);

  const icon = iconRight ?? iconLeft;
  const isIconOnly = Boolean(icon && !children);
  const iconSize = size === "large" ? "32" : "24";
  const iconColor =
    variant === "primary" ? "var(--color-neutral-light)" : "currentColor";

  const textStyleVariant: "buttonMedium" | "buttonBig" = {
    medium: "buttonMedium",
    large: "buttonBig",
  }[size] as "buttonMedium" | "buttonBig";

  return (
    <S.StyledButton
      {...rest}
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
    >
      {icon && <IconComponent size={iconSize} icon={icon} color={iconColor} />}
      {children && (
        <DSTextStyle variant={textStyleVariant}>
          {variant + " : " + children}
        </DSTextStyle>
      )}
      {iconLeft && iconRight && (
        <IconComponent size={iconSize} icon={iconLeft} color={iconColor} />
      )}
    </S.StyledButton>
  );
};

export default DSButton;
