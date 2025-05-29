import useModalCreateContract from '@/hooks/useModalCreateContract';
import { Box } from '@/shared-components/Box';
import { Button } from '@/shared-components/Button';
import { Modal } from '@/shared-components/Modal';
import { Table } from '@/shared-components/Table';
import { Tabs } from '@/shared-components/Tabs';
import { TextField } from '@/shared-components/TextField';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalCreateContractProps {
  isShowModal: boolean;
  setIsShowModal: (show: boolean) => void;
}

const ModalCreateContract = ({ isShowModal, setIsShowModal }: ModalCreateContractProps) => {
  const classnames = classNames('components-modal-create-contract');
  const { t } = useTranslation();
  const [value, setValue] = useState('1');
  const menuTabs = [
    { label: t('dashboard_modal_tab_1'), value: '1', content: <div></div> },
    { label: t('dashboard_modal_tab_2'), value: '2', content: <div></div> },
    { label: t('dashboard_modal_tab_3'), value: '3', content: <div></div> },
    { label: t('dashboard_modal_tab_4'), value: '4', content: <div></div> }
  ];

  const searchList = [
    {
      key: 'rm_no',
      type: 'number',
      pattern: '\\d*',
      maxlength: '13',
      width: '100%',
      value: '1',
      label: t('dashboard_modal_tab_1')
    },
    {
      key: 'id_card',
      type: 'number',
      pattern: '\\d*',
      maxlength: '13',
      width: '100%',
      value: '2',
      label: t('dashboard_modal_tab_2')
    },
    {
      key: 'passport',
      type: 'number',
      pattern: '\\d*',
      maxlength: '',
      width: '100%',
      value: '3',
      label: t('dashboard_modal_tab_3')
    },
    {
      key: 'full_name',
      type: 'text',
      pattern: '',
      maxlength: '',
      width: '50%',
      value: '4',
      label: t('dashboard_modal_input_name_search'),
      label2: t('dashboard_modal_input_last_name_search')
    }
  ];

  const {
    paginationOptions,
    pagination,
    setPagination,
    headers,
    values,
    filters,
    handleFilterChange,
    handleFilterBtnSearch,
    handleFilterBtnReset,
    filterByUserOptions,
    filterByUserOptionsActive,
    setFilterByUserOptionsActive,
    filterByTypeDocOptions,
    filterByTypeDocOptionsActive,
    setFilterByTypeDocOptionsActive,
    filterByStatusDocOptions
  } = useModalCreateContract();

  return (
    <Box className={classnames}>
      <Modal
        width={850}
        $minWidth={850}
        isOpen={isShowModal}
        title={t('dashboard_modal_title')}
        onClose={() => setIsShowModal(false)}
      >
        <Box direction='column' gap={16} $isFullWidth>
          <Tabs
            tabsName={t('dashboard_modal_tab_detail')}
            menu={menuTabs}
            activeTab={value}
            onChange={(newVal) => setValue(newVal)}
          />
          <Box direction='row' $alignItems='center' gap={16} $isFullWidth>
            <Box direction='row' $alignItems='center' gap={16} $isFullWidth>
              {[...searchList].map((item) => {
                if (value !== item.value) return null;
                return (
                  <Box key={item.key} direction='row' $alignItems='center' gap={8} $isFullWidth>
                    <TextField
                      type={item.type}
                      name={item.key}
                      placeholder={item.label}
                      width={item.width}
                      minLength={item.maxlength}
                      maxLength={item.maxlength}
                      pattern={item.pattern}
                      $isClearable
                    />
                    {(item?.label2 || item.key === 'full_name') && (
                      <TextField
                        type={item.type}
                        name={item.key}
                        placeholder={item.label2}
                        width={item.width}
                        minLength={item.maxlength}
                        maxLength={item.maxlength}
                        pattern={item.pattern}
                        $isClearable
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
            <Box direction='row' $alignItems='center'>
              <Button variant='primary' fontWeight='--font-weight-regular'>
                {t('dashboard_modal_btn_search')}
              </Button>
            </Box>
          </Box>
          <Box>
            <Table
              mode='light'
              size='md'
              $maxHeightTable={'430px'}
              headers={headers}
              values={values}
              paginationOptions={paginationOptions}
              page={pagination.page}
              limit={pagination.limit}
              count={pagination.count}
              onPageChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
              onLimitChange={(newLimit) =>
                setPagination((prev) => ({
                  ...prev,
                  limit: newLimit,
                  page: 1
                }))
              }
              isPaginationDisabled
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalCreateContract;
