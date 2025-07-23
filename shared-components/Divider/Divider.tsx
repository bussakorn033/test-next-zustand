import React from 'react';
import { DividerProps } from './Divider.types';
import * as S from './Divider.styled';
import classNames from 'classnames';

const Divider: React.FC<DividerProps> = ({
	orientation = 'horizontal',
	weight = 1,
	className,
	...rest
}) => {
	const classnames = classNames(className, 'ds-ui-divider');

	return <S.Divider className={classnames} orientation={orientation} weight={weight} {...rest} />;
};

export default Divider;
