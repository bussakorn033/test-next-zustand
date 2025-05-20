import {useTranslation} from "react-i18next";
import {useState, useMemo} from "react";
import {Button} from "@/components/Button";
import {Icon} from "@/components/Icon";
import {
  OnClickCellParams,
  Pagination,
  TableColumn,
} from "@/components/Table/Table.types";

const useDashboard = () => {
  const {t} = useTranslation();

  const optionPagination = [25, 50, 100];
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    count: 55,
  });

  console.log(`---- pagination:`, pagination);

  const onClickHeader = ({row, col, ...rest}: OnClickCellParams) => {
    console.log("Header clicked at index:", {row, col, rest});
  };

  const onClickValue = ({row, col, ...rest}: OnClickCellParams) => {
    console.log("Value clicked at index:", {row, col, rest});
  };

  const headerKeys = useMemo(
    () => [
      {
        key: "contract_no",
        label: t("dashboard_contract_table_header_row1"),
        isSort: true,
        sortBy: undefined,
        minWidth: "96px",
        maxWidth: "calc(96px * 1.25)",
        flex: 1,
        align: "left",
      },
      {
        key: "id_card",
        label: t("dashboard_contract_table_header_row2"),
        isSort: true,
        sortBy: undefined,
        minWidth: "144px",
        maxWidth: "calc(144px * 1.5)",
        flex: 1,
        align: "left",
      },
      {
        key: "full_name",
        label: t("dashboard_contract_table_header_row3"),
        isSort: true,
        sortBy: undefined,
        minWidth: "118px",
        flex: 1,
        align: "left",
      },
      {
        key: "doc_type",
        label: t("dashboard_contract_table_header_row4"),
        isSort: true,
        sortBy: undefined,
        minWidth: "218px",
        flex: 1,
        align: "left",
      },
      {
        key: "status",
        label: t("dashboard_contract_table_header_row5"),
        isSort: false,
        minWidth: "114px",
        flex: 1,
        align: "left",
      },
      {
        key: "last_updated",
        label: t("dashboard_contract_table_header_row6"),
        isSort: true,
        sortBy: "asc",
        minWidth: "100px",
        flex: 1,
        align: "left",
      },
      {
        key: "created_by",
        label: t("dashboard_contract_table_header_row7"),
        isSort: false,
        minWidth: "144px",
        maxWidth: "calc(144px * 2)",
        flex: 1,
        align: "left",
      },
      {
        key: "view",
        label: "",
        icon: "view_document",
        minWidth: "40px",
        maxWidth: "calc(40px * 2)",
        flex: 1,
        alignHeader: "center",
        align: "center",
      },
      {
        key: "history",
        label: "",
        icon: "history",
        minWidth: "40px",
        maxWidth: "calc(40px * 2)",
        flex: 1,
        alignHeader: "center",
        align: "center",
      },
      {
        key: "trash",
        label: "",
        icon: "trash",
        minWidth: "40px",
        maxWidth: "calc(40px * 2)",
        flex: 1,
        alignHeader: "center",
        align: "center",
      },
    ],
    [t],
  );

  const headers: TableColumn[] = useMemo(
    () =>
      headerKeys.map((item, index) => ({
        key: item.key,
        value: item.label || "",
        isSort: item.isSort,
        sortBy: item.sortBy,
        icon: item.icon,
        onClick: item.isSort
          ? () =>
              onClickHeader({
                row: -1,
                col: index,
                key: item.key,
                rest: item,
              })
          : undefined,
        minWidth: item.minWidth,
        maxWidth: item.maxWidth,
        flex: item.flex || 1,
        alignHeader: item.alignHeader || "left",
        align: item.align || "left",
      })),
    [headerKeys],
  );

  const valuesKey = useMemo(() => {
    return Array.from({length: pagination.count}, (_, i) => {
      const row: Record<string, any> = {};
      headerKeys.forEach((header) => {
        switch (header.key) {
          case "contract_no":
            row[header.key] = `CN-${i + 1}`;
            break;
          case "id_card":
            row[header.key] = `123456789012${i % 10}`;
            break;
          case "full_name":
            row[header.key] = `Name ${i + 1}`;
            break;
          case "doc_type":
            row[header.key] = i % 2 === 0 ? "PDF" : "DOCX";
            break;
          case "status":
            row[header.key] = i % 2 === 0 ? "Active" : "Inactive";
            break;
          case "last_updated":
            row[header.key] = `2025-05-${String((i % 30) + 1).padStart(
              2,
              "0",
            )}`;
            break;
          case "created_by":
            row[header.key] = `Admin${i + 1}`;
            break;
          case "view":
          case "history":
          case "trash":
            row[header.key] = (
              <Button
                onClick={(e) => {
                  console.log("click icon");
                  // e.stopPropagation();
                }}
                variant="ghost-icon-secondary-no-padding"
                borderRadius="round"
              >
                <Icon
                  icon={header.icon}
                  width={24}
                  height={24}
                  color="--color-primary"
                />
              </Button>
            );
            break;
          default:
            row[header.key] = "-";
        }
      });
      return row;
    });
  }, [pagination.count, headerKeys]);

  const paginatedData = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.limit;
    return valuesKey.slice(startIndex, startIndex + pagination.limit);
  }, [valuesKey, pagination.page, pagination.limit]);

  const values: TableColumn[][] = useMemo(
    () =>
      paginatedData.map((row, rowIndex) =>
        [...headers].map((header, colIndex) => ({
          key: header.key,
          value: row[header.key as keyof typeof row],
          onClick: () =>
            onClickValue({
              row: rowIndex,
              col: colIndex,
              rest: row,
            }),
          minWidth: header.minWidth || "100px",
          flex: header.flex || 1,
          align: header.align || "left",
        })),
      ),
    [paginatedData, headers],
  );

  return {
    optionPagination,
    pagination,
    setPagination,
    headers: [...headers],
    values: [...values],
  };
};

export default useDashboard;
