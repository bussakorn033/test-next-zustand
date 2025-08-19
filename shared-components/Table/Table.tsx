import { forwardRef, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { isValueEmpty, measureTextWidth, debounce } from '@/utils/Utility';
import ErrorDisplay from '../../components/ErrorDisplay';
import { Box } from '../Box';
import { Button } from '../Button';
import { InputDropdown } from '../InputDropdown';
import { Skeleton } from '../Skeleton';
import { TextStyle } from '../TextStyle';
import { Tooltip } from '../Tooltip';
import * as S from './Table.styled';
import { TableProps } from './Table.types';

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
	({
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
		moduleName = 'Dashboard',
		...rest
	}: TableProps) => {
		const classnames = classNames(className, 'ds-ui-table');
		const { t } = useTranslation();
		const tableRef = useRef<HTMLDivElement | null>(null);
		const bodyRef = useRef<HTMLDivElement | null>(null);
		const colHeaderRef = useRef<(HTMLDivElement | null)[]>([]);
		const colBodyRef = useRef<(HTMLDivElement | null)[]>([]);
		const colBodyTextRef = useRef<(HTMLDivElement | null)[]>([]);
		const [isTableLoad, setIsTableLoad] = useState(true);
		const [isUpdateTimeTable, setIsUpdateTimeTable] = useState(new Date().getTime());
		const prevHeadersLength = useRef(headers.length);
		const prevValuesLength = useRef(values.length);

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

		const handleUpdateTable = () => {
			const now = new Date().getTime();
			setIsUpdateTimeTable(now);
		};

		/* Initial sort setup based on headers.sortBy */
		useEffect(() => {
			if (!headers || headers.length === 0) return;

			const firstSortableIndex = headers.findIndex((col) => col?.isSort && col?.sortBy);

			if (firstSortableIndex !== -1) {
				const initialSortBy = headers[firstSortableIndex].sortBy as
					| 'asc'
					| 'desc'
					| 'sorting'
					| undefined;

				setSortColumnIndex(firstSortableIndex);
				setSortDirection(initialSortBy);
			}
			return () => {
				setSortColumnIndex(-1);
				setSortDirection(undefined);
			};
		}, [headers]);

		useEffect(() => {
			handleUpdateTable();
		}, [values, headers, isTableLoading]);

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

		useEffect(() => {
			try {
				if (typeof window === 'undefined') return;

				let lastZoom = window.devicePixelRatio;

				const handleViewportChange = debounce(() => {
					setIsTableLoad((prev) => !prev);
				}, 150);

				const checkZoom = () => {
					if (window.devicePixelRatio !== lastZoom) {
						lastZoom = window.devicePixelRatio;
						handleViewportChange();
					}
				};

				const onResize = () => {
					handleViewportChange();
					checkZoom();
				};

				window.addEventListener('resize', onResize);
				const zoomInterval = setInterval(checkZoom, 200);

				return () => {
					handleViewportChange.cancel();
					window.removeEventListener('resize', onResize);

					colHeaderRef.current = [];
					colBodyRef.current = [];
					colBodyTextRef.current = [];
					setIsTableLoad(true);
					clearInterval(zoomInterval);
				};
			} catch (error) {
				console.log(`error:`, error);
			}
		}, []);

		useEffect(() => {
			const shouldUpdateTable =
				(headers.length > 0 || values.length > 0) &&
				(headers.length !== prevHeadersLength.current || values.length !== prevValuesLength.current);

			if (shouldUpdateTable) {
				setIsTableLoad((prev) => !prev);

				prevHeadersLength.current = headers.length;
				prevValuesLength.current = values.length;
			}
		}, [isUpdateTimeTable, values.length, headers.length]);

		return (
			<S.Table
				key={`table-${className}-${isTableLoading}-${isTableLoad}`} /* NOTE: Force re-render when isTableLoading changes */
				ref={tableRef}
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
						<Box direction='column' $overflowY='auto' $overflowX='hidden'>
							{/* Header */}
							<Box
								data-testid={'TABLE_HEADER'}
								className={mode !== 'dark' && isScroll ? 'scrollShadow' : undefined}
								direction='row'
								position='sticky'
								top={0}
								$zIndex={900}
							>
								{headers.map((col, index) => (
									<Box
										data-testid={`TABLE_HEADER_INSIDE`}
										key={`${className}-headers-${index}`}
										ref={(el) => {
											colHeaderRef.current[index] = el as HTMLDivElement | null;
										}}
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
												const metrics = measureTextWidth(
													String(col?.value || ''),
													`${mode === 'dark' ? '20' : '12'}px 'Ekachon', system-ui, sans-serif, 'Segoe UI', Tahoma, Verdana`
												);
												return (
													<>
														<Tooltip
															content={
																colHeaderRef.current[index]?.offsetWidth &&
																(metrics as number) >
																	Number(colHeaderRef.current[index]?.offsetWidth ?? 0)
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
												data-testid={`ICON_SORT${col.sortBy || 'SORTING'}`.toLocaleUpperCase()}
												onClick={(e) => {
													e.stopPropagation();

													if (!col?.isSort) return;

													let nextDirection: 'asc' | 'desc' = 'desc';

													if (sortColumnIndex === index) {
														nextDirection = sortDirection === 'asc' ? 'desc' : 'asc';
													}

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
							<Box data-testid={`TABLE_BODY`} display='inline-table' width='100%'>
								<Box
									direction='column'
									$minHeight={$minHeightTable}
									$maxHeight={$maxHeightTable}
									$isFullWidth
									ref={bodyRef}
								>
									{values.length ? (
										<Box data-testid={`TABLE_BODY_INSIDE`} direction='column'>
											{values.map((item, rowIndex) => (
												<Box key={`${className}-values-${rowIndex}`} direction='row' height='100%' m={0}>
													{item.map((col, colIndex) => {
														const cell = col || { value: '' };

														return (
															<Box
																key={`${className}-item-${colIndex}`}
																ref={(el) => {
																	colBodyRef.current[colIndex] = el as HTMLDivElement | null;
																}}
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
																$borderWidth={1}
																border={mode === 'dark' ? 'top' : 'bottom'}
																$alignContent='center'
																$justifyContent={cell.align}
																p={
																	isTableLoading
																		? size === 'lg'
																			? colIndex === 0
																				? '8px 8px 8px 16px'
																				: headers.length === colIndex + 1
																					? '8px 16px 8px 8px'
																					: '8px'
																			: '8px'
																		: '0px'
																}
																width={headers[colIndex]?.width}
																$minWidth={headers[colIndex]?.$minWidth}
																$maxWidth={headers[colIndex]?.$maxWidth}
																flex={headers[colIndex]?.flex}
																$isHover={Boolean(cell?.onClick !== undefined)}
																$boxSizing='border-box'
															>
																{isTableLoading ? (
																	<Skeleton />
																) : (
																	<Box position='relative' $boxSizing='border-box'>
																		{(() => {
																			const metrics = measureTextWidth(
																				String(cell?.value || ''),
																				"14px 'Ekachon', system-ui, sans-serif, 'Segoe UI', Tahoma, Verdana",
																				17
																			);
																			return (
																				<>
																					<Box
																						ref={(el) => {
																							colBodyTextRef.current[colIndex] =
																								el as HTMLDivElement | null;
																						}}
																						$boxSizing='border-box'
																						p={
																							size === 'lg'
																								? colIndex === 0
																									? '8px 8px 8px 16px'
																									: headers.length === colIndex + 1
																										? '8px 16px 8px 8px'
																										: '8px'
																								: '8px'
																						}
																					>
																						<Tooltip
																							position={
																								rowIndex + 1 === values.length ? 'top' : 'bottom'
																							}
																							content={
																								Number(colBodyRef.current[colIndex]?.offsetWidth) >=
																									Number(
																										colBodyTextRef.current[colIndex]?.offsetWidth
																									) &&
																								(metrics as number) >
																									Number(colBodyRef.current[colIndex]?.offsetWidth ?? 0)
																									? col?.value
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
																								$wordBreak='break-all'
																							>
																								{cell?.value}
																							</TextStyle>
																						</Tooltip>
																					</Box>
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
											{isTableError === true ? (
												<ErrorDisplay onRefresh={onRefresh} moduleName={moduleName} />
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
							data-testid={`TABLE_PAGINATION_FOOTER`}
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
										isValueEmpty(count)
											? 0
											: `${(page - 1) * limit + 1}-${Math.min(page * limit, count)}`
									} ${t('dashboard_contract_table_footer_to')} ${count || 0}`}
								</TextStyle>
							</Box>

							{/* Pagination Buttons */}
							<Box direction='row' $alignItems='center' gap={8}>
								<Button
									data-testid={`ICON_PAGINATION_ARROW_LEFT`}
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
									data-testid={`ICON_PAGINATION_ARROW_RIGHT`}
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
