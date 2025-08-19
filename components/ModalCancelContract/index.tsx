import { useEffect, useState } from 'react';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import { Box } from '@/shared-components/Box';
import { Modal } from '@/shared-components/Modal';
import { Loading } from '@/shared-components/Loading';
import { TextStyle } from '@/shared-components/TextStyle';
import { TextField } from '@/shared-components/TextField';
import { Button } from '@/shared-components/Button';
import { Icon } from '@/shared-components/Icon';
import { useContractStatusCodeStore } from '@/store/contractStatusStore';
import { useContractDetailStore } from '@/store/useContractDetailStore';
import useContractStatus from '@/hooks/useContractStatus';
import { useActivityLog } from 'host/use-activity-log';
import { CANCEL_CONTRACT_DROPDOWN, CANCEL_CONTRACT_BUTTON_OK } from '@/constants/DATA-TESTID';
import * as S from './ModalCancelContract.style';

interface ModalCancelContractProps {
	isShowModal: boolean;
	setIsShowModal: (show: boolean) => void;
}

const ModalCancelContract = ({ isShowModal, setIsShowModal }: ModalCancelContractProps) => {
	const { t } = useCustomTranslation();
	const { actlogClosePopup } = useActivityLog();
	const { onApproveRejectContract } = useContractStatus();
	const { setContractactionType } = useContractStatusCodeStore();
	const { reject_reason_list } = useContractDetailStore();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [reason, setReason] = useState<string>('');
	const [errorTextInput, setErrorTextInput] = useState<string>('');
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!isShowModal) {
			setIsLoading(false);
			setReason('');
			setErrorTextInput('');
		}
	}, [isShowModal]);

	const validateInput = () => {
		let errorText = '';
		if (!reason) {
			errorText = t('create_contract_confirm_cancel_validate_input_empty');
		}

		setErrorTextInput(errorText);
		if (!errorText) {
			setIsLoading(true);
			setContractactionType('DOC_REJECT');
			onApproveRejectContract('DOC_REJECT', reason);
		}
	};

	const onCloseModalCancelReason = () => {
		setIsShowModal(false);
		actlogClosePopup(t('create_contract_cancel_popup_name'));
	};

	const getBorderType = (index: number) => {
		if (reject_reason_list && reject_reason_list.length == 1) {
			return 'all';
		} else {
			switch (index) {
				case 0:
					return 'top-dropdown';
				case reject_reason_list && reject_reason_list.length - 1:
					return 'all-radius-down';
				default:
					return 'center-dropdown';
			}
		}
	};

	return (
		<Modal
			width={600}
			isOpen={isShowModal}
			title={t('create_contract_confirm_cancel_title')}
			isShowIconClose={false}
			onClose={() => onCloseModalCancelReason}
			$isOverflow={true}
		>
			<Box direction='column' px={24} pb={24} gap={16}>
				<Loading isLoading={isLoading} />
				<Box mb={-14}>
					<TextStyle variant='paragraphSmall' color='--color-neutral-grey-light'>
						{t('create_contract_confirm_cancel_description')}
					</TextStyle>
				</Box>
				<S.DropdownWrapper>
					<TextField
						data-testid={CANCEL_CONTRACT_DROPDOWN}
						placeholder={t('create_contract_confirm_cancel_placeholder')}
						value={reason}
						error={!!errorTextInput}
						helpingText={isDropdownOpen ? '' : errorTextInput}
						onChange={() => {}}
						onClick={() => setIsDropdownOpen((prev) => !prev)}
						iconRight={<Icon icon='arrow_down' height={24} width={24} />}
						readOnly
						width='100%'
						style={{
							cursor: 'pointer'
						}}
					/>
					{isDropdownOpen && (
						<S.DropdownMenu direction='column'>
							{reject_reason_list &&
								reject_reason_list.length > 0 &&
								reject_reason_list.map((option, index) => {
									return (
										<Box
											data-testid={option.reject_reason_id}
											key={option.reject_reason_id}
											px={16}
											py={12}
											border={getBorderType(index)}
											$borderWidth={1}
											$borderColor='--color-border-light'
											$borderRadius='md'
											$bgColor='--color-box-bg-light'
											onClick={() => {
												setErrorTextInput('');
												setReason(option.description_th);
												setIsDropdownOpen(false);
											}}
										>
											<TextStyle variant='valueSmall' color='--text-primary-dark'>
												{option.description_th}
											</TextStyle>
										</Box>
									);
								})}
						</S.DropdownMenu>
					)}
				</S.DropdownWrapper>

				<Box direction='row' $justifyContent='end' mt={8} gap={16}>
					<Button variant='secondary' onClick={() => onCloseModalCancelReason()}>
						{t('create_contract_confirm_cancel_secondary_button')}
					</Button>
					<Button
						data-testid={CANCEL_CONTRACT_BUTTON_OK}
						variant='negative'
						onClick={() => validateInput()}
					>
						{t('create_contract_confirm_cancel_primary_button')}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalCancelContract;
