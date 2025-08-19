import { Box } from '@/shared-components/Box';
import styled from 'styled-components';

export const PreviewContractBoxWrapper = styled(Box)`
	width: 100%;
	img {
		width: auto;
		height: 11px;
		color: transparent;
	}
`;

export const ImageBanner = styled.div<{background: string | undefined}>`
  display: flex;
  height: 200px;
  background-image: url(${({ background }) => background});
  background-size: ${({ background }) => (background ? 'cover' : '')};
  background-position: center center;
  background-repeat: no-repeat;
`
