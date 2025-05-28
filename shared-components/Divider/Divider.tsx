import React from 'react';
import { DividerProps } from './Divider.types';
import * as S from './Divider.styled';

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  weight = 1,
  className,
  ...rest
}) => {
  return <S.Divider className={className} orientation={orientation} weight={weight} {...rest} />;
};

export default Divider;
