import classNames from 'classnames';
import { t } from 'i18next';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import Icon from '../Icon/Icon';
import { TextStyle } from '../TextStyle';
import * as S from './Table.styled';
import { TableProps } from './Table.types';
import { InputDropdown } from '../InputDropdown';

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
  (
    {
      className,
      headers = [],
      values = [],
      minHeightTable = 'unset',
      $maxHeightTable = 350,
      paginationOptions = [],
      page = 1,
      limit = 50,
      count = 1,
      onPageChange,
      onLimitChange,
      isPaginationDisabled = false,
      mode = 'dark',
      size = 'lg',
      ...rest
    }: TableProps,
    ref
  ) => {
    const classnames = classNames(className, 'ds-ui-table');

    const bodyRef = useRef<HTMLDivElement>(null);
    const [key, setKey] = useState<string | undefined>('');
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

    // Initial sort setup based on headers.sortBy
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

    return (
      <S.Table
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
            <Box direction='column' $overflowY='auto' $overflowX='hidden' $isFullWidth>
              {/* Header */}
              <Box direction='row' position='sticky' top={0} $zIndex={900}>
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
                    p={size === 'lg' ? '8px' : '2px'}
                    gap={4}
                    width={col?.width}
                    $minWidth={col?.$minWidth}
                    $maxWidth={col?.$maxWidth}
                    flex={col?.flex}
                  >
                    <TextStyle
                      variant={mode === 'dark' ? 'labelSmallBold' : 'labelXSmall'}
                      color={mode === 'dark' ? '--color-primary' : '--color-neutral-grey-light'}
                      $limitLine={1}
                      width={col?.isSort ? 'fit-content' : '100%'}
                      height='100%'
                      $alignContent={'center'}
                      $textAlign={col.alignHeader || 'left'}
                      $wordBreak='break-all'
                    >
                      {col?.value}
                    </TextStyle>
                    {col?.isSort && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();

                          if (!col?.isSort) return;

                          let nextDirection: 'asc' | 'desc' = 'asc';

                          if (sortColumnIndex === index) {
                            nextDirection = sortDirection === 'asc' ? 'desc' : 'asc';
                          }

                          setKey(col?.key);
                          setSortColumnIndex(index);
                          setSortDirection(nextDirection);

                          // Reset sortBy on all other columns
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
                      >
                        {/* <Icon
													icon={getSortIcon(sortColumnIndex === index ? sortDirection : undefined)}
													color={mode === 'dark' ? '--color-primary' : '--color-neutral-grey-light'}
													width={16}
													height={16}
												/> */}
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
              {/* Header */}

              {/* Body */}
              <Box display='inline-table' width='100%'>
                <Box direction='column' $maxHeight={$maxHeightTable} $isFullWidth ref={bodyRef}>
                  {!!values.length ? (
                    <Box direction='column'>
                      {values.map((item, rowIndex) => (
                        <Box key={rowIndex} direction='row' height='100%' m={0}>
                          {item.map((col, colIndex) => {
                            const cell = col || { value: '' };

                            return (
                              <Box
                                key={colIndex}
                                $borderWidth={1}
                                border={mode === 'dark' ? 'top' : 'bottom'}
                                $alignContent='center'
                                $justifyContent={cell.align}
                                p={size === 'lg' ? '16px 8px' : '2px'}
                                width={headers[colIndex]?.width}
                                $minWidth={headers[colIndex]?.$minWidth}
                                $maxWidth={headers[colIndex]?.$maxWidth}
                                flex={headers[colIndex]?.flex}
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
                                  {cell.value}
                                </TextStyle>
                              </Box>
                            );
                          })}
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <Box direction='row' $justifyContent='center' $isFullWidth>
                      <TextStyle
                        variant='paragraphSmallTable'
                        color='--color-primary'
                        $textAlign='center'
                      >
                        NotFound
                      </TextStyle>
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
              <Box direction='row' $alignItems='center' gap={8}>
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
                    variant='primary'
                    menuItems={paginationOptions}
                    activeMenu={limit.toString()}
                    onSelect={(item) => {
                      if (onLimitChange) {
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
                  {`${(page - 1) * limit + 1}-${Math.min(
                    page * limit,
                    count
                  )} ${t('dashboard_contract_table_footer_to')} ${count}`}
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
