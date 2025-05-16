import classNames from "classnames";
import {t} from "i18next";
import {forwardRef} from "react";
import {Box} from "../Box";
import {Button} from "../Button";
import Icon from "../Icon/Icon";
import {TextStyle} from "../TextStyle";
import * as S from "./Table.styled";
import {TableProps} from "./Table.types";
import {random} from "../../node_modules/nanoid/index.d";

export const Table = forwardRef<HTMLElement | undefined, TableProps>(
  (
    {
      className,
      headers = [],
      values = [],
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
            <Box
              direction="column"
              // overflowY="hidden"
              // overflowX="auto"
              overflow="auto"
              minHeight={300}
              maxHeight={500}
              fullWidth
            >
              {/* Header */}
              <Box
                direction="row"
                bgColor="var(--color-table-header-dark)"
                style={{position: "sticky", top: 0, zIndex: 100}}
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
                      maxWidth: col.maxWidth ?? undefined,
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
                    <TextStyle
                      variant="labelSmallBold"
                      color="color-primary"
                      limitLine={1}
                      style={{width: col.isSort ? "fit-content" : "100%"}}
                    >
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
              <Box
                direction="column"
                // justifyContent="center"
                // alignItems="center"
                // overflowY="auto"
                // overflowX="hidden"
                // minHeight={500}
                // maxHeight={500}
                minHeight={300}
                maxHeight={500}
                fullWidth
              >
                {!!values.length && values.length !== 0 ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Box
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      // overflowX="auto"
                      fullWidth
                    >
                      <TextStyle
                        variant="paragraphSmall"
                        color="color-primary"
                        textAlign="center"

                        // style={{padding:}}
                      >
                        NotFound
                      </TextStyle>
                    </Box>
                  </>
                )}
              </Box>
              {/* Body */}
            </Box>
          </Box>
          {/* Scrollable area */}

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
                      {[10, 25, 50, 100].map((option) => (
                        <>
                          {option !== limit && (
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
                          )}
                        </>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Page Info */}
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
                  {`${(page - 1) * limit + 1}-${Math.min(
                    page * limit,
                    count,
                  )} ${t("dashboard_contract_table_footer_to")} ${count}`}
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
