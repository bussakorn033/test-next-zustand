import classNames from "classnames";
import {forwardRef} from "react";
import {Box} from "../Box";
import Icon from "../Icon/Icon";
import {TextStyle} from "../TextStyle";
import * as S from "./Table.styled";
import {TableProps} from "./Table.types";
import {Button} from "../Button";

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
  (
    {
      className,
      headers = [],
      rows = [],
      page = 1,
      limit = 1,
      count = 1,
      onPageChange,
      onLimitChange,
      ...rest
    }: TableProps,
    ref,
  ) => {
    const classnames = classNames(className, "ds-ui-table");

    const getSortIcon = (sortBy?: "asc" | "desc") => {
      if (sortBy === "asc") return "sort_ascending";
      if (sortBy === "desc") return "sort_descending";
      return "sorting";
    };

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
          {/* Scrollable area */}
          <Box direction="column">
            <Box direction="column" overflowX="auto">
              <Box>
                {/* Header */}
                <Box
                  direction="row"
                  bgColor="var(--color-table-header-dark)"
                  style={{position: "sticky", top: 0, zIndex: 10}}
                >
                  {headers.map((col, index) => (
                    <Box
                      key={index}
                      direction="row"
                      alignItems="center"
                      bgColor="var(--color-table-header-dark)"
                      borderWidth={1}
                      border="bottom"
                      p={8}
                      gap={4}
                      style={{
                        flex: col.flex ?? 1,
                        minWidth: col.minWidth ?? "100px",
                        maxWidth: "500px",
                      }}
                      onClick={() => {
                        const result = col.onClick?.({row: 1, col: index});
                        console.log("Header onClick:", {
                          row: 1,
                          col: index,
                          result,
                        });
                      }}
                    >
                      <TextStyle variant="labelSmallBold" color="color-primary">
                        {col.value}
                      </TextStyle>
                      {col.isSort && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            const result = col.onClick?.({row: 1, col: index});
                            console.log("Sort icon onClick:", {
                              row: 1,
                              col: index,
                              result,
                            });
                          }}
                          variant="ghost-primary-no-padding"
                          borderRadius="round"
                        >
                          <Icon
                            icon={getSortIcon(col.sortBy)}
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
                <Box direction="column">
                  {rows.map((item, rowIndex) => (
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
                            border="bottom"
                            px={8}
                            py={16}
                            style={{
                              flex: headers[colIndex]?.flex ?? 1,
                              minWidth: headers[colIndex]?.minWidth ?? "100px",
                              maxWidth: "500px",
                            }}
                          >
                            <TextStyle
                              variant="paragraphSmall"
                              color="color-primary"
                              textAlign="left"
                            >
                              {cell.value}
                            </TextStyle>
                          </Box>
                        );
                      })}
                    </Box>
                  ))}
                </Box>
                {/* Body */}
              </Box>
            </Box>
          </Box>
          {/* Scrollable area */}

          {/* Footer */}
          <Box
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={24}
            color="var(--color-table-border-dark)"
            p={8}
          >
            {/* Option */}
            <Box
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={8}
            >
              <TextStyle
                variant="paragraphXSmall"
                color="color-neutral-grey-light"
              >
                จำนวนแถว
              </TextStyle>
              <Box direction="row" alignItems="center" gap={8}>
                <TextStyle variant="labelSmallBold" color="color-primary">
                  {limit}
                </TextStyle>
                <Button
                  onClick={() => {
                    const newLimit = 100;
                    onLimitChange?.(newLimit);
                  }}
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
              </Box>
            </Box>

            {/* Page */}
            <Box
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={8}
            >
              <TextStyle
                variant="paragraphXSmall"
                color="color-neutral-grey-light"
              >
                {`${page * limit}-${page * limit + limit} จาก ${count}`}
              </TextStyle>
            </Box>

            {/* Navigation */}
            <Box
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={8}
            >
              <Button
                onClick={() => {
                  const newPage = page - 1;
                  if (newPage >= 1) {
                    onPageChange?.(newPage);
                  }
                }}
                variant="ghost-primary-no-padding"
                borderRadius="round"
                disabled={page <= 1}
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
                  if (newPage <= maxPage) {
                    onPageChange?.(newPage);
                  }
                }}
                variant="ghost-primary-no-padding"
                borderRadius="round"
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
        </Box>
      </S.Table>
    );
  },
);

Table.displayName = "Table";

export default Table;
