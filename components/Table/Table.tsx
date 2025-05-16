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
              overflowX="auto"
              // width="100vw"
              // maxHeight={600}
            >
              <Box>
                {/* Header */}
                <Box
                  direction="row"
                  bgColor="var(--color-table-header-dark)"
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 10,
                  }}
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
                        // flex: 1,
                        flex: col.flex,
                        // width: "100%",
                        minWidth: col.minWidth,
                        maxWidth: "500px",
                      }}
                      onClick={() => col.onClick?.({row: 1, col: index})}
                    >
                      <TextStyle variant="labelSmallBold" color="color-primary">
                        {col.value}
                      </TextStyle>
                      {col.isSort && (
                        <Button
                          onClick={() => {
                            console.log("onClick");
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
                            onClick={() =>
                              col.onClick?.({row: rowIndex, col: colIndex})
                            }
                            role={col.onClick !== null ? "button" : "div"}
                            borderWidth={1}
                            border="bottom"
                            px={8}
                            py={16}
                            style={{
                              // flex: 1,
                              // width: "100%",
                              // minWidth: "70px",
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
            // borderWidth={1}
            // border="top"
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
                  50
                </TextStyle>
                <Button
                  onClick={() => {
                    console.log("onClick");
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
                {`${page}-${page * limit} จาก ${count}`}
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
                  console.log("onClick");
                }}
                variant="ghost-primary-no-padding"
                borderRadius="round"
                disabled
              >
                <Icon
                  icon="arrow_left"
                  width={24}
                  height={24}
                  color={true ? "var(--color-primary)" : "var(--color-primary)"}
                />
              </Button>

              <Button
                onClick={() => {
                  console.log("onClick");
                }}
                variant="ghost-primary-no-padding"
                borderRadius="round"
              >
                <Icon
                  icon="arrow_right"
                  width={24}
                  height={24}
                  color={true ? "var(--color-primary)" : "var(--color-primary)"}
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
