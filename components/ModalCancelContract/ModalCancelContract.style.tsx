import styled from 'styled-components';
import { Box } from '@/shared-components/Box';

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const DropdownMenu = styled(Box)`
	padding-top: 4px;
	position: absolute;
	left: 0;
	right: 0;
	z-index: 1000;
	cursor: pointer;
`;
