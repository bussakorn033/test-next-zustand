import { useEffect, useState } from 'react';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import { Box } from '@/shared-components/Box';
import { Modal } from '@/shared-components/Modal';
import { Loading } from '@/shared-components/Loading';
import { TextStyle } from '@/shared-components/TextStyle';
import { TextArea } from '@/shared-components/TextArea';
import { Button } from '@/shared-components/Button';
import { isContainInjectionScript } from '@/utils/Utility';
import { useContractStatusCodeStore } from '@/store/contractStatusStore';
import useContractStatus from '@/hooks/useContractStatus';
import { useActivityLog } from 'host/use-activity-log';
import { REJECT_CONTRACT_BUTTON_OK } from '@/constants/DATA-TESTID';

interface ModalRejectContractProps {
	isShowModal: boolean;
	setIsShowModal: (show: boolean) => void;
}

const ModalRejectContract = ({ isShowModal, setIsShowModal }: ModalRejectContractProps) => {
	const { t } = useCustomTranslation();
	const { actlogClosePopup } = useActivityLog();
	const { onApproveRejectContract } = useContractStatus();
	const { setContractactionType } = useContractStatusCodeStore();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [reason, setReason] = useState<string>('');
	const [errorTextInput, setErrorTextInput] = useState<string>('');

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
			errorText = t('create_contract_confirm_reject_validate_input_empty');
		} else if (isContainInjectionScript(reason)) {
			errorText = t('create_contract_confirm_reject_validate_input_script');
		}

		setErrorTextInput(errorText);
		if (!errorText) {
			setIsLoading(true);
			setContractactionType('STAFF_REJECT');
			onApproveRejectContract('STAFF_REJECT', reason.trim());
		}
	};

	const onCloseModalRejectReason = () => {
		setIsShowModal(false);
		actlogClosePopup(t('create_contract_confirm_reject_popup_name'));
	};

	return (
		<Modal
			width={600}
			isOpen={isShowModal}
			title={t('create_contract_confirm_reject_title')}
			isShowIconClose={false}
			onClose={() => onCloseModalRejectReason}
		>
			<Box direction='column' px={24} pb={24} gap={16}>
				<Loading isLoading={isLoading} />
				<Box mb={-14}>
					<TextStyle variant='paragraphSmall' color='--color-neutral-grey-light'>
						{t('create_contract_confirm_reject_description')}
					</TextStyle>
				</Box>
				<TextArea
					placeholder={t('create_contract_confirm_reject_placeholder')}
					value={reason}
					error={!!errorTextInput}
					helpingText={errorTextInput}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReason(e.target.value)}
					maxLength={250}
				/>
				<Box direction='row' $justifyContent='end' mt={8} gap={16}>
					<Button variant='secondary' onClick={() => onCloseModalRejectReason()}>
						{t('create_contract_confirm_reject_secondary_button')}
					</Button>
					<Button
						data-testid={REJECT_CONTRACT_BUTTON_OK}
						variant='negative'
						onClick={() => validateInput()}
					>
						{t('create_contract_confirm_reject_primary_button')}
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalRejectContract;
