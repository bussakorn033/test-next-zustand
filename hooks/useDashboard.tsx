import {useTranslation} from "react-i18next";
import {useState, useMemo, useEffect} from "react";
import {Button} from "@/shared-components/Button";
import {Icon} from "@/shared-components/Icon";
import {
  OnClickCellParams,
  Pagination,
  TableColumn,
} from "@/shared-components/Table/Table.types";
import {formatDate} from "@/utils/Utility";

interface FilterState {
  userName: string;
  lastName: string;
}

const initialFilters: FilterState = {
  userName: "",
  lastName: "",
};

const mockData = {
  status: {
    code: "000000",
    message: "success",
    service: "e-contract-biz",
    description: {
      th: "สำเร็จ",
      en: "success",
    },
  },
  data: {
    total_record: 253,
    contract_lists: [
      {
        customer_contract_id: "contract_01",
        document_running: "1/2567",
        customer_contract_version: 1,
        contract_template_id: "EcontractTepm_ALChangeinfo_01",
        contract_status_code: "CAN_NOT_EDIT",
        contract_status_description_th: "ไม่สามารถแก้ไขเอกดสารได้",
        contract_status_description_en: "CAN NOT EDIT",
        contract_type_code: "CT_AL001",
        contract_type_description_th:
          "แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)",
        contract_type_description_en:
          "Editing data items in the hire purchase contract (general)",
        snapshot: {
          id_no: "1111111111111",
          rm_id: "001100000000000000000011111111",
          tha_tname: "น.ส.",
          tha_fname: "ทดสอบต้น",
          tha_lname: "ทดสอบท้าย",
          eng_tname: "MR",
          eng_fname: "NAMET",
          eng_lname: "TESTL",
          meta_data: [
            {
              ref_code: "date",
              value: "30/11/2024",
            },
            {
              ref_code: "contract_ref_number",
              value: "36-36608687",
            },
            {
              ref_code: "contract_date",
              value: "12/11/2019",
            },
            {
              ref_name: "old_msg",
              value:
                "เลขเครื่อง: DDW029844 \nเลขตัวถัง: WAUZZZF54RA088829 \nสีรถ: สีเทา",
            },
            {
              ref_name: "new_msg",
              value:
                "เลขเครื่อง: DDW029843 \nเลขตัวถัง: WAUZZZF54RA123452 \nสีรถ: สีแดง",
            },
          ],
          context_message_th: "abcdefg",
          context_message_en: "abcdefg",
          message_button: [
            {
              seq: 1,
              name_en: "see doc",
              name_th: "ดูเอกสาร",
            },
          ],
        },
        ecm_doc_id: "52fbd3b2-3f97-4a89-ae39-b4f628fbc8da",
        history_log: [
          {
            contract_status_code: "DARFT",
            updated_by_id: "11111",
            update_date: 1730781636,
          },
          {
            contract_status_code: "SUBMIT",
            updated_by_id: "22222",
            update_date: 1730781636,
          },
          {
            contract_status_code: "CAN_NOT_EDIT",
            updated_by_id: "22222",
            update_date: 1730781636,
          },
        ],
        created_by_role_name: "ONEAPP_AD",
        created_by_group_id: "11111",
        created_by_id: "11111",
        created_by_name: "staft 01",
        created_date: 1730781636,
        updated_by_role_name: "ONEAPP_AD",
        updated_by_group_id: "11111",
        updated_by_id: "22222",
        updated_by_name: "staft 02",
        update_date: 1730781636,
        can_edit_contract_flag: false,
        can_delete_contract_flag: false,
      },
    ],
    masters: [
      {
        id: "contract_status",
        details: [
          {
            code: "DARFT",
            description_th: "แบบร่าง",
            description_en: "DARFT",
          },
          {
            code: "SUBMIT",
            description_th: "รออนุมัติ",
            description_en: "WAIT APP",
          },
          {
            code: "STAFT_REJECT",
            description_th: "ไม่อนุมัติ",
            description_en: "STAFT REJECT",
          },
          {
            code: "APPROVE",
            description_th: "อนุมัติ",
            description_en: "APPROVE",
          },
          {
            code: "SENDING",
            description_th: "กำลังส่งให้ลุกค้า",
            description_en: "SENDING",
          },
          {
            code: "SEND_FAIL",
            description_th: "ส่งไม่สำเร็จ",
            description_en: "SEND FAIL",
          },
          {
            code: "WAIT_CUST_APP",
            description_th: "รอลูกค้าตอบกลับ",
            description_en: "WAIT CUST APP",
          },
          {
            code: "SIGNED",
            description_th: "ลูกค้ายอมรับ",
            description_en: "CUS SIGNED",
          },
          {
            code: "CUS_REJECT",
            description_th: "ลูกค้าปฏิเสธ",
            description_en: "CUS REJECT",
          },
          {
            code: "WAIT_EDIT",
            description_th: "รอพนักงานแก้ไขเอกสาร",
            description_en: "WAIT EDIT",
          },
          {
            code: "CONFIRM_EDIT",
            description_th: "พนักงานแก้ไขเอกสาร",
            description_en: "CONFIRM EDIT",
          },
          {
            code: "CAN_NOT_EDIT",
            description_th: "ไม่สามารถแก้ไขเอกดสารได้",
            description_en: "CAN NOT EDIT",
          },
          {
            code: "EXPIRE",
            description_th: "หมดอายุ",
            description_en: "EXPIRE",
          },
          {
            code: "CREATED_OFF",
            description_th: "สร้างเอกสารสำเร็จ",
            description_en: "CREATED",
          },
          {
            code: "CREATED",
            description_th: "สร้างเอกสารสำเร็จ",
            description_en: "CREATED",
          },
          {
            code: "UPLOAD_ERROR",
            description_th: "อัปโหลด ECM error",
            description_en: "UPLOAD ERROR",
          },
        ],
      },
      {
        id: "contract_type",
        details: [
          {
            code: "CT_AL001",
            description_th: "แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)",
            description_en:
              "Editing data items in the hire purchase contract (general)",
          },
          {
            code: "CT_AL002",
            description_th: "แก้ไขข้อมูลสัญญาเช่าซื้อ-วันชำระ",
            description_en: "Edit lease contract information - payment date",
          },
        ],
      },
    ],
  },
};

