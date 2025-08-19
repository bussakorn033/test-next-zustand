import { Box } from '@/shared-components/Box';
import { Button } from '@/shared-components/Button';
import { TextStyle } from '@/shared-components/TextStyle';
import classNames from 'classnames';
import React from 'react';
import * as S from './PreviewContractBox.style';
import { Icon } from '@/shared-components/Icon';
import { useTranslation } from 'react-i18next';

interface MessageButton {
	name_th?: string;
	name_en?: string;
	link?: string;
}

interface PreviewContractProps {
	className?: string;
	title?: string;
	label?: string;
	image?: string;
	message?: string;
	button?: MessageButton[];
}

const PreviewContractBox: React.FC<PreviewContractProps> = ({
	className,
	title,
	label,
	image,
	button
}) => {
	const classnames = classNames(className, 'components-preview-contract-box');
	const { t } = useTranslation();

	return (
		<S.PreviewContractBoxWrapper data-testid='COMPONENTS_PREVIEW_CONTRACT_BOX' className={classnames}>
			<Box
				border='all'
				$borderWidth={1}
				$borderRadius='sm'
				$borderColor='--color-neutral-grey-lighter'
				$bgColor='--color-neutral-light'
				overflow='hidden'
				$boxSizing='border-box'
				position='relative'
				$isFullWidth
			>
				{/* Box Content */}
				<Box direction='column' $isFullWidth>
					{/* Box Header */}
					<Box
						direction='row'
						$justifyContent='space-between'
						$alignItems='center'
						p={'14.09px 13.5px 11.91px 31px'}
					>
						<Box flex={1} $alignItems='center'>
							<TextStyle variant='timeDevice' color='--color-primary'>
								{t('preview_contract_box_time')}
							</TextStyle>
						</Box>

						<Box flex={1} $alignItems='center' $justifyContent='flex-end' height={11}>
							<Icon data-testid='ICON_BTN_MOBILE_BAR' icon={'img_mobile_bar_svg'} />
						</Box>
					</Box>
					{/* Box Header */}

					{/* Box Title */}
					<Box direction='row' $justifyContent='space-between' $alignItems='center'>
						<Box flex={1} $alignItems='center' pl={8} height={40} width={40}>
							<Icon
								data-testid='ICON_BTN_ARROW_LEFT'
								icon='arrow_left'
								color='--color-primary'
								width={24}
								height={24}
							/>
						</Box>
						<TextStyle variant='pageTitle' color='--color-primary' $alignItems='center'>
							{t('preview_contract_box_title')}
						</TextStyle>
						<Box flex={1}></Box>
					</Box>
					{/* Box Title */}

					{/* Image Banner */}
					<S.ImageBanner data-testid='COMPONENTS_PREVIEW_CONTRACT_IMAGE_BANNER' background={image} />
					{/* Image Banner */}


					{/* Message Box */}
					<Box direction='column' $alignItems='center' p={'16px 16px 24px'}>
						<Box
							direction='column'
							mt={'-48px'}
							p={'24px 16px'}
							gap={45}
							border='all'
							$borderWidth={1}
							$borderRadius='sm'
							$borderColor='--color-border-light'
							$bgColor='--color-neutral-light'
							overflow='hidden'
							$boxShadow='bottom'
							$boxSizing='border-box'
							$isFullWidth
						>
							<Box direction='column' gap={8}>
								{title && (
									<TextStyle variant='h3' color='--color-primary'>
										{title}
									</TextStyle>
								)}
								{label && (
									<TextStyle
										variant='paragraphMedium'
										color='--color-neutral-grey-light'
										$wordBreak='break-word'
									>
										{label}
									</TextStyle>
								)}
							</Box>
							{button && (
								<Box direction='column' gap={16} $isFullWidth>
									{[...button].map((btn, index) => (
										<Box
											data-testid={`COMPONENTS_PREVIEW_CONTRACT_BTN_${index}`}
											key={`components-preview-contract-btn-${index}`}
											pointerEvents='none'
											$isHover={false}
										>
											<Button variant={index % 2 == 0 ? 'tertiary' : 'ghost-tertiary'} width='full'>
												{btn.name_th || btn.name_en}
											</Button>
										</Box>
									))}
								</Box>
							)}
						</Box>
					</Box>
					{/* Message Box */}
				</Box>
				{/* Box Content */}
			</Box>
		</S.PreviewContractBoxWrapper>
	);
};

export default PreviewContractBox;
