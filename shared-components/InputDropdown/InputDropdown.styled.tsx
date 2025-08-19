import styled from 'styled-components';
import { Box } from '../Box';

export const Wrapper = styled.div``;
export const WrapperDropdown = styled(Box)`
	&:hover,
	*:hover {
		&,
		* {
			color: var(--color-accent) !important;
			fill: var(--color-accent) !important;
		}
	}
`;

export const InputBox = styled.div``;

export const Item = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 8px 16px;
	border-radius: 8px;
	background-color: #fff;
	font-weight: normal;
	&,
	> * {
		cursor: pointer !important;
	}
`;

export const SubItem = styled.div<{ $active?: boolean }>`
	display: flex;
	gap: 8px;
	align-items: flex-start;
	padding: 8px 16px;
	border-radius: ${({ $active }) => ($active ? '0px' : '8px')};
	cursor: pointer;
	background-color: ${({ $active }) => ($active ? 'var(--color-primary-light)' : '#fff')};
	font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
	&,
	> * {
		color: var(--${({ $active }) => ($active ? 'color-accent' : 'color-primary')}) !important;
		cursor: pointer !important;
	}

	&:hover {
		background-color: var(--color-primary-hover-light);
		border-radius: 0px;
	}
`;
