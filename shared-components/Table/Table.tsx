import { measureTextWidth } from '@/utils/Utility';
import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { InputDropdown } from '../InputDropdown';
import { Skeleton } from '../Skeleton';
import { TextStyle } from '../TextStyle';
import { Tooltip } from '../Tooltip';
import * as S from './Table.styled';
import { TableProps } from './Table.types';

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
	(
		{
			className,
			headers = [],
			values = [],
			$minHeightTable = 'unset',
			$maxHeightTable = 350,
			paginationOptions = [],
			page = 1,
			limit = 50,
			count = 1,
			onPageChange,
			onLimitChange,
			onRefresh = () => null,
			isPaginationDisabled = false,
			mode = 'dark',
			size = 'lg',
			childrenNotFound,
			isTableError = false,
			isTableLoading = false,
			...rest
		}: TableProps,
		ref
	) => {
		const classnames = classNames(className, 'ds-ui-table');
		const { t } = useTranslation();
		// const navigate = useNavigate();
		const bodyRef = useRef<HTMLDivElement>(null);
		const [key, setKey] = useState<string | undefined>('');
		const [isScroll, setIsScroll] = useState<number>(0);
		const [sortColumnIndex, setSortColumnIndex] = useState<number>(-1);
		const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'sorting' | undefined>(
			undefined
		);

		const getSortIcon = (sortBy?: 'asc' | 'desc' | 'sorting' | undefined) => {
			if (sortBy === 'asc') return 'sort_ascending';
			if (sortBy === 'desc') return 'sort_descending';
			return 'sorting';
		};

		const handleScrollTableToTop = () => {
			if (bodyRef.current) {
				bodyRef.current.scrollTop = 0;
			}
		};

		/* Initial sort setup based on headers.sortBy */
		useEffect(() => {
			if (!headers || headers.length === 0) return;

			const firstSortableIndex = headers.findIndex((col) => col?.isSort && col?.sortBy);

			if (firstSortableIndex !== -1) {
				const initialKey = headers[firstSortableIndex].key as string;
				const initialSortBy = headers[firstSortableIndex].sortBy as
					| 'asc'
					| 'desc'
					| 'sorting'
					| undefined;

				setKey(initialKey);
				setSortColumnIndex(firstSortableIndex);
				setSortDirection(initialSortBy);

				headers[firstSortableIndex].onClick?.({
					key: initialKey,
					row: 0,
					col: firstSortableIndex,
					sortBy: initialSortBy,
					...headers[firstSortableIndex]
				});
			}
			return () => {
				setKey('');
				setSortColumnIndex(-1);
				setSortDirection(undefined);
			};
		}, []);

		useEffect(() => {
			const checkScroll = () => {
				if (bodyRef.current) {
					const { scrollTop } = bodyRef.current;
					setIsScroll(scrollTop);
				}
			};

			checkScroll();

			const handleScroll = () => {
				checkScroll();
			};

			const el = bodyRef.current;
			if (el) {
				el.addEventListener('scroll', handleScroll);
			}

			const observer = new ResizeObserver(() => {
				checkScroll();
			});
			if (bodyRef.current) {
				observer.observe(bodyRef.current);
			}

			return () => {
				if (el) {
					el.removeEventListener('scroll', handleScroll);
				}
				if (bodyRef.current) {
					observer.unobserve(bodyRef.current);
				}
			};
		}, [bodyRef]);

		return (
			<S.Table
				key={`table-${isTableLoading}`} /* NOTE: Force re-render when isTableLoading changes */
				className={classnames}
				width={'100%'}
				$minWidth={'100%'}
				flex={1}
				direction='column'
				{...rest}
			>
				<Box
					direction='column'
					color='--color-table-border-dark'
					$bgColor='--color-neutral-light'
					$borderColor={mode === 'dark' ? '--color-table-border-dark' : '--color-table-border-light'}
					border='all'
					$borderWidth={1}
					$borderRadius={mode === 'dark' ? 'md' : 'none'}
					overflow='hidden'
				>
					<Box direction='column'>
						<Box direction='column'>
							{/* Header */}
							<Box
								className={mode !== 'dark' && isScroll ? 'scrollShadow' : undefined}
								direction='row'
								position='sticky'
								top={0}
								$zIndex={900}
							>
								{headers.map((col, index) => (
									<Box
										key={index}
										direction='row'
										$alignItems='center'
										$alignContent='center'
										$bgColor={
											mode === 'dark' ? '--color-table-header-dark' : '--color-table-header-light'
										}
										border='bottom'
										$borderWidth={mode === 'dark' ? 1 : 0}
										p={
											size === 'lg'
												? index === 0
													? '8px 8px 8px 16px'
													: headers.length === index + 1
														? '8px 16px 8px 8px'
														: '8px'
												: '8px'
										}
										gap={4}
										width={col?.width}
										$minWidth={col?.$minWidth}
										$maxWidth={col?.$maxWidth}
										flex={col?.flex}
										$boxSizing='border-box'
									>
										<Box position='relative' width={col?.isSort ? 'fit-content' : '100%'}>
											{(() => {
												const metrics = measureTextWidth(col.value as string);
												return (
													<>
														<Tooltip
															content={
																col?.width &&
																(metrics as number) > Number(String(col?.width.replace('px', '')))
																	? col?.value
																	: ''
															}
														>
															<TextStyle
																variant={mode === 'dark' ? 'labelSmallBold' : 'labelXSmall'}
																color={
																	mode === 'dark' ? '--color-primary' : '--color-neutral-grey-light'
																}
																$limitLine={1}
																height='100%'
																$alignContent={'center'}
																$textAlign={col.alignHeader || 'left'}
																$wordBreak='break-all'
															>
																{col?.value}
															</TextStyle>
														</Tooltip>
													</>
												);
											})()}
										</Box>

										{col?.isSort && (
											<Button
												onClick={(e) => {
													e.stopPropagation();

													if (!col?.isSort) return;

													let nextDirection: 'asc' | 'desc' = 'desc';

													if (sortColumnIndex === index) {
														nextDirection = sortDirection === 'asc' ? 'desc' : 'asc';
													}

													setKey(col?.key);
													setSortColumnIndex(index);
													setSortDirection(nextDirection);

													/* Reset sortBy on all other columns */
													headers.forEach((header, idx) => {
														if (idx !== index && header.isSort) {
															header.sortBy = 'sorting';
														}
													});

													col.sortBy = nextDirection;

													col.onClick?.({
														row: 0,
														col: index,
														sortBy: nextDirection,
														...col
													});
													handleScrollTableToTop();
												}}
												variant='ghost-main-no-padding'
												$borderRadius='round'
												iconLeft={getSortIcon(sortColumnIndex === index ? sortDirection : undefined)}
												colorIcon={mode === 'dark' ? '--color-primary' : '--color-neutral-grey-light'}
												sizeIcon={16}
											/>
										)}
									</Box>
								))}
							</Box>
							{/* Header */}

							{/* Body */}
							<Box display='inline-table' width='100%'>
								<Box
									direction='column'
									$minHeight={$minHeightTable}
									$maxHeight={$maxHeightTable}
									$isFullWidth
									$overflowY='auto'
									$overflowX='hidden'
									ref={bodyRef}
								>
									{!!values.length ? (
										<Box direction='column'>
											{values.map((item, rowIndex) => (
												<Box key={rowIndex} direction='row' height='100%' m={0}>
													{item.map((col, colIndex) => {
														const cell = col || { value: '' };

														return (
															<Box
																$isHover={!!cell?.onClick}
																onClick={() => {
																	if (cell?.onClick) {
																		cell.onClick({
																			row: rowIndex,
																			col: colIndex,
																			key: cell.key,
																			...cell
																		});
																	}
																}}
																key={colIndex}
																$borderWidth={1}
																border={mode === 'dark' ? 'top' : 'bottom'}
																$alignContent='center'
																$justifyContent={cell.align}
																p={
																	size === 'lg'
																		? colIndex === 0
																			? '8px 8px 8px 16px'
																			: headers.length === colIndex + 1
																				? '8px 16px 8px 8px'
																				: '8px'
																		: '8px'
																}
																width={headers[colIndex]?.width}
																$minWidth={headers[colIndex]?.$minWidth}
																$maxWidth={headers[colIndex]?.$maxWidth}
																flex={headers[colIndex]?.flex}
																$boxSizing='border-box'
															>
																{isTableLoading ? (
																	<Skeleton />
																) : (
																	<Box position='relative'>
																		{(() => {
																			const metrics = measureTextWidth(cell.value as string);
																			return (
																				<>
																					<Tooltip
																						content={
																							cell?.width &&
																							(metrics as number) >
																								Number(String(cell?.width.replace('px', '')))
																								? cell?.value
																								: ''
																						}
																					>
																						<TextStyle
																							variant='paragraphSmallTable'
																							color='--color-primary'
																							$textAlign={cell.align || 'left'}
																							$limitLine={1}
																							height='100%'
																							$alignContent='center'
																							$justifyContent={cell.align}
																							$alignItems={cell.align}
																						>
																							{cell?.value}
																						</TextStyle>
																					</Tooltip>
																				</>
																			);
																		})()}
																	</Box>
																)}
															</Box>
														);
													})}
												</Box>
											))}
										</Box>
									) : (
										<Box
											direction='row'
											$justifyContent='center'
											$alignItems='center'
											$isFullWidth
											$minHeight={294}
										>
											{isTableError == true ? (
												<Box direction='column' gap={16} $alignItems='center'>
													<Icon
														icon={'alert_circle'}
														color={`--color-toast-error`}
														width={45}
														height={45}
													/>
													<Box direction='column' gap={8} $alignItems='center'>
														<TextStyle variant='h5' color='--color-primary' $textAlign='center'>
															{t('dashboard_contract_table_title_error')}
														</TextStyle>
														<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
															{t('dashboard_contract_table_sub_title_error')}
														</TextStyle>
													</Box>
													{typeof onRefresh === 'function' && (
														<Button variant='ghost-primary' onClick={() => onRefresh()}>
															{t('dashboard_contract_table_action_error')}
														</Button>
													)}
												</Box>
											) : (
												<Box direction='column' gap={16} $alignItems='center'>
													{childrenNotFound}
												</Box>
											)}
										</Box>
									)}
								</Box>
							</Box>
							{/* Body */}
						</Box>
					</Box>

					{/* Footer */}
					{!isPaginationDisabled && (
						<Box
							direction='row'
							$alignItems='center'
							$justifyContent='end'
							$borderWidth={1}
							border='top'
							gap={24}
							color='--color-table-border-dark'
							p={8}
						>
							{/* Limit Selector */}
							<Box direction='row' $alignItems='center'>
								<TextStyle
									variant='paragraphXSmall'
									color='--color-neutral-grey-light'
									$alignContent='center'
								>
									{t('dashboard_contract_table_footer_limit')}
								</TextStyle>
								<Box direction='row' $alignItems='center' gap={8}>
									<InputDropdown
										label={
											<TextStyle variant='labelSmallBold' color='--color-primary'>
												{limit}
											</TextStyle>
										}
										width={55}
										variant='primary'
										menuItems={paginationOptions}
										activeMenu={limit.toString()}
										onSelect={(item) => {
											if (onLimitChange && typeof item === 'object' && 'label' in item) {
												onLimitChange(Number(item.label));
											}
											handleScrollTableToTop();
										}}
										$minWidth={55}
									/>
								</Box>
							</Box>

							{/* Page Info */}
							<Box direction='row' $alignItems='center' gap={8}>
								<TextStyle
									variant='paragraphXSmall'
									color='--color-neutral-grey-light'
									$alignContent='center'
								>
									{`${
										count === 0 ? 0 : `${(page - 1) * limit + 1}-${Math.min(page * limit, count)}`
									} ${t('dashboard_contract_table_footer_to')} ${count}`}
								</TextStyle>
							</Box>

							{/* Pagination Buttons */}
							<Box direction='row' $alignItems='center' gap={8}>
								<Button
									onClick={() => {
										const newPage = page - 1;
										if (!isPaginationDisabled && newPage >= 1) {
											onPageChange?.(newPage);
										}
										handleScrollTableToTop();
									}}
									variant='ghost-main-no-padding'
									$borderRadius='round'
									iconLeft={'arrow_left'}
									colorIcon={
										page <= 1 || isPaginationDisabled
											? '--color-neutral-grey-lighter'
											: '--color-primary'
									}
									disabled={page <= 1 || isPaginationDisabled}
								/>

								<Button
									onClick={() => {
										const maxPage = Math.ceil(count / limit);
										const newPage = page + 1;
										if (!isPaginationDisabled && newPage <= maxPage) {
											onPageChange?.(newPage);
										}
										handleScrollTableToTop();
									}}
									variant='ghost-main-no-padding'
									$borderRadius='round'
									iconLeft={'arrow_right'}
									colorIcon={
										page >= Math.ceil(count / limit) || isPaginationDisabled
											? '--color-neutral-grey-lighter'
											: '--color-primary'
									}
									disabled={page >= Math.ceil(count / limit) || isPaginationDisabled}
								/>
							</Box>
						</Box>
					)}
				</Box>
			</S.Table>
		);
	}
);

Table.displayName = 'Table';

export default Table;
