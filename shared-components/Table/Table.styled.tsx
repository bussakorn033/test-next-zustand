import styled from 'styled-components';
import { Box } from '../Box';
import { TableProps } from './Table.types';

export const Table = styled(Box)<TableProps>`
	.scrollShadow {
		box-shadow:
			0px 4px 0px 0px #4c57650f,
			0px 2px 0px 0px #0000000a;
	}
`;