const useDashboard = () => {
  const {t} = useTranslation();
  const optionPagination = [25, 50, 100];
  const [dashboardData, setDashboardData] = useState<any | null>(null);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 50,
    count: 55,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({...prev, [e.target.name]: e.target.value}));
    console.log(`---- e.target.name:`, e.target);
  };
  const handleFilterBtnSearch = () => {
    console.log("handleFilterBtnSearch:", filters);
  };
  const handleFilterBtnReset = () => {
    console.log("handleFilterBtnReset");
    setFilters(initialFilters);
  };

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

  const headers = useMemo(
    () =>
      headerKeys.map((item, index) => ({
        key: item.key,
        value: item.label || "",
        isSort: item.isSort,
        sortBy: item.sortBy,
        icon: item.icon,
        onClick: onClickHeader,
        minWidth: item.minWidth || "100px",
        maxWidth: item.maxWidth,
        flex: item.flex || 1,
        alignHeader: (item.alignHeader || "left") as
          | "left"
          | "center"
          | "right",
        align: item.align || "left",
      })),
    [headerKeys],
  );

  // const valuesKey = useMemo(() => {
  // 	return Array.from({ length: pagination.count }, (_, rowIndex) => {
  // 		const row: Record<string, any> = {};
  // 		headerKeys.forEach((header, colIndex) => {
  // 			switch (header.key) {
  // 				case 'contract_no':
  // 					row[header.key] = `CN-${rowIndex + 1}`;
  // 					break;
  // 				case 'id_card':
  // 					row[header.key] = `123456789012${rowIndex % 10}`;
  // 					break;
  // 				case 'full_name':
  // 					row[header.key] = `Name ${rowIndex + 1}`;
  // 					break;
  // 				case 'doc_type':
  // 					row[header.key] = rowIndex % 2 === 0 ? 'PDF' : 'DOCX';
  // 					break;
  // 				case 'status':
  // 					row[header.key] = rowIndex % 2 === 0 ? 'Active' : 'Inactive';
  // 					break;
  // 				case 'last_updated':
  // 					row[header.key] = `2025-05-${String((rowIndex % 30) + 1).padStart(2, '0')}`;
  // 					break;
  // 				case 'created_by':
  // 					row[header.key] = `Admin${rowIndex + 1}`;
  // 					break;
  // 				case 'view':
  // 				case 'history':
  // 				case 'trash':
  // 					row[header.key] = (
  // 						<Button
  // 							onClick={() => {
  // 								onClickValue({
  // 									row: rowIndex,
  // 									col: colIndex,
  // 									...(header as Partial<TableColumn>)
  // 								});
  // 							}}
  // 							variant='ghost-icon-secondary-no-padding'
  // 							borderRadius='round'
  // 						>
  // 							<Icon icon={header.icon} width={24} height={24} color='--color-primary' />
  // 						</Button>
  // 					);
  // 					break;
  // 				default:
  // 					row[header.key] = '-';
  // 			}
  // 		});
  // 		return row;
  // 	});
  // }, [pagination.count, headerKeys]);
  const TableActionButton = ({
    rowIndex,
    colIndex,
    header,
    onClickValue,
    disabled,
  }: any) => {
    return (
      <Button
        onClick={() =>
          onClickValue({
            row: rowIndex,
            col: colIndex,
            ...header,
          })
        }
        variant="ghost-secondary-no-padding"
        borderRadius="round"
        iconLeft={header.icon}
        sizeIcon={24}
        colorIcon={
          disabled ? "--color-neutral-grey-lighter" : "--color-primary"
        }
        disabled={disabled}
      >
        {/* {`${disabled}`} */}
        {/* <Icon
					icon={header.icon}
					width={24}
					height={24}
					color={disabled ? '--color-neutral-grey-lighter' : '--color-primary'}
				/> */}
      </Button>
    );
  };

  const valuesKey = useMemo(() => {
    // map each contract row into an object whose keys follow headerKeys order
    return (
      dashboardData?.data?.contract_lists?.map(
        (
          contract: {
            document_running: any;
            snapshot: {
              id_no: any;
              tha_fname: any;
              tha_lname: any;
              message_button: any[];
            };
            contract_type_description_th: any;
            contract_status_description_th: any;
            update_date: string | number | Date;
            created_by_name: any;
          },
          rowIndex: any,
        ) => {
          // define a mapping from header key to contract property value
          const mapping: Record<string, any> = {
            contract_no: contract.document_running,
            id_card: contract.snapshot.id_no,
            full_name: `${contract.snapshot.tha_fname} ${contract.snapshot.tha_lname}`,
            doc_type: contract.contract_type_description_th,
            status: contract.contract_status_description_th,
            last_updated: formatDate(contract.update_date),
            created_by: contract.created_by_name,
            view: (
              <TableActionButton
                rowIndex={rowIndex}
                colIndex={headerKeys.findIndex((h) => h.key === "view")}
                header={headerKeys.find((h) => h.key === "view") || {}}
                onClickValue={onClickValue}
                disabled={!contract.snapshot.message_button[0]}
              />
            ),
            history: (
              <TableActionButton
                rowIndex={rowIndex}
                colIndex={headerKeys.findIndex((h) => h.key === "history")}
                header={headerKeys.find((h) => h.key === "history") || {}}
                onClickValue={onClickValue}
                disabled={!contract.snapshot.message_button[1]}
              />
            ),
            trash: (
              <TableActionButton
                rowIndex={rowIndex}
                colIndex={headerKeys.findIndex((h) => h.key === "trash")}
                header={headerKeys.find((h) => h.key === "trash") || {}}
                onClickValue={onClickValue}
                disabled={!contract.snapshot.message_button[2]}
              />
            ),
          };
          // now create an object that follows the order of headerKeys
          return headerKeys.reduce((row, header) => {
            row[header.key] = mapping[header.key] ?? "-";
            return row;
          }, {} as Record<string, any>);
        },
      ) || []
    );
  }, [pagination.page, pagination.limit, pagination.count, headerKeys]);

  const paginatedData = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.limit;
    return valuesKey.slice(startIndex, startIndex + pagination.limit);
  }, [valuesKey, pagination.page, pagination.limit]);

  const values = useMemo(
    () =>
      paginatedData.map((row: {[x: string]: any}, rowIndex: any) =>
        [...headers].map((header, colIndex) => ({
          data: {...dashboardData},
          key: header.key,
          value: row[header.key as keyof typeof row],
          onClick: onClickValue,
          minWidth: header.minWidth || "100px",
          flex: header.flex || 1,
          align: header.align || "left",
        })),
      ),
    [paginatedData, headers],
  );

  useEffect(() => {
    if (mockData?.data?.contract_lists.length > 0) {
      setDashboardData({
        ...mockData,
        data: {
          ...mockData.data,
          contract_lists: Array.from(
            {length: mockData?.data?.total_record},
            (_, index) => ({
              ...mockData.data.contract_lists[0],
              snapshot: {
                ...mockData.data.contract_lists[0]?.snapshot,
                tha_fname: `${index + 1}. ${
                  mockData.data.contract_lists[0]?.snapshot.tha_fname
                }`,
              },
            }),
          ),
        },
      });

      setPagination((prev) => ({
        ...prev,
        count: mockData.data.total_record,
      }));
    }

    return () => {
      setDashboardData(undefined);
    };
  }, []);

  return {
    filters,
    handleFilterChange,
    handleFilterBtnSearch,
    handleFilterBtnReset,
    optionPagination,
    pagination,
    setPagination,
    headers: [...headers],
    values: [...values],
  };
};

export default useDashboard;
