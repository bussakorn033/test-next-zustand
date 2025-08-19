import { useEffect, useState } from 'react';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import classNames from 'classnames';
import { Box } from '@/shared-components/Box';
import { Button } from '@/shared-components/Button';
import { Modal } from '@/shared-components/Modal';
import { Table } from '@/shared-components/Table';
import { Tabs } from '@/shared-components/Tabs';
import { TextField } from '@/shared-components/TextField';
import { TableColumn } from '@/shared-components/Table/Table.types';
import { TextStyle } from '@/shared-components/TextStyle';
import { Icon } from '@/shared-components/Icon';
import { Loading } from '@/shared-components/Loading';
import { useSearchCustomer } from '@/hooks/useSearchCustomer';
import {
	SEARCH_CUSTOMER_BUTTON_ID,
	SEARCH_CUSTOMER_INPUT_01,
	SEARCH_CUSTOMER_INPUT_02
} from '@/constants/DATA-TESTID';
import { isContainInjectionScript } from '@/utils/Utility';
import { useActivityLog } from 'host/use-activity-log';

interface ModalSearchCustomerProps {
	className?: string;
	isShowModal: boolean;
	setIsShowModal: (show: boolean) => void;
}

const ModalSearchCustomer = ({ isShowModal, setIsShowModal }: ModalSearchCustomerProps) => {
	const classnames = classNames('components-modal-create-contract');
	const { t } = useCustomTranslation();
	const { actlogClosePopup } = useActivityLog();
	const { columns, menuTabs, searchList, onGetCustomerList, customerListResponse } = useSearchCustomer();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [valueTab, setValueTab] = useState<string>('rm-id');
	const [customerList, setCustomerList] = useState<TableColumn[][]>([]);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [errorTextInput, setErrorTextInput] = useState<string[]>(['', '']);
	const [searchValue, setSearchValue] = useState<string[]>(['', '']);

	useEffect(() => {
		if (!isShowModal) {
			setValueTab('rm-id');
			resetState();
		}
	}, [isShowModal]);

	useEffect(() => {
		resetState();
	}, [valueTab]);

	const resetState = () => {
		setCustomerList([]);
		setIsEmpty(false);
		setIsError(false);
		setErrorTextInput(['', '']);
		setSearchValue(['', '']);
	};

	const validateInput = () => {
		if (valueTab === 'rm-id') {
			if (!searchValue[0]) {
				errorTextInput[0] = t('search_customer_validate_input_rm_no');
			} else {
				errorTextInput[0] = '';
			}
		} else if (valueTab === 'citizen-id') {
			if (!searchValue[0]) {
				errorTextInput[0] = t('search_customer_validate_input_citizen_id');
			} else if (searchValue[0].length !== 13) {
				errorTextInput[0] = t('search_customer_validate_input_wrong_citizen_id');
			} else {
				errorTextInput[0] = '';
			}
		} else if (valueTab === 'passport-no') {
			if (!searchValue[0] || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9_.]*$/.test(searchValue[0])) {
				errorTextInput[0] = t('search_customer_validate_input_passport');
			} else {
				errorTextInput[0] = '';
			}
		} else if (valueTab === 'customer-name') {
			if (searchValue[0].length < 2) {
				errorTextInput[0] = t('search_customer_validate_input_customer_name');
			} else {
				errorTextInput[0] = '';
			}

			if (searchValue[1].length < 2) {
				errorTextInput[1] = t('search_customer_validate_input_customer_name');
			} else {
				errorTextInput[1] = '';
			}
		}

		searchValue.map((val, index) => {
			if (val && isContainInjectionScript(val)) {
				errorTextInput[index] = t('search_customer_validate_input_script');
			}
		});

		setErrorTextInput([...errorTextInput]);

		if (!errorTextInput[0] && !errorTextInput[1]) {
			onSearchCustomer();
		} else {
			setCustomerList([]);
			setIsEmpty(false);
			setIsError(false);
		}
	};

	const onSearchCustomer = () => {
		setIsLoading(true);
		const body = {
			search_type: valueTab,
			search_value: searchValue
		};
		onGetCustomerList(body);
	};

	useEffect(() => {
		if (customerListResponse) {
			setReponseCustomerList();
		}
	}, [customerListResponse]);

	const setReponseCustomerList = () => {
		const response = customerListResponse;
		if (response?.isEmpty) {
			setIsEmpty(true);
		} else if (response?.isError) {
			setIsError(true);
		} else if (response?.customerList && response.customerList.length > 0) {
			const customerList = response.customerList.map((row: Record<string, React.ReactNode>) =>
				[...columns].map((header) => ({
					key: header.key || '',
					value: header.key ? row[header.key] : '',
					width: header.width || undefined,
					$minWidth: header.$minWidth || undefined,
					$maxWidth: header.$maxWidth || undefined,
					flex: header.flex || undefined,
					align: header.align || 'left',
					isHover: header.isHover || false
				}))
			);
			setIsEmpty(false);
			setIsError(false);
			setCustomerList([...customerList]);
		}

		setIsLoading(false);
	};

	const onChangeInputValue = (index: number, value: string) => {
		searchValue[index] = value;
		setSearchValue([...searchValue]);
	};

	const onCloseModal = () => {
		setIsShowModal(false);
		actlogClosePopup(t('dashboard_modal_search_customer_popup_name'));
	};

	return (
		<Box className={classnames}>
			<Modal
				width={950}
				$minWidth={850}
				isOpen={isShowModal}
				title={t('dashboard_modal_search_customer_title')}
				onClose={() => onCloseModal()}
			>
				<Box direction='column' gap={16} p={'0 24px 24px'}>
					<Loading isLoading={isLoading} />
					<Tabs
						tabsName={t('dashboard_modal_search_customer_tab_detail')}
						menu={menuTabs}
						activeTab={valueTab}
						onChange={(newVal) => setValueTab(newVal)}
					/>
					<Box direction='row' gap={16} $alignItems='center'>
						<Box direction='row' gap={16} $isFullWidth $maxHeight={40} $isFullHeight>
							{[...searchList].map((item) => {
								if (valueTab !== item.value) return null;
								return (
									<Box key={item.key} direction='row' gap={8} $isFullWidth>
										<TextField
											id={SEARCH_CUSTOMER_INPUT_01}
											type={item.type}
											name={item.key}
											placeholder={item.label}
											width={item.width}
											maxLength={item.maxLength}
											pattern={item.pattern?.toString()}
											$isClearable
											value={searchValue[0]}
											error={!!errorTextInput[0]}
											helpingText={errorTextInput[0]}
											onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
												onChangeInputValue(0, e.target.value)
											}
										/>
										{(item?.label2 || item.key === 'full_name') && (
											<TextField
												id={SEARCH_CUSTOMER_INPUT_02}
												type={item.type}
												name={item.key}
												placeholder={item.label2}
												width={item.width}
												minLength={item.maxLength}
												maxLength={item.maxLength}
												pattern={item.pattern?.toString()}
												$isClearable
												value={searchValue[1]}
												error={!!errorTextInput[1]}
												helpingText={errorTextInput[1]}
												onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
													onChangeInputValue(1, e.target.value)
												}
											/>
										)}
									</Box>
								);
							})}
						</Box>
						<Box direction='row' pt={3}>
							<Button
								data-testid={SEARCH_CUSTOMER_BUTTON_ID}
								variant='primary'
								fontWeight='--font-weight-regular'
								onClick={() => validateInput()}
							>
								{t('dashboard_modal_search_customer_tab_detail')}
							</Button>
						</Box>
					</Box>
					{isError ? (
						<Box
							$justifyContent='center'
							$alignItems='center'
							$isFullHeight
							direction='column'
							height={220}
							gap={8}
						>
							<Box pb={8}>
								<Icon icon='alert_circle_bold' width={48} height={48} color={'--color-error'} />
							</Box>
							<TextStyle variant='h5' color='--color-primary'>
								{t('search_customer_service_error_title')}
							</TextStyle>
							<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
								{t('search_customer_service_error_description')}
							</TextStyle>
						</Box>
					) : isEmpty ? (
						<Box
							$justifyContent='center'
							$alignItems='center'
							direction='column'
							$isFullHeight
							height={220}
							gap={16}
						>
							<Icon icon='empty_search' />
							<TextStyle variant='paragraphMedium' color='--color-neutral-grey-light'>
								{t('search_customer_empty_data')}
							</TextStyle>
						</Box>
					) : customerList.length > 0 ? (
						<Table
							className='table-search-customer'
							mode='light'
							size='md'
							$maxHeightTable={'410px'}
							headers={columns}
							values={customerList}
							isPaginationDisabled
							isTableLoading={isLoading}
						/>
					) : (
						<Box $isFullHeight height={220} />
					)}
				</Box>
			</Modal>
		</Box>
	);
};

export default ModalSearchCustomer;
