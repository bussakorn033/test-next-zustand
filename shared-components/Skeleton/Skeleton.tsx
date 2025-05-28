import React from 'react';
import * as S from './Skeleton.styled';
import { SkeletonProps } from './Skeleton.types';

export const Skeleton = ({ className, width, height, ...rest }: SkeletonProps) => {
  return <S.Skeleton className={className} style={{ height: height, width: width }} {...rest} />;
};

export default Skeleton;
