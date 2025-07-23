import React from 'react';
import * as S from './Skeleton.styled';
import { SkeletonProps } from './Skeleton.types';
import classNames from 'classnames';

export const Skeleton = ({ className, width, height, ...rest }: SkeletonProps) => {
	const classnames = classNames(className, 'ds-ui-skeleton');
	return <S.Skeleton className={classnames} style={{ height: height, width: width }} {...rest} />;
};

export default Skeleton;
