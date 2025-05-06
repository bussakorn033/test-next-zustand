import React from "react";
import {StyledSvg} from "./SVG.styled";
import {IconProps} from "./SVG.types";

export const ArrowRightSVG: React.FC<IconProps> = ({
  color,
  size,
  width,
  height,
}) => (
  <StyledSvg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    size={size}
    color={color}
    width={width}
    height={height}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.29286 5.29286C8.46505 5.12068 8.69415 5.01725 8.93718 5.00197C9.18021 4.98669 9.42046 5.06061 9.61286 5.20986L9.70686 5.29286L15.7069 11.2929C15.879 11.4651 15.9825 11.6942 15.9977 11.9372C16.013 12.1802 15.9391 12.4205 15.7899 12.6129L15.7069 12.7069L9.70686 18.7069C9.5269 18.8862 9.28543 18.9903 9.03148 18.9981C8.77753 19.0058 8.53015 18.9166 8.33958 18.7486C8.14902 18.5806 8.02956 18.3463 8.00546 18.0934C7.98137 17.8405 8.05445 17.5879 8.20986 17.3869L8.29286 17.2929L13.5849 11.9999L8.29286 6.70686C8.12068 6.53467 8.01725 6.30557 8.00197 6.06254C7.98669 5.81952 8.06061 5.57927 8.20986 5.38686L8.29286 5.29286Z"
      fill="currentColor"
    />
  </StyledSvg>
);

ArrowRightSVG.defaultProps = {
  color: "#002D63",
  size: "24px",
  width: "24px",
  height: "24px",
};

export default ArrowRightSVG;
