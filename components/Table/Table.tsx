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
            <Box
              direction="column"
              bgColor="var(--color-neutral-light)"
              color="var(--color-table-border-dark)"
              overflow="auto"
            >
              {/* Header */}
              <Box
                direction="row"
                color="var(--color-table-border-dark)"
                bgColor="var(--color-table-header-dark)"
                borderWidth={1}
                border="bottom"
                gap={16}
                px={8}
                py={10}
                style={{width: "100%"}}
              >
                {headers.map((col, index) => (
                  <Box
                    key={index}
                    direction="row"
                    alignItems="center"
                    gap={4}
                    style={{
                      flex: 1,
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
                        variant={"ghost-icon-secondary-no-padding"}
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
                gap={8}
                px={8}
                py={10}
                style={{width: "100%"}}
              >
                {rows.map((item, rowIndex) => (
                  <Box key={rowIndex} direction="row" gap={16}>
                    {item.map((cell, colIndex) => (
                      <Box
                        key={colIndex}
                        style={{
                          flex: 1,
                        }}
                      >
                        <TextStyle
                          variant="paragraphSmall"
                          color="color-primary"
                          onClick={() => cell.onClick?.({index: colIndex})}
                          style={{
                            cursor: cell.onClick ? "pointer" : "default",
                          }}
                        >
                          {cell.value}
                        </TextStyle>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
              {/* Body */}
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
                <TextStyle variant="paragraphXSmall" color="color-primary">
                  50
                </TextStyle>
                <Icon icon="arrow_down" width={16} color="color-primary" />
              </Box>
            </Box>
            {/* Option */}

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
            {/* Page */}

            {/* Next */}
            <Box
              direction="row"
              alignItems="center"
              justifyContent="end"
              gap={8}
            >
              <Icon icon="arrow_left" width={24} color="color-primary" />
              <Icon icon="arrow_right" width={24} color="color-primary" />
            </Box>
            {/* Page */}
          </Box>
        </Box>
      </S.Table>
    );
  },
);

Table.displayName = "Table";

export default Table;
