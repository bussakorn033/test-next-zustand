import React from 'react';
import { StyledSvg } from './SVG.styled';
import { IconProps } from './SVG.types';

export const ArrowUpBoldSVG: React.FC<IconProps> = ({
  color = '#002D63',
  width = '24px',
  height = '24px',
  ...rest
}) => (
  <StyledSvg
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.293 5.29286C7.46519 5.12068 7.69429 5.01725 7.93732 5.00197C8.18034 4.98669 8.42059 5.06061 8.613 5.20986L8.707 5.29286L12.707 9.29286C12.8863 9.47282 12.9905 9.7143 12.9982 9.96825C13.006 10.2222 12.9168 10.4696 12.7488 10.6601C12.5807 10.8507 12.3464 10.9702 12.0935 10.9943C11.8406 11.0184 11.588 10.9453 11.387 10.7899L11.293 10.7069L8 7.41486L4.707 10.7069C4.53481 10.879 4.30571 10.9825 4.06268 10.9977C3.81965 11.013 3.5794 10.9391 3.387 10.7899L3.293 10.7069C3.12082 10.5347 3.01739 10.3056 3.00211 10.0625C2.98683 9.81952 3.06075 9.57927 3.21 9.38686L3.293 9.29286L7.293 5.29286Z'
      fill='currentColor'
    />
  </StyledSvg>
);

ArrowUpBoldSVG.displayName = 'ArrowUpBoldSVG';

export default ArrowUpBoldSVG;
