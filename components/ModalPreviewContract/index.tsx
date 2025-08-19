import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import ErrorDisplay from '@/components/ErrorDisplay';
import PreviewContractBox from '@/components/PreviewContractBox';
import useModalPreviewContract from '@/hooks/useModalPreviewContract';
import { useWidget } from '@/hooks/useWidget';
import { Box } from '@/shared-components/Box';
import { Modal } from '@/shared-components/Modal';
import { Tabs } from '@/shared-components/Tabs';
import { Button } from '@/shared-components/Button';
import { useActivityLog } from 'host/use-activity-log';
import EmptyDisplay from '../EmptyDisplay';
import PdfViewer from '../pdf-preview';
import { Loading } from '@/shared-components/Loading';
import ZoomElement from '../ZoomElement';
import * as S from './ModalPreviewContract.style';
import { CREATE_CONTRACT_DOWNLOAD_BUTTON, CREATE_CONTRACT_PRINT_BUTTON } from '@/constants/WIDGET-ID';

interface ModalPreviewContract {
	className?: string;
	isShowModal: boolean;
	setIsShowModal: (show: boolean) => void;
}

const ModalPreviewContract = ({ className, isShowModal, setIsShowModal }: ModalPreviewContract) => {
	const classnames = classNames(className, 'components-modal-preview-contract');
	const { t } = useTranslation();
	const { actlogClosePopup } = useActivityLog();
	const { onCheckWidget } = useWidget();
	const {
		previewBox,
		previewPDF,
		menuTabs,
		valueTab,
		setValueTab,
		isPreviewMSGEmpty,
		isPreviewMSGError,
		isPreviewPDFEmpty,
		isPreviewPDFError,
		fetchPreviewPDF,
		downloadPdfFile,
		printPdfFile
	} = useModalPreviewContract({ isShowModal: isShowModal });

	const renderEmptyOrError = ({
		showEmpty = false,
		showError = false,
		centerHeight = 243,
		onRefresh = () => {}
	}: {
		showEmpty?: boolean | undefined;
		showError?: boolean | undefined;
		centerHeight?: number;
		onRefresh?: () => void;
	}) => (
		<Box width='100%' $boxSizing='border-box' py={centerHeight} direction='row' $justifyContent='center'>
			{showError ? (
				<ErrorDisplay
					moduleName={'Preview'}
					onRefresh={() => {
						onRefresh();
					}}
				/>
			) : showEmpty ? (
				<EmptyDisplay />
			) : (
				<></>
			)}
		</Box>
	);

	const renderPreviewWrapper = (children: React.ReactNode) => (
		<>
			<Box
				width='100%'
				py={24}
				$maxWidth={'375px'}
				$minHeight='400px'
				$boxSizing='border-box'
				$justifyContent='center'
			>
				{children}
			</Box>
		</>
	);

	const renderPreviewTab01 = () => {
		if (isPreviewMSGEmpty || isPreviewMSGError) {
			return renderEmptyOrError({
				showEmpty: Boolean(isPreviewMSGEmpty),
				showError: Boolean(isPreviewMSGError)
			});
		}
		return renderPreviewWrapper(
			<PreviewContractBox
				title={previewBox.title}
				label={previewBox.label}
				image={previewBox.image}
				message={previewBox.message}
				button={previewBox.button}
			/>
		);
	};

	const renderPreviewTab02 = () => {
		if (isPreviewPDFEmpty || isPreviewPDFError) {
			return renderEmptyOrError({
				showEmpty: Boolean(isPreviewPDFEmpty),
				showError: Boolean(isPreviewPDFError),
				onRefresh: () => {
					fetchPreviewPDF();
				}
			});
		}
		return renderPreviewWrapper(
			<Box data-testid='COMPONENTS_PDF_VIEWER_BOX'>
				<PdfViewer
					base64={String(
						previewPDF?.ecm_pdf?.trim() || previewPDF?.context_pdf_offline?.context_pdf_th?.trim()
					)}
				/>
			</Box>
		);
	};

	const onCloseModal = () => {
		actlogClosePopup('Preview');
		setIsShowModal(false);
	};

	const onDownloadPdfFile = async () => {
		const inputPdf = String(
			previewPDF?.ecm_pdf?.trim() || previewPDF?.context_pdf_offline?.context_pdf_th?.trim()
		);
		downloadPdfFile(inputPdf);
	};

	const onPrintPdfFile = async () => {
		const inputPdf = String(
			previewPDF?.ecm_pdf?.trim() || previewPDF?.context_pdf_offline?.context_pdf_th?.trim()
		);
		if (!inputPdf) return;

		printPdfFile(inputPdf);
	};

	return (
		<Box className={classnames}>
			<Modal
				style={{ position: 'relative' }}
				width={1000}
				$minWidth={1000}
				$maxHeight={'704px'}
				isOpen={isShowModal}
				title={t('dashboard_modal_preview_contract_title')}
				onClose={onCloseModal}
			>
				<Loading isLoading={valueTab === 'PREVIEW_TAB_02' && previewPDF?.isLoading} />
				<Box position='relative' direction='column' $isFullWidth>
					{/* Tabs */}
					<Box px={24} position='sticky' top={0} $zIndex={900} $bgColor='--color-neutral-light'>
						<Tabs
							className='dashboard-modal-preview-contract-tabs'
							variant='space-between'
							menu={menuTabs}
							activeTab={valueTab}
							onChange={(newVal) => setValueTab(newVal)}
						/>
					</Box>
					{/* Tabs */}

					{/* Content */}
					<Box
						position='relative'
						$zIndex={800}
						direction='column'
						$overflowY='auto'
						$bgColor='--color-box-preview-bg'
					>
						<Box p={'0 24px'} position='relative' direction='column' $alignItems='center'>
							<ZoomElement
								className={valueTab}
								isZoomable={
									!(isPreviewMSGEmpty || isPreviewMSGError || isPreviewPDFEmpty || isPreviewPDFError)
								}
								minHeight='582px'
								maxHeight='582px'
							>
								{valueTab === 'PREVIEW_TAB_01' && renderPreviewTab01()}
								{valueTab === 'PREVIEW_TAB_02' && renderPreviewTab02()}
							</ZoomElement>

							<Box>
								{valueTab === 'PREVIEW_TAB_02' &&
									!previewPDF?.isLoading &&
									!isPreviewPDFEmpty &&
									!isPreviewPDFError && (
										<S.FloatButton direction='row' gap={16} float='right'>
											{onCheckWidget(CREATE_CONTRACT_DOWNLOAD_BUTTON)?.isAllow && (
												<Button
													data-testid='COMPONENTS_PREVIEW_CONTRACT_BTN_DOWNLOAD'
													variant='ghost-main-no-padding'
													iconLeft='download'
													onClick={() => onDownloadPdfFile()}
												/>
											)}
											{onCheckWidget(CREATE_CONTRACT_PRINT_BUTTON)?.isAllow && (
												<Button
													data-testid='COMPONENTS_PREVIEW_CONTRACT_BTN_PRINT'
													variant='ghost-main-no-padding'
													iconLeft='printer'
													onClick={() => onPrintPdfFile()}
												/>
											)}
										</S.FloatButton>
									)}
							</Box>
						</Box>
					</Box>
					{/* Content */}
				</Box>
			</Modal>
		</Box>
	);
};

export default ModalPreviewContract;
