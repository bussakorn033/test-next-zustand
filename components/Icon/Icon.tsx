import * as S from "./Icon.styled";
import classNames from "classnames";
import {IconProps} from "./Icon.types";
import {iconList} from "./IconList";

export const DSIcon = ({
  // className,
  // icon,
  // size,
  // variant,
  // color,
  // width,
  // height,
  ...rest
}: IconProps) => {
  const {
    className,
    icon = "next_js",
    size = "medium",
    variant = "outline",
    color = "#002D63",
    width,
    height,
  } = rest;
  console.log("🚀 ~ rest:", rest);
  const checkVariant = (variant: String) => {
    return variant === "warning" || variant === "success";
  };

  const classnames = classNames(className, "ds-icon", "icon");

  const Icon = iconList[icon];
  console.log(`🚀 => icon:`, icon);
  console.log(`🚀 => Icon:`, Icon);

  console.log(`🚀 => iconList[icon]:`, typeof iconList[icon]);
  return (
    Icon && (
      <S.Icon
        className={classnames}
        title={icon}
        style={{width: width, height: height}}
        width={width}
        height={height}
        // icon={icon}
        // size={size}
        color={color}
        // variant={variant}
        {...rest}
      >
        {/* <Icon style={{color: color}} /> */}
        {/* {icon} */}
        <img
          src={Icon.src}
          alt={icon}
          width={width || Icon.width}
          height={height || Icon.height}
          style={{color}}
        />
        {/* {iconList[icon]} */}
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
