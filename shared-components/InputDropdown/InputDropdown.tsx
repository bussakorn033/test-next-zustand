import { Box } from '@/shared-components/Box';
import { Checkbox } from '@/shared-components/Checkbox';
import { Divider } from '@/shared-components/Divider';
import { Popover } from '@/shared-components/Popover';
import { TextStyle } from '@/shared-components/TextStyle';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import * as S from './InputDropdown.styled';
import { InputDropdownProps, MenuItemType } from './InputDropdown.types';

const InputDropdown: React.FC<InputDropdownProps> = ({
	label,
	menuItems,
	activeMenu,
	onSelect,
	height,
	width,
	$minHeight,
	$minWidth,
	$maxHeight,
	$maxWidth,
	variant = 'primary',
	type = 'normal',
	$isAllowDisplayTop = true
}) => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const [checkboxList, setCheckboxList] = useState<Array<string | number | undefined> | null>(null);
	const [checkboxSelectLogList, setCheckboxSelectLogList] = useState<Array<string | number | undefined>>(
		[]
	);

	useEffect(() => {
		if (checkboxList) {
			onSelect(checkboxList);
			setCheckboxSelectLogList(checkboxList);
		}

		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setIsOpen(false);
				setCheckboxSelectLogList(checkboxList || []);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			setCheckboxSelectLogList([]);
		};
	}, [checkboxList]);

	useEffect(() => {
		if (activeMenu && (Array.isArray(activeMenu) && activeMenu.length > 0)) {
			if (Array.isArray(activeMenu)) {
				setCheckboxList(activeMenu);
				setCheckboxSelectLogList(activeMenu);
			} else {
				setCheckboxList([activeMenu]);
				setCheckboxSelectLogList([activeMenu]);
			}
		} else {
			setCheckboxList(null);
			setCheckboxSelectLogList([]);
		}
		return () => {
			setCheckboxList(null);
			setCheckboxSelectLogList([]);
		};
	}, [Array.isArray(activeMenu) ? activeMenu.length : activeMenu]);

	return (
		<Box
			data-testid='SHARED_COMPONENTS_INPUT_DROPDOWN'
			className='ds-ui-input-dropdown'
			ref={wrapperRef}
			height={'100%'}
		>
			<S.WrapperDropdown
				direction='row'
				gap={4}
				$zIndex={1}
				role='button'
				ref={buttonRef}
				position='relative'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				{variant !== 'primary' && (
					<Box mt={0} $alignItems='center' position='relative' $zIndex={2}>
						<TextStyle variant={'labelXSmall'} color={`color-${variant}`}>
							{label}
						</TextStyle>
					</Box>
				)}
				<Box $justifyContent='center' $alignItems='center'>
					<Button
						variant={'ghost-main-no-padding'}
						$borderRadius='md'
						iconRight={!isOpen ? 'arrow_down_bold' : 'arrow_up_bold'}
						sizeIcon={16}
						colorIcon='--color-primary'
						style={{ height: '100%', alignSelf: 'center', padding: '4px !important' }}
						pl={variant === 'primary' ? 12 : 8}
						pr={variant === 'primary' ? 8 : 8}
					>
						{variant === 'primary' && (
							<TextStyle variant={'labelSmallBold'} color={`color-${variant}`}>
								{label}
							</TextStyle>
						)}
					</Button>
				</Box>
			</S.WrapperDropdown>
			<Popover
				isOpen={isOpen}
				anchorRef={buttonRef}
				padding={0}
				onClose={() => setIsOpen(false)}
				$isAllowDisplayTop={$isAllowDisplayTop}
			>
				<Box
					direction='column'
					py={8}
					height={height}
					width={width}
					$minHeight={$minHeight}
					$minWidth={$minWidth}
					$maxHeight={$maxHeight}
					$maxWidth={$maxWidth}
				>
					{menuItems?.length > 0 ? (
						<>
							{[...menuItems].map((item, index) => {
								const isChecked = [...checkboxSelectLogList].includes(item.id);
								const selectMenu = (item: MenuItemType): void => {
									if (type !== 'checkbox') {
										onSelect(item);
										setIsOpen(false);
									}
								};

								return (
									<Box key={item.id} direction='column'>
										{item.subMenu ? (
											<>
												<S.Item>
													<TextStyle variant='labelSmall' color='color-neutral-grey-light'>
														{item.label}
													</TextStyle>
												</S.Item>
												{item.subMenu.map((sub) => (
													<S.SubItem
														key={sub.id}
														$active={sub.id === activeMenu}
														onClick={() => {
															if (type !== 'checkbox') {
																selectMenu(sub);
															} else {
																setCheckboxSelectLogList((prev) => {
																	if (prev.includes(sub.id)) {
																		return prev.filter((id) => id !== sub.id);
																	} else {
																		return [...prev, sub.id];
																	}
																});
															}
														}}
													>
														{type === 'checkbox' && (
															<Box style={{ minHeight: 'var(--line-height-22)' }}>
																<Checkbox $isChecked={isChecked} />
															</Box>
														)}
														<TextStyle variant='paragraphSmall'>{sub.label}</TextStyle>
													</S.SubItem>
												))}
												{index + 1 !== menuItems.length && <Divider m={0} />}
											</>
										) : (
											<>
												<S.SubItem
													$active={item.id === activeMenu || Number(item.label) === Number(activeMenu)}
													onClick={() => {
														if (type !== 'checkbox') {
															selectMenu(item);
														} else {
															setCheckboxSelectLogList((prev) => {
																if (prev.includes(item.id)) {
																	return prev.filter((id) => id !== item.id);
																} else {
																	return [...prev, item.id];
																}
															});
														}
													}}
												>
													{type === 'checkbox' && (
														<Box style={{ minHeight: 'var(--line-height-22)' }}>
															<Checkbox $isChecked={isChecked} />
														</Box>
													)}
													<TextStyle variant='paragraphSmall'>{item.label}</TextStyle>
												</S.SubItem>
												{index + 1 !== menuItems.length && <Divider m={0} />}
											</>
										)}

										{type === 'checkbox' && menuItems.length == index + 1 && (
											<Box
												key={item.id}
												direction='row'
												gap={10}
												p={'16px 16px 8px 16px'}
												$justifyContent='flex-end'
											>
												<Button
													fontWeight='--font-weight-regular'
													variant='secondary'
													onClick={() => {
														setCheckboxSelectLogList([]);
														setCheckboxList(null);
														setIsOpen(false);
														onSelect([]);
													}}
												>
													{t('dashboard_dropdown_btn_reset')}
												</Button>
												<Button
													fontWeight='--font-weight-regular'
													variant='primary'
													onClick={() => {
														const res = [...checkboxSelectLogList]
															.map((id) => menuItems.find((menuItem) => menuItem?.id === id)?.id)
															.filter(Boolean);
														setCheckboxList(res);
														setCheckboxSelectLogList([...checkboxSelectLogList]);
														setIsOpen(false);
													}}
												>
													{t('dashboard_dropdown_btn_filter')}
												</Button>
											</Box>
										)}
									</Box>
								);
							})}
						</>
					) : (
						<Box direction='column'>
							<Box>
								<S.Item>
									<TextStyle variant='paragraphSmall' color='--color-neutral-grey-lighter'>
										{t('dashboard_dropdown_empty_list')}
									</TextStyle>
								</S.Item>
							</Box>
						</Box>
					)}
				</Box>
			</Popover>
		</Box>
	);
};

InputDropdown.displayName = 'InputDropdown';

export default InputDropdown;
