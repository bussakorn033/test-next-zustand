import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/shared-components/Button';
import { TableColumn, OnClickCellParams, Pagination } from '@/shared-components/Table/Table.types';
import { formatDate } from '@/utils/Utility';

/* TODO: Mock data // REMOVE THIS MOCK DATA BEFORE DEPLOYMENT */
// Mock data for development
const mockData: DashboardData = {
  status: {
    code: '000000',
    message: 'success',
    service: 'e-contract-biz',
    description: {
      th: 'สำเร็จ',
      en: 'success'
    }
  },
  data: {
    total_record: 253,
    contract_lists: [
      {
        customer_contract_id: 'contract_01',
        document_running: '1/2567',
        customer_contract_version: 1,
        contract_template_id: 'EcontractTepm_ALChangeinfo_01',
        contract_status_code: 'CAN_NOT_EDIT',
        contract_status_description_th: 'ไม่สามารถแก้ไขเอกดสารได้',
        contract_status_description_en: 'CAN NOT EDIT',
        contract_type_code: 'CT_AL001',
        contract_type_description_th: 'แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)',
        contract_type_description_en: 'Editing data items in the hire purchase contract (general)',
        snapshot: {
          id_no: '1111111111111',
          rm_id: '001100000000000000000011111111',
          tha_tname: 'น.ส.',
          tha_fname: 'ทดสอบต้น',
          tha_lname: 'ทดสอบท้าย',
          eng_tname: 'MR',
          eng_fname: 'NAMET',
          eng_lname: 'TESTL',
          meta_data: [
            {
              ref_code: 'date',
              value: '30/11/2024'
            },
            {
              ref_code: 'contract_ref_number',
              value: '36-36608687'
            },
            {
              ref_code: 'contract_date',
              value: '12/11/2019'
            },
            {
              ref_name: 'old_msg',
              value: 'เลขเครื่อง:  DDW029844 \nเลขตัวถัง:  WAUZZZF54RA088829 \nสีรถ:  สีเทา'
            },
            {
              ref_name: 'new_msg',
              value: 'เลขเครื่อง:  DDW029843 \nเลขตัวถัง:  WAUZZZF54RA123452 \nสีรถ:  สีแดง'
            }
          ],
          context_message_th: 'abcdefg',
          context_message_en: 'abcdefg',
          message_button: [
            {
              seq: 1,
              name_en: 'see doc',
              name_th: 'ดูเอกสาร'
            }
          ]
        },
        ecm_doc_id: '52fbd3b2-3f97-4a89-ae39-b4f628fbc8da',
        history_log: [
          {
            contract_status_code: 'DARFT',
            updated_by_id: '11111',
            update_date: 1730781636
          },
          {
            contract_status_code: 'SUBMIT',
            updated_by_id: '22222',
            update_date: 1730781636
          },
          {
            contract_status_code: 'CAN_NOT_EDIT',
            updated_by_id: '22222',
            update_date: 1730781636
          }
        ],
        created_by_role_name: 'ONEAPP_AD',
        created_by_group_id: '11111',
        created_by_id: '11111',
        created_by_name: 'staft 01',
        created_date: 1730781636,
        updated_by_role_name: 'ONEAPP_AD',
        updated_by_group_id: '11111',
        updated_by_id: '22222',
        updated_by_name: 'staft 02',
        update_date: 1730781636,
        can_edit_contract_flag: false,
        can_delete_contract_flag: false
      }
    ],
    masters: [
      {
        id: 'contract_status',
        details: [
          {
            code: 'DARFT',
            description_th: 'แบบร่าง',
            description_en: 'DARFT'
          },
          {
            code: 'SUBMIT',
            description_th: 'รออนุมัติ',
            description_en: 'WAIT APP'
          },
          {
            code: 'STAFT_REJECT',
            description_th: 'ไม่อนุมัติ',
            description_en: 'STAFT REJECT'
          },
          {
            code: 'APPROVE',
            description_th: 'อนุมัติ',
            description_en: 'APPROVE'
          },
          {
            code: 'SENDING',
            description_th: 'กำลังส่งให้ลุกค้า',
            description_en: 'SENDING'
          },
          {
            code: 'SEND_FAIL',
            description_th: 'ส่งไม่สำเร็จ',
            description_en: 'SEND FAIL'
          },
          {
            code: 'WAIT_CUST_APP',
            description_th: 'รอลูกค้าตอบกลับ',
            description_en: 'WAIT CUST APP'
          },
          {
            code: 'SIGNED',
            description_th: 'ลูกค้ายอมรับ',
            description_en: 'CUS SIGNED'
          },
          {
            code: 'CUS_REJECT',
            description_th: 'ลูกค้าปฏิเสธ',
            description_en: 'CUS REJECT'
          },
          {
            code: 'WAIT_EDIT',
            description_th: 'รอพนักงานแก้ไขเอกสาร',
            description_en: 'WAIT EDIT'
          },
          {
            code: 'CONFIRM_EDIT',
            description_th: 'พนักงานแก้ไขเอกสาร',
            description_en: 'CONFIRM EDIT'
          },
          {
            code: 'CAN_NOT_EDIT',
            description_th: 'ไม่สามารถแก้ไขเอกดสารได้',
            description_en: 'CAN NOT EDIT'
          },
          {
            code: 'EXPIRE',
            description_th: 'หมดอายุ',
            description_en: 'EXPIRE'
          },
          {
            code: 'CREATED_OFF',
            description_th: 'สร้างเอกสารสำเร็จ',
            description_en: 'CREATED'
          },
          {
            code: 'CREATED',
            description_th: 'สร้างเอกสารสำเร็จ',
            description_en: 'CREATED'
          },
          {
            code: 'UPLOAD_ERROR',
            description_th: 'อัปโหลด ECM error',
            description_en: 'UPLOAD ERROR'
          }
        ]
      },
      {
        id: 'contract_type',
        details: [
          {
            code: 'CT_AL001',
            description_th: 'แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)',
            description_en: 'Editing data items in the hire purchase contract (general)'
          },
          {
            code: 'CT_AL002',
            description_th: 'แก้ไขข้อมูลสัญญาเช่าซื้อ-วันชำระ',
            description_en: 'Edit lease contract information - payment date'
          }
        ]
      }
    ]
  }
};

