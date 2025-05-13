import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ArrowDownBoldSVG: React.FC<IconProps> = ({
  color,
  size,
  width,
  height,
  ...rest
}) => (
  <StyledSvg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.29303 5.29286C3.46522 5.12068 3.69432 5.01725 3.93735 5.00197C4.18038 4.98669 4.42063 5.06061 4.61303 5.20986L4.70703 5.29286L8.00003 8.58486L11.293 5.29286C11.4652 5.12068 11.6943 5.01725 11.9373 5.00197C12.1804 4.98669 12.4206 5.06061 12.613 5.20986L12.707 5.29286C12.8792 5.46505 12.9826 5.69415 12.9979 5.93718C13.0132 6.18021 12.9393 6.42046 12.79 6.61286L12.707 6.70686L8.70703 10.7069C8.53484 10.879 8.30574 10.9825 8.06271 10.9977C7.81969 11.013 7.57943 10.9391 7.38703 10.7899L7.29303 10.7069L3.29303 6.70686C3.10556 6.51933 3.00024 6.26503 3.00024 5.99986C3.00024 5.7347 3.10556 5.48039 3.29303 5.29286V5.29286Z"
      fill="#002D63"
    />
  </StyledSvg>
);

ArrowDownBoldSVG.defaultProps = {
  color: "#002D63",
  width: "24px",
  height: "24px",
};

ArrowDownBoldSVG.displayName = "ArrowDownBoldSVG";

export default ArrowDownBoldSVG;
