import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/shared-components/Button';
import { Box } from '../../shared-components/Box';
import { TextStyle } from '../../shared-components/TextStyle';

interface ZoomElement {
	className?: string;
	minHeight?: string;
	maxHeight?: string;
	isZoomable?: boolean;
	onRefresh?: () => void;
	children?: React.ReactNode;
}

const ZoomElement = ({
	className,
	children,
	isZoomable = true,
	minHeight = '100vh',
	maxHeight = '100vh'
}: ZoomElement) => {
	const classnames = classNames(className, 'components-zoom-element');
	const intiailZoomSize = 100;
	const contentRef = useRef<HTMLDivElement>(null);
	const [zoomSize, setZoomSize] = useState<number>(intiailZoomSize);
	const zoomList = [50, 100, 150, 200, 250]; // Max can zoom size 250

	useEffect(() => {
		if (!isZoomable) {
			setZoomSize(intiailZoomSize); // Reset to default zoom size if not zoomable
		}
		return () => {
			setZoomSize(intiailZoomSize);
		};
	}, [isZoomable]);

	useEffect(() => {
		setZoomSize(intiailZoomSize);
		return () => {
			setZoomSize(intiailZoomSize);
		};
	}, [classnames]);

	const handleZoom = ({ inCrement = true }: { inCrement?: boolean }) => {
		setZoomSize((prevSize) => {
			const currentIndex = zoomList.indexOf(prevSize);
			if (currentIndex === -1) return 100; // Reset to default if invalid

			const nextIndex = currentIndex + (inCrement ? 1 : -1);
			if (nextIndex < 0 || nextIndex >= zoomList.length) return prevSize;

			return zoomList[nextIndex];
		});
	};

	return (
		<Box
			className={classnames}
			direction='column'
			$alignItems='center'
			gap={24}
			border='all'
			$borderColor='--color-error'
			position='relative'
			width={'100%'}
			height={'100%'}
		>
			{/* Zoom */}
			<Box
				display={isZoomable ? 'flex' : 'none'}
				$zIndex={1000}
				position='absolute'
				bottom={'24px'}
				left={'0'}
				$bgColor='--color-accent-transparent'
				p={8}
				gap={8}
				direction='row'
				border='all'
				$borderRadius={'sm'}
				$borderWidth={1}
				$borderColor='--transparent'
				overflow='hidden'
			>
				<Button
					data-testid='ZOOM_ELEMENT_MINUS_BUTTON'
					variant={'ghost-icon-main-no-padding'}
					iconLeft='minus'
					$borderRadius='round'
					sizeIcon={24}
					onClick={() => handleZoom({ inCrement: false })}
					disabled={zoomList[zoomList.indexOf(zoomSize)] === zoomList[0]}
				/>
				<TextStyle
					data-testid='ZOOM_ELEMENT_CURRENT_SIZE'
					variant='mobileH4'
					color='--color-primary'
					style={{ userSelect: 'none' }}
				>
					{`${zoomSize}%`}
				</TextStyle>
				<Button
					data-testid='ZOOM_ELEMENT_PLUS_BUTTON'
					variant={'ghost-icon-main-no-padding'}
					iconLeft='plus'
					$borderRadius='round'
					sizeIcon={24}
					onClick={() => handleZoom({ inCrement: true })}
					disabled={zoomList[zoomList.indexOf(zoomSize)] === zoomList[zoomList.length - 1]}
				/>
			</Box>
			{/* Zoom */}

			{/* Children */}
			<Box
				data-testid='ZOOM_ELEMENT_CHILDREN'
				width={'100%'}
				$minHeight={minHeight}
				$maxHeight={maxHeight}
				$overflowY='scroll'
				$justifyContent='center'
				$zIndex={500}
			>
				<Box
					ref={contentRef}
					position='relative'
					$justifyContent='center'
					$zIndex={500}
					style={{
						transformOrigin: 'center top',
						width: '100%',
						height: '100%',
						transition: 'transform 0.1s ease-out',
						zoom: `${zoomSize}%`
					}}
				>
					{children}
				</Box>
			</Box>
			{/* Children */}
		</Box>
	);
};

export default ZoomElement;
