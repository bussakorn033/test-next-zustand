import classNames from "classnames";
import {t} from "i18next";
import {forwardRef, useEffect, useRef, useState} from "react";
import {Box} from "../Box";
import {Button} from "../Button";
import Icon from "../Icon/Icon";
import {TextStyle} from "../TextStyle";
import * as S from "./Table.styled";
import {TableProps} from "./Table.types";

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
  (
    {
      className,
      headers = [],
      values = [],
      maxHeightTable = 400,
      optionPagination = [25, 50, 100],
      page = 1,
      limit = 1,
      count = 1,
      onPageChange,
      onLimitChange,
      isPaginationDisabled = false,
      mode = "dark",
      size = "lg",
      ...rest
    }: TableProps,
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-table");

    const bodyRef = useRef<HTMLDivElement>(null);
    const [key, setKey] = useState<string | undefined>("");
    const [sortColumnIndex, setSortColumnIndex] = useState<number>(-1);
    const [sortDirection, setSortDirection] = useState<
      "asc" | "desc" | "sorting" | undefined
    >(undefined);

    const getSortIcon = (sortBy?: "asc" | "desc" | "sorting" | undefined) => {
      if (sortBy === "asc") return "sort_ascending";
      if (sortBy === "desc") return "sort_descending";
      return "sorting";
    };

    const handleScrollTableToTop = () => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = 0;
      }
    };

    // Initial sort setup based on headers.sortBy
    useEffect(() => {
      if (!headers || headers.length === 0) return;

      const firstSortableIndex = headers.findIndex(
        (col) => col?.isSort && col?.sortBy,
      );

      if (firstSortableIndex !== -1) {
        const initialKey = headers[firstSortableIndex].key as string;
        const initialSortBy = headers[firstSortableIndex].sortBy as
          | "asc"
          | "desc"
          | "sorting"
          | undefined;

        setKey(initialKey);
        setSortColumnIndex(firstSortableIndex);
        setSortDirection(initialSortBy);

        headers[firstSortableIndex].onClick?.({
          key: initialKey,
          row: 0,
          col: firstSortableIndex,
          sortBy: initialSortBy,
          ...headers[firstSortableIndex],
        });
      }
      return () => {
        setKey("");
        setSortColumnIndex(-1);
        setSortDirection(undefined);
      };
    }, []);

    return (
      <S.Table className={classnames} {...rest}>
        <Box
          direction="column"
          color="--color-table-border-dark"
          bgColor="--color-neutral-light"
          borderColor={
            mode === "dark"
              ? "--color-table-border-dark"
              : "--color-table-border-light"
          }
          border="all"
          borderWidth={1}
          borderRadius={mode === "dark" ? "md" : "none"}
          overflow="hidden"
        >
          <Box direction="column">
            <Box
              direction="column"
              overflowY="hidden"
              overflowX="auto"
              fullWidth
              // ref={bodyRef}
            >
              {/* Header */}
              <Box
                direction="row"
                bgColor="--color-table-header-dark"
                position="sticky"
                top={0}
                zIndex={900}
              >
                {headers.map((col, index) => (
                  <Box
                    key={index}
                    direction="row"
                    alignItems="center"
                    alignContent="center"
                    bgColor={
                      mode === "dark"
                        ? "--color-table-header-dark"
                        : "--color-table-header-light"
                    }
                    border="bottom"
                    borderWidth={1}
                    p={size === "lg" ? "8px" : "2px"}
                    gap={4}
                    flex={col?.flex || 1}
                    minWidth={col?.minWidth || "100px"}
                    maxWidth={col?.maxWidth || undefined}
                  >
                    <TextStyle
                      variant="labelSmallBold"
                      color={
                        mode === "dark"
                          ? "--color-primary"
                          : "--color-neutral-grey-light"
                      }
                      limitLine={1}
                      width={col?.isSort ? "fit-content" : "100%"}
                      height="100%"
                      alignContent={"center"}
                      textAlign={col.alignHeader || "left"}
                      wordBreak="break-all"
                    >
                      {col?.value}
                    </TextStyle>
                    {col?.isSort && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();

                          if (!col?.isSort) return;

                          let nextDirection: "asc" | "desc" = "asc";

                          if (sortColumnIndex === index) {
                            console.log(
                              `---- sortColumnIndex:`,
                              sortColumnIndex,
                            );
                            nextDirection =
                              sortDirection === "asc" ? "desc" : "asc";
                          }

                          setKey(col?.key);
                          setSortColumnIndex(index);
                          setSortDirection(nextDirection);

                          // Reset sortBy on all other columns
                          headers.forEach((header, idx) => {
                            if (idx !== index && header.isSort) {
                              header.sortBy = "sorting";
                            }
                          });

                          col.sortBy = nextDirection;

                          col.onClick?.({
                            row: 0,
                            col: index,
                            sortBy: nextDirection,
                            ...col,
                          });
                          handleScrollTableToTop();
                        }}
                        variant="ghost-primary-no-padding"
                        borderRadius="round"
                      >
                        <Icon
                          icon={getSortIcon(
                            sortColumnIndex === index
                              ? sortDirection
                              : undefined,
                          )}
                          color={
                            mode === "dark"
                              ? "--color-primary"
                              : "--color-neutral-grey-light"
                          }
                          width={16}
                          height={16}
                        />
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
              {/* Header */}

              {/* Body */}
              <Box display="inline-table" tag="table" width="100%">
                <Box
                  direction="column"
                  maxHeight={maxHeightTable}
                  fullWidth
                  overflowY="auto"
                  overflowX="hidden"
                  ref={bodyRef}
                >
                  {!!values.length ? (
                    <Box direction="column" fullWidth>
                      {values.map((item, rowIndex) => (
                        <Box key={rowIndex} direction="row" height="100%" m={0}>
                          {item.map((col, colIndex) => {
                            const cell = col || {value: ""};
                            return (
                              <Box
                                key={colIndex}
                                role={col?.onClick ? "button" : "div"}
                                borderWidth={1}
                                border={mode === "dark" ? "top" : "bottom"}
                                alignContent="center"
                                p={size === "lg" ? "16px 8px" : "2px"}
                                flex={headers[colIndex]?.flex || 1}
                                minWidth={
                                  headers[colIndex]?.minWidth || "100px"
                                }
                                maxWidth={
                                  headers[colIndex]?.maxWidth || undefined
                                }
                                fullWidth
                              >
                                <TextStyle
                                  variant="paragraphSmall"
                                  color="--color-primary"
                                  textAlign={cell.align}
                                  limitLine={1}
                                  height="100%"
                                  alignContent="center"
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
                    <Box direction="row" justifyContent="center" fullWidth>
                      <TextStyle
                        variant="paragraphSmall"
                        color="--color-primary"
                        textAlign="center"
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
              direction="row"
              alignItems="center"
              justifyContent="end"
              borderWidth={1}
              border="top"
              gap={24}
              color="--color-table-border-dark"
              p={8}
            >
              {/* Limit Selector */}
              <Box direction="row" alignItems="center" gap={8}>
                <TextStyle
                  variant="paragraphXSmall"
                  color="--color-neutral-grey-light"
                  alignContent="center"
                >
                  {t("dashboard_contract_table_footer_limit")}
                </TextStyle>
                <Box direction="row" alignItems="center" gap={8}>
                  <TextStyle
                    variant="labelSmallBold"
                    color="--color-primary"
                    alignContent="center"
                  >
                    {limit}
                  </TextStyle>
                  <Button
                    onClick={() => {
                      handleScrollTableToTop();
                    }}
                    variant="ghost-primary-no-padding"
                    borderRadius="round"
                  >
                    <Icon
                      icon="arrow_down"
                      width={16}
                      height={16}
                      color="--color-primary"
                    />
                  </Button>
                  <Box
                    direction="row"
                    alignItems="center"
                    gap={8}
                    borderWidth={1}
                    borderRadius="xl"
                  >
                    <Box
                      direction="column"
                      alignItems="center"
                      gap={8}
                      borderWidth={1}
                      border="bottom"
                      borderRadius="xl"
                    >
                      {[...optionPagination].map(
                        (option) =>
                          option !== limit && (
                            <Box
                              key={option}
                              role="button"
                              onClick={() => {
                                if (limit !== option) {
                                  onLimitChange?.(option);
                                  handleScrollTableToTop();
                                }
                              }}
                              borderRadius="round"
                            >
                              <TextStyle
                                variant="labelSmallBold"
                                color="--color-primary"
                              >
                                {option}
                              </TextStyle>
                            </Box>
                          ),
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Page Info */}
              <Box direction="row" alignItems="center" gap={8}>
                <TextStyle
                  variant="paragraphXSmall"
                  color="--color-neutral-grey-light"
                  alignContent="center"
                >
                  {`${(page - 1) * limit + 1}-${Math.min(
                    page * limit,
                    count,
                  )} ${t("dashboard_contract_table_footer_to")} ${count}`}
                </TextStyle>
              </Box>

              {/* Pagination Buttons */}
              <Box direction="row" alignItems="center" gap={8}>
                <Button
                  onClick={() => {
                    const newPage = page - 1;
                    if (!isPaginationDisabled && newPage >= 1) {
                      onPageChange?.(newPage);
                    }
                    handleScrollTableToTop();
                  }}
                  variant="ghost-primary-no-padding"
                  borderRadius="round"
                  disabled={page <= 1 || isPaginationDisabled}
                >
                  <Icon
                    icon="arrow_left"
                    width={24}
                    height={24}
                    color="--color-primary"
                  />
                </Button>

                <Button
                  onClick={() => {
                    const maxPage = Math.ceil(count / limit);
                    const newPage = page + 1;
                    if (!isPaginationDisabled && newPage <= maxPage) {
                      onPageChange?.(newPage);
                    }
                    handleScrollTableToTop();
                  }}
                  variant="ghost-primary-no-padding"
                  borderRadius="round"
                  disabled={
                    page >= Math.ceil(count / limit) || isPaginationDisabled
                  }
                >
                  <Icon
                    icon="arrow_right"
                    width={24}
                    height={24}
                    color="--color-primary"
                  />
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </S.Table>
    );
  },
);

Table.displayName = "Table";

export default Table;
