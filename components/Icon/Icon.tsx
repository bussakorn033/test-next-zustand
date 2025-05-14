import classNames from "classnames";
import {Box} from "../Box";
import {IconProps} from "./Icon.types";
import {IconComponent} from "./IconList";

export const Icon = ({...rest}: IconProps) => {
  const {className, icon = "", color = "", width = null, height = null} = rest;
  const classnames = classNames(className, "ds-ui-icon");

  return (
    <Box className={classnames}>
      <IconComponent
        icon={icon}
        color={icon.includes("img_") ? "" : color}
        width={width}
        height={height}
      />
    </Box>
  );
};

Icon.defaultProps = {
  icon: "",
  color: "#002D63",
};

Icon.displayName = "Icon";

export default Icon;
