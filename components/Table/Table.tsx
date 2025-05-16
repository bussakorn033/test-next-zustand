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
          <Box direction="column">
            {/* Scrollable area */}
            <Box direction="column" overflowX="auto" maxHeight={600}>
              <Box>
                {/* Header */}
                <Box
                  direction="row"
                  // bgColor="var(--color-table-header-dark)"
                  // borderWidth={1}
                  // border="bottom"
                  // gap={16}
                  // px={8}
                  // py={10}
                  style={{
                    // width: "100%",
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
                      // gap={4}
                      px={8}
                      py={10}
                      style={{
                        flex: 1,
                        // border: "1px solid pink",
                        // background: "yellow",
                        width: "calc(100% / 10)",
                        minWidth: "50px",
                        // maxWidth: "300px",
                        cursor: col.onClick ? "pointer" : "default",
                      }}
                      onClick={() => col.onClick?.({index})}
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
                <Box
                  direction="column"
                  // px={8}
                  // py={10}
                >
                  {rows.map((item, rowIndex) => (
                    // <Box
                    //   direction="row"
                    //   alignItems="center"
                    //   // bgColor="var(--color-table-header-dark)"
                    //   borderWidth={1}
                    //   border="bottom"
                    // >
                    <Box
                      key={rowIndex}
                      direction="row"
                      // bgColor="var(--color-error)"
                      // borderWidth={1}
                      // border="bottom"
                      // gap={16}
                      // px={8}
                      // py={10}
                      style={{
                        // width: "100%",
                        position: "sticky",
                        top: 0,
                        zIndex: 10,
                      }}
                    >
                      {headers.map((_, colIndex) => {
                        const cell = item[colIndex] || {value: ""}; // fallback
                        return (
                          <Box
                            key={colIndex}
                            px={8}
                            py={10}
                            // bgColor="var(--color-error)"
                            borderWidth={1}
                            border="top"
                            style={{
                              // border: "1px solid pink",
                              // background: "yellow",
                              width: "calc(100% / 10)",
                              minWidth: "50px",
                              // maxWidth: "300px",
                              flex: 1,
                            }}
                          >
                            {/* <Button
                              variant="ghost-primary-no-padding"
                              width="full"
                              color="color-primary"
                              onClick={() => cell.onClick?.({index: colIndex})}
                              style={{
                                cursor: cell.onClick ? "pointer" : "default",
                                justifyContent: "flex-start",
                              }}
                            > */}
                            <TextStyle
                              variant="paragraphSmall"
                              color="color-primary"
                              textAlign="left"
                            >
                              {cell.value}
                            </TextStyle>
                            {/* </Button> */}
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

          {/* Footer */}
          <Box
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap={24}
            color="var(--color-table-border-dark)"
            borderWidth={1}
            border="top"
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
