import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LoadingIcon } from '@/shared-components/loading-icon';
import { LoadingProps } from './Loading.types';
import { LoadingBox, LoadingPlayer, Overlay } from './Loading.styled';

const Loading: React.FC<LoadingProps> = ({ isLoading }: LoadingProps) => {
	return isLoading ? (
		<Overlay data-testid='SEARCH_COMPONENT_LOADING' className='ds-ui-modal'>
			<LoadingBox>
				<LoadingPlayer $bgColor='component-light-background' px={24} py={24}>
					<Player autoplay loop src={LoadingIcon}></Player>
				</LoadingPlayer>
			</LoadingBox>
		</Overlay>
	) : (
		<React.Fragment></React.Fragment>
	);
};

export default Loading;