interface FilterState {
  userName: string;
  lastName: string;
}

const initialFilters: FilterState = {
  userName: '',
  lastName: ''
};

interface Contract {
  customer_contract_id: string;
  document_running: string;
  customer_contract_version: number;
  contract_template_id: string;
  contract_status_code: string;
  contract_status_description_th: string;
  contract_status_description_en: string;
  contract_type_code: string;
  contract_type_description_th: string;
  contract_type_description_en: string;
  snapshot: {
    id_no: string;
    rm_id: string;
    tha_tname: string;
    tha_fname: string;
    tha_lname: string;
    eng_tname: string;
    eng_fname: string;
    eng_lname: string;
    meta_data: Array<{ ref_code?: string; ref_name?: string; value: string }>;
    context_message_th: string;
    context_message_en: string;
    message_button: Array<{ seq: number; name_en: string; name_th: string }>;
  };
  ecm_doc_id: string;
  history_log: Array<{
    contract_status_code: string;
    updated_by_id: string;
    update_date: number;
  }>;
  created_by_role_name: string;
  created_by_group_id: string;
  created_by_id: string;
  created_by_name: string;
  created_date: number;
  updated_by_role_name: string;
  updated_by_group_id: string;
  updated_by_id: string;
  updated_by_name: string;
  update_date: number;
  can_edit_contract_flag: boolean;
  can_delete_contract_flag: boolean;
}

interface DashboardData {
  status: {
    code: string;
    message: string;
    service: string;
    description: { th: string; en: string };
  };
  data: {
    total_record: number;
    contract_lists: Contract[];
    masters: any; // You can further type masters if desired
  };
}

interface TableActionButtonProps {
  rowIndex: number;
  colIndex: number;
  header: TableColumn;
  onClickValue: (params: OnClickCellParams) => void;
  disabled: boolean;
}

interface FilterOption {
  id: string | number;
  label: string | number;
}

interface FilterEnum {
  [key: string]: string;
}

export enum FilterByUserOptions {
  FullName = 'ชื่อ-นามสกุล',
  IdCard = 'เลขบัตรประชาชน',
  Passport = 'เลขพาสปอร์ต',
  CreatedBy = 'สร้างโดย'
}

export enum FilterByTypeDocOption {
  Doc1 = 'แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)',
  Doc2 = 'แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (วันชำระค่างวด)',
  BtnFilter = 'กรอง',
  BtnReset = 'รีเซ็ต'
}

export enum FilterByStatusDocOption {
  Type1 = 'แบบร่าง',
  Type2 = 'รออนุมัติ',
  Type3 = 'ไม่อนุมัติ',
  Type4 = 'รอลูกค้าตอบกลับ',
  Type5 = 'หมดอายุ',
  Type6 = 'ลูกค้าปฏิเสธ',
  Type7 = 'รอยืนยัน',
  Type8 = 'ปฏิเสธการส่งเอกสาร',
  Type9 = 'ส่งเอกสารสำเร็จ',
  Type10 = 'สร้างเอกสารสำเร็จ',
  BtnFilter = 'กรอง',
  BtnReset = 'รีเซ็ต'
}

