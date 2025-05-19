import classNames from "classnames";
import {t} from "i18next";
import {forwardRef, useEffect, useState} from "react";
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
      page = 1,
      limit = 1,
      count = 1,
      onPageChange,
      onLimitChange,
      isPaginationDisabled = false,
      ...rest
    }: TableProps,
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-table");

    const [sortColumnIndex, setSortColumnIndex] = useState<number>(-1);
    const [sortDirection, setSortDirection] = useState<
      "asc" | "desc" | "sorting" | undefined
    >(undefined);
    const [sortKey, setSortKey] = useState<string>("");

    const getSortIcon = (sortBy?: "asc" | "desc" | "sorting" | undefined) => {
      if (sortBy === "asc") return "sort_ascending";
      if (sortBy === "desc") return "sort_descending";
      return "sorting";
    };

    // Initial sort setup based on headers.sortBy
    useEffect(() => {
      if (!headers || headers.length === 0) return;

      const firstSortableIndex = headers.findIndex(
        (col) => col.isSort && col.sortBy,
      );

      if (firstSortableIndex !== -1) {
        const initialSortBy = headers[firstSortableIndex].sortBy as
          | "asc"
          | "desc";
        const initialSortKey = headers[firstSortableIndex].key as string;
        console.log("initialSortKey", initialSortKey);
        setSortColumnIndex(firstSortableIndex);
        setSortDirection(initialSortBy);
        setSortKey(initialSortKey);

        headers[firstSortableIndex].onClick?.({
          row: 1,
          col: firstSortableIndex,
          sortBy: initialSortBy,
        });
      }
    }, [headers]);

    return (
      <S.Table className={classnames} {...rest}>
        <Box
          direction="column"
          color="var(--color-table-border-dark)"
          bgColor="var(--color-neutral-light)"
          border="all"
          borderWidth={1}
          borderRadius="md"
          overflow="hidden"
        >
          <Box direction="column">
            <Box
              direction="column"
              overflowY="hidden"
              overflowX="auto"
              fullWidth
            >
              {/* Header */}
              <Box
                direction="row"
                bgColor="var(--color-table-header-dark)"
                style={{position: "sticky", top: 0, zIndex: 900}}
              >
                {headers.map((col, index) => (
                  <Box
                    key={index}
                    direction="row"
                    alignItems="center"
                    bgColor="var(--color-table-header-dark)"
                    border="bottom"
                    p={8}
                    gap={4}
                    style={{
                      flex: col.flex ?? 1,
                      minWidth: col.minWidth ?? "100px",
                      maxWidth: col.maxWidth ?? undefined,
                    }}
                  >
                    <TextStyle
                      variant="labelSmallBold"
                      color="color-primary"
                      limitLine={5}
                      style={{width: col.isSort ? "fit-content" : "100%"}}
                    >
                      {col.value}
                      <br />
                      sortColumnIndex:{sortColumnIndex}
                      <br />
                      sortDirection:{sortDirection}
                      <br />
                      col.isSort:{`${col.isSort}`}
                    </TextStyle>
                    {col.isSort && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();

                          if (!col.isSort) return;

                          let nextDirection: "asc" | "desc" = "asc";

                          if (sortColumnIndex === index) {
                            console.log(
                              `---- sortColumnIndex:`,
                              sortColumnIndex,
                            );
                            nextDirection =
                              sortDirection === "asc" ? "desc" : "asc";
                          }
                          console.log(`---- nextDirection:`, nextDirection);
                          console.log(`---- col.sortBy:`, col.sortBy);

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
                            row: 1,
                            col: index,
                            sortBy: nextDirection,
                          });
                        }}
                        variant="ghost-primary-no-padding"
                        borderRadius="round"
                      >
                        <Icon
                          icon={
                            sortColumnIndex === index
                              ? getSortIcon(sortDirection)
                              : getSortIcon(col.sortBy)
                          }
                          width={16}
                          height={16}
                        />
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Body */}
              <table style={{width: "100%", display: "table"}}>
                <Box
                  direction="column"
                  maxHeight={maxHeightTable}
                  fullWidth
                  overflowY="auto"
                  overflowX="hidden"
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
                                onClick={() => {
                                  const result = col.onClick?.({
                                    row: rowIndex,
                                    col: colIndex,
                                  });
                                  console.log("Cell onClick:", {
                                    row: rowIndex,
                                    col: colIndex,
                                    result,
                                  });
                                }}
                                role={col.onClick ? "button" : "div"}
                                borderWidth={1}
                                border="top"
                                px={8}
                                py={16}
                                style={{
                                  flex: headers[colIndex]?.flex ?? 1,
                                  minWidth:
                                    headers[colIndex]?.minWidth ?? "100px",
                                  maxWidth:
                                    headers[colIndex]?.maxWidth ?? undefined,
                                }}
                                fullWidth
                              >
                                <TextStyle
                                  variant="paragraphSmall"
                                  color="color-primary"
                                  textAlign="left"
                                  limitLine={1}
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
                        color="color-primary"
                        textAlign="center"
                      >
                        NotFound
                      </TextStyle>
                    </Box>
                  )}
                </Box>
              </table>
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
              color="var(--color-table-border-dark)"
              p={8}
            >
              {/* Limit Selector */}
              <Box direction="row" alignItems="center" gap={8}>
                <TextStyle
                  variant="paragraphXSmall"
                  color="color-neutral-grey-light"
                >
                  {t("dashboard_contract_table_footer_limit")}
                </TextStyle>
                <Box direction="row" alignItems="center" gap={8}>
                  <TextStyle variant="labelSmallBold" color="color-primary">
                    {limit}
                  </TextStyle>
                  <Button
                    onClick={() => {}}
                    variant="ghost-primary-no-padding"
                    borderRadius="round"
                  >
                    <Icon
                      icon="arrow_down"
                      width={16}
                      height={16}
                      color="var(--color-primary)"
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
                      {[10, 25, 50, 100].map(
                        (option) =>
                          option !== limit && (
                            <Box
                              key={option}
                              role="button"
                              onClick={() => {
                                if (limit !== option) {
                                  onLimitChange?.(option);
                                }
                              }}
                              borderRadius="round"
                            >
                              <TextStyle
                                variant="labelSmallBold"
                                color="color-primary"
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
                  color="color-neutral-grey-light"
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
                  }}
                  variant="ghost-primary-no-padding"
                  borderRadius="round"
                  disabled={page <= 1 || isPaginationDisabled}
                >
                  <Icon
                    icon="arrow_left"
                    width={24}
                    height={24}
                    color="var(--color-primary)"
                  />
                </Button>

                <Button
                  onClick={() => {
                    const maxPage = Math.ceil(count / limit);
                    const newPage = page + 1;
                    if (!isPaginationDisabled && newPage <= maxPage) {
                      onPageChange?.(newPage);
                    }
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
                    color="var(--color-primary)"
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
