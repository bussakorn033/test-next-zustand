import classNames from "classnames";
import {Box} from "../Box";
import {IconProps} from "./Icon.types";
import {IconComponent} from "./IconList";

export const Icon = ({
  className,
  icon = "",
  color = "#002D63",
  width = 24,
  height = 24,
}: IconProps) => {
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

Icon.displayName = "Icon";

export default Icon;