export enum paginationOption {
  Pagination10 = '10',
  Pagination25 = '25',
  Pagination50 = '50',
  Pagination100 = '100'
}

const TableActionButton = ({
  rowIndex,
  colIndex,
  header,
  onClickValue,
  disabled
}: TableActionButtonProps) => {
  return (
    <Button
      onClick={() =>
        onClickValue({
          row: rowIndex,
          col: colIndex,
          ...header
        })
      }
      style={{ verticalAlign: 'bottom' }}
      variant='ghost-secondary-no-padding'
      borderRadius='round'
      iconLeft={header.icon}
      sizeIcon={24}
      colorIcon={disabled ? '--color-neutral-grey-lighter' : '--color-primary'}
      disabled={disabled}
    />
  );
};

const useDashboard = () => {
  const { t } = useTranslation();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [filterByUserOptionsActive, setFilterByUserOptionsActive] = useState<
    string | number | undefined
  >();
  const [filterByTypeDocOptionsActive, setFilterByTypeDocOptionsActive] = useState<
    string | number | undefined
  >();
  const [filterByStatusDocOptionsActive, setFilterByStatusDocOptionsActive] = useState<
    string | number | undefined
  >();

  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 50,
    count: 55
  });

  const filterBy = (filter: FilterEnum): FilterOption[] =>
    Object.entries(filter).map(([key, label]) => ({
      id: key,
      label
    }));

  const filterByUserOptions = useMemo(() => filterBy(FilterByUserOptions), [t]);
  const filterByTypeDocOptions = useMemo(() => filterBy(FilterByTypeDocOption), [t]);
  const filterByStatusDocOptions = useMemo(() => filterBy(FilterByStatusDocOption), [t]);
  const paginationOptions = useMemo(() => filterBy(paginationOption), [t]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilterBtnSearch = () => {
    /* TODO: Call API with filters */
  };

  const handleFilterBtnReset = () => {
    setFilters(initialFilters);
  };

  const onClickHeader = ({ row, col, ...rest }: OnClickCellParams) => {
    /* TODO: Call API with sort // Header clicked at index */
  };

  const onClickValue = ({ row, col, ...rest }: OnClickCellParams) => {
    /* TODO: Call API with value // Value clicked at index */
  };

  const headerKeys: TableColumn[] = useMemo(
    () => [
      {
        key: 'contract_no',
        value: t('dashboard_contract_table_header_row1'),
        isSort: true,
        sortBy: undefined,
        minWidth: '96px',
        maxWidth: 'calc(96px * 1.25)',
        flex: 1,
        align: 'left'
      },
      {
        key: 'id_card',
        value: t('dashboard_contract_table_header_row2'),
        isSort: true,
        sortBy: undefined,
        minWidth: '144px',
        maxWidth: 'calc(144px * 1.5)',
        flex: 1,
        align: 'left'
      },
      {
        key: 'full_name',
        value: t('dashboard_contract_table_header_row3'),
        isSort: true,
        sortBy: undefined,
        minWidth: '118px',
        flex: 1,
        align: 'left'
      },
      {
        key: 'doc_type',
        value: t('dashboard_contract_table_header_row4'),
        isSort: true,
        sortBy: undefined,
        minWidth: '218px',
        flex: 1,
        align: 'left'
      },
      {
        key: 'status',
        value: t('dashboard_contract_table_header_row5'),
        isSort: false,
        minWidth: '114px',
        flex: 1,
        align: 'left'
      },
      {
        key: 'last_updated',
        value: t('dashboard_contract_table_header_row6'),
        isSort: true,
        sortBy: 'asc',
        minWidth: '100px',
        flex: 1,
        align: 'left'
      },
      {
        key: 'created_by',
        value: t('dashboard_contract_table_header_row7'),
        isSort: false,
        minWidth: '144px',
        maxWidth: 'calc(144px * 2)',
        flex: 1,
        align: 'left'
      },
      {
        key: 'view',
        value: '',
        icon: 'view_document',
        minWidth: '40px',
        maxWidth: 'calc(40px * 2)',
        flex: 1,
        alignHeader: 'center',
        align: 'center'
      },
      {
        key: 'history',
        value: '',
        icon: 'history',
        minWidth: '40px',
        maxWidth: 'calc(40px * 2)',
        flex: 1,
        alignHeader: 'center',
        align: 'center'
      },
      {
        key: 'trash',
        value: '',
        icon: 'trash',
        minWidth: '40px',
        maxWidth: 'calc(40px * 2)',
        flex: 1,
        alignHeader: 'center',
        align: 'center'
      }
    ],
    [t]
  );

  const headers: TableColumn[] = useMemo(
    () =>
      headerKeys.map((item) => ({
        key: item.key,
        value: item.value || '',
        isSort: item.isSort,
        sortBy: item.sortBy,
        icon: item.icon,
        onClick: onClickHeader,
        minWidth: item.minWidth || '100px',
        maxWidth: item.maxWidth,
        flex: item.flex || 1,
        alignHeader: (item.alignHeader || 'left') as 'left' | 'center' | 'right',
        align: item.align || 'left'
      })),
    [headerKeys]
  );

  const valuesKey = useMemo(() => {
    return (
      dashboardData?.data?.contract_lists?.map((contract: Contract, rowIndex: number) => {
        const mapping: Record<string, React.ReactNode> = {
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
              colIndex={headerKeys.findIndex((h) => h.key === 'view')}
              header={headerKeys.find((h) => h.key === 'view') as TableColumn}
              onClickValue={onClickValue}
              disabled={!contract.snapshot.message_button[0]}
            />
          ),
          history: (
            <TableActionButton
              rowIndex={rowIndex}
              colIndex={headerKeys.findIndex((h) => h.key === 'history')}
              header={headerKeys.find((h) => h.key === 'history') as TableColumn}
              onClickValue={onClickValue}
              disabled={!contract.snapshot.message_button[1]}
            />
          ),
          trash: (
            <TableActionButton
              rowIndex={rowIndex}
              colIndex={headerKeys.findIndex((h) => h.key === 'trash')}
              header={headerKeys.find((h) => h.key === 'trash') as TableColumn}
              onClickValue={onClickValue}
              disabled={!contract.snapshot.message_button[2]}
            />
          )
        };
        return headerKeys.reduce(
          (row, header) => {
            if (header.key) {
              const key = header.key as keyof typeof mapping;
              row[header.key] = mapping[key] ?? '-';
            }
            return row;
          },
          {} as Record<string, React.ReactNode>
        );
      }) || []
    );
  }, [dashboardData, headerKeys, onClickValue]);

  const paginatedData = useMemo(() => {
    const startIndex = (pagination.page - 1) * pagination.limit;
    return valuesKey.slice(startIndex, startIndex + pagination.limit);
  }, [valuesKey, pagination.page, pagination.limit]);

  const values = useMemo(
    () =>
      paginatedData.map((row: Record<string, React.ReactNode>, rowIndex: number) =>
        [...headers].map((header, colIndex) => ({
          data: { ...dashboardData },
          key: header.key || '',
          value: header.key ? row[header.key] : '',
          onClick: onClickValue,
          minWidth: header.minWidth || '100px',
          flex: header.flex || 1,
          align: header.align || 'left'
        }))
      ),
    [paginatedData, headers, dashboardData, onClickValue]
  );

  useEffect(() => {
    /* Note: This is where you would typically fetch data from an API */
    /* For this example, we're using mock data */
    if (mockData?.data?.contract_lists.length > 0) {
      setDashboardData({
        ...mockData,
        data: {
          ...mockData.data,
          contract_lists: Array.from({ length: mockData.data.total_record }, (_, index) => ({
            ...mockData.data.contract_lists[0],
            snapshot: {
              ...mockData.data.contract_lists[0].snapshot,
              tha_fname: `${index + 1}. ${mockData.data.contract_lists[0].snapshot.tha_fname}`
            }
          }))
        }
      });
      setPagination((prev) => ({
        ...prev,
        count: mockData.data.total_record
      }));
    }
    return () => {
      setDashboardData(null);
    };
  }, []);

  return {
    filters,
    handleFilterChange,
    handleFilterBtnSearch,
    handleFilterBtnReset,
    paginationOptions,
    pagination,
    setPagination,
    headers: [...headers],
    values: [...values],
    filterByUserOptions,
    filterByUserOptionsActive,
    setFilterByUserOptionsActive,
    filterByTypeDocOptions,
    filterByTypeDocOptionsActive,
    setFilterByTypeDocOptionsActive,
    filterByStatusDocOptions,
    filterByStatusDocOptionsActive,
    setFilterByStatusDocOptionsActive
  };
};

export default useDashboard;
