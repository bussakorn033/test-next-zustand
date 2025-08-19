import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import useModalHistoryContract from '@/hooks/useModalHistoryContract';
import { Box } from '@/shared-components/Box';
import { Modal } from '@/shared-components/Modal';
import { Table } from '@/shared-components/Table';
import { useActivityLog } from 'host/use-activity-log';

interface modalHistoryContract {
	className?: string;
	isShowModal: boolean;
	setIsShowModal: (show: boolean) => void;
}

const ModalHistoryContract = ({ className, isShowModal, setIsShowModal }: modalHistoryContract) => {
	const classnames = classNames(className, 'components-modal-history-contract');
	const { t } = useTranslation();

	const { actlogClosePopup } = useActivityLog();
	const { headers, values } = useModalHistoryContract();

	const onCloseModal = () => {
		actlogClosePopup('History');
		setIsShowModal(false);
	};

	return (
		<Box className={classnames}>
			<Modal
				width={800}
				$minWidth={800}
				isOpen={isShowModal}
				title={t('dashboard_modal_history_contract_title')}
				onClose={onCloseModal}
			>
				<Box p={24} position='relative' $zIndex={800} direction='column' $alignItems='center'>
					<Table
						className='table-history-contract'
						mode='light'
						size='md'
						$maxHeightTable={'430px'}
						headers={headers}
						values={values}
						isPaginationDisabled
						isTableLoading={!isShowModal}
					/>
				</Box>
			</Modal>
		</Box>
	);
};

export default ModalHistoryContract;
