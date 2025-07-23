import { Button } from '@/shared-components/Button';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../../shared-components/Box';
import { TextStyle } from '../../shared-components/TextStyle';

interface ZoomElement {
	className?: string;
	isZoomable?: boolean;
	onRefresh?: () => void;
	children?: React.ReactNode;
}

const ZoomElement = ({ className, children, isZoomable = true }: ZoomElement) => {
	const classnames = classNames(className, 'components-zoom-element');
	const intiailZoomSize = 100;
	const contentRef = useRef<HTMLDivElement>(null);
	const [zoomSize, setZoomSize] = useState<number>(intiailZoomSize);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const zoomList = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150];

	useEffect(() => {
		const updateDimensions = () => {
			if (contentRef.current) {
				const { width, height } = contentRef.current.getBoundingClientRect();
				setDimensions({ width, height });
			}
		};
		if (isZoomable) {
			updateDimensions();
			window.addEventListener('resize', updateDimensions);
		} else {
			setZoomSize(intiailZoomSize); // Reset to default zoom size if not zoomable
		}
		return () => {
			window.removeEventListener('resize', updateDimensions);
			setZoomSize(intiailZoomSize);
		};
	}, [isZoomable]);

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
				// style={{ border: '1px solid blue' }}
			>
				<Button
					variant={'ghost-icon-main-no-padding'}
					iconLeft='minus'
					$borderRadius='round'
					sizeIcon={24}
					onClick={() => handleZoom({ inCrement: false })}
				/>
				<Button variant={'ghost-main-no-padding'} onClick={() => setZoomSize(intiailZoomSize)}>
					<TextStyle variant='mobileH4' color='--color-primary'>
						{`${zoomSize}%`}
					</TextStyle>
				</Button>
				<Button
					variant={'ghost-icon-main-no-padding'}
					iconLeft='plus'
					$borderRadius='round'
					sizeIcon={24}
					onClick={() => handleZoom({ inCrement: true })}
				/>
			</Box>
			{/* Zoom */}

			{/* Children */}
			<Box
				// position='absolute'
				top={0}
				// position='relative'
				// height='inherit'
				// $minHeight='inherit'
				// $maxHeight='inherit'
				width={'100%'}
				// height={'100%'}
				// $overflowY='auto'
				$overflowY='scroll'
				$minHeight='calc(100vh - 220px)'
				$maxHeight='calc(100vh - 220px)'
				$justifyContent='center'
				$zIndex={500}
				style={
					{
						// border: '1px solid green'
					}
				}
			>
				<Box
					ref={contentRef}
					position='relative'
					$justifyContent='center'
					$zIndex={500}
					style={{
						// border: '1px solid red',
						transformOrigin: 'center top',
						// width: dimensions.width > 0 ? `${100 / (zoomSize / 100)}%` : '100%',
						// height: dimensions.height > 0 ? `${100 / (zoomSize / 100)}%` : '100%',
						width: '100%',
						height: '100%',
						transition: 'transform 0.1s ease-out',
						// transform: `scale(${Number(zoomSize) / 100})`,
						zoom: `${zoomSize}%`
						// minHeight: '100vh'
						// maxHeight: 'inherit'
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
