## Usage

```js
import {Table} from "@/shared-components/Table";

<Table
  headers={headers}
  values={values}
  mode="light"
  size="md"
  $maxHeightTable={"200px"}
  headers={headers}
  values={values}
  paginationOptions={paginationOptions}
  page={pagination.page}
  limit={pagination.limit}
  count={pagination.count}
  onPageChange={()=>null}
  onLimitChange={()=>null}
  isPaginationDisabled
/>;


const {paginationOptions, pagination, setPagination, headers, values} =
    useDashboard();


  const paginationOptions = [25, 50, 100];
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 10,
    count: 55,
  });

  const onClickHeader = ({row, col, ...rest}: OnClickCellParams) => {
    console.log("Header clicked at index:", {row, col, ...rest});
  };

  const onClickValue = ({row, col, ...rest}: OnClickCellParams) => {
    console.log("Value clicked at index:", {row, col, ...rest});
  };

  const headerKeys = useMemo(
    () => [
      {
        key: "contract_no",
        label: t("dashboard_contract_table_header_row1"),
        isSort: true,
        sortBy: undefined,
        $minWidth: "96px",
        $maxWidth: "calc(96px * 1.25)",
        flex: 1,
        align: "left",
      },
      {
        key: "id_no",
        label: t("dashboard_contract_table_header_row2"),
        isSort: true,
        sortBy: undefined,
        $minWidth: "144px",
        $maxWidth: "calc(144px * 1.5)",
        flex: 1,
        align: "left",
      },
  );

  const headers = useMemo(
    () =>
      headerKeys.map((item, index) => ({
        key: item.key,
        value: item.label || "",
        isSort: item.isSort,
        sortBy: item.sortBy,
        icon: item.icon,
        onClick: onClickHeader,
        $minWidth: item.$minWidth || "100px",
        $maxWidth: item.$maxWidth,
        flex: item.flex || 1,
        alignHeader: (item.alignHeader || "left") as
          | "left"
          | "center"
          | "right",
        align: item.align || "left",
      })),
    [headerKeys],
  );

  const valuesKey = useMemo(() => {
    return Array.from({length: pagination.count}, (_, rowIndex) => {
      const row: Record<string, any> = {};
      headerKeys.forEach((header, colIndex) => {
        switch (header.key) {
          case "contract_no":
            row[header.key] = `CN-${rowIndex + 1}`;
            break;
          case "id_no":
            row[header.key] = `123456789012${rowIndex % 10}`;
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

  const values = useMemo(
    () =>
      paginatedData.map((row, rowIndex) =>
        [...headers].map((header, colIndex) => ({
          key: header.key,
          value: row[header.key as keyof typeof row],
          onClick: onClickValue,
          $minWidth: header.$minWidth || "100px",
          flex: header.flex || 1,
          align: header.align || "left",
        })),
      ),
    [paginatedData, headers],
  );

```
