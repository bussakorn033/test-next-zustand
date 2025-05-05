import * as S from "./Icon.styled";
import classNames from "classnames";
import { IconProps } from "./Icon.types";
import { iconList } from "./IconList";

export const DSIcon = ({
  className,
  icon,
  size,
  variant,
  color,
  width,
  height,
  ...rest
}: IconProps) => {
  const checkVariant = (variant: String) => {
    return variant === "warning" || variant === "success";
  };

  const classnames = classNames(
    className,
    "ds-icon",
    "icon",
  );

  const Icon = iconList[icon as keyof typeof iconList];

  console.log(`---- ~ icon:`, icon);
  console.log(`---- ~ Icon:`, Icon);

  return (
    Icon && (
    <S.Icon
      className={classnames}
      title={icon}
      style={{ width: width, height: height }}
      width={width}
      height={height}
      icon={icon}
      size={size}
      variant={variant}
      {...rest}
    >
      <Icon style={{color: color}} />
      <img
          src={Icon.src}
          alt={icon}
          width={width || Icon.width}
          height={height || Icon.height}
          style={{ color }}
        />
    </S.Icon>
    )
  );
};

DSIcon.defaultProps = {
  icon: "next_js",
  size: "medium",
  variant: "outline",
  color: "#002D63",
};

DSIcon.displayName = "DSIcon";

export default DSIcon;
