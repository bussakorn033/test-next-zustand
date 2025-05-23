import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ArrowDownSVG: React.FC<IconProps> = ({
  color = "#002D63",
  width = "24px",
  height = "24px",
  ...rest
}) => (
  <StyledSvg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29279 8.29286C5.46498 8.12068 5.69408 8.01725 5.93711 8.00197C6.18013 7.98669 6.42038 8.06061 6.61279 8.20986L6.70679 8.29286L11.9998 13.5849L17.2928 8.29286C17.465 8.12068 17.6941 8.01725 17.9371 8.00197C18.1801 7.98669 18.4204 8.06061 18.6128 8.20986L18.7068 8.29286C18.879 8.46505 18.9824 8.69415 18.9977 8.93718C19.013 9.18021 18.939 9.42046 18.7898 9.61286L18.7068 9.70686L12.7068 15.7069C12.5346 15.879 12.3055 15.9825 12.0625 15.9977C11.8194 16.013 11.5792 15.9391 11.3868 15.7899L11.2928 15.7069L5.29279 9.70686C5.10532 9.51933 5 9.26502 5 8.99986C5 8.7347 5.10532 8.48039 5.29279 8.29286Z"
      fill="#002D63"
    />
  </StyledSvg>
);

ArrowDownSVG.displayName = "ArrowDownSVG";

export default ArrowDownSVG;
