export interface Status {
	code: string;
	message: string;
	service: string;
	description: {
		th: string;
		en: string;
	};
}

export interface MasterDetail {
	code?: string;
	description_th?: string;
	description_en?: string;
	history_description_th?: string | null;
	history_description_en?: string | null;
	contract_status_code?: string;
	contract_type_description_th?: string;
	contract_type_description_en?: string;
	contract_status_description_th?: string;
	contract_status_description_en?: string;
	filter_flag?: boolean;
}

export interface MasterData {
	id?: string;
	details?: MasterDetail[];
}

export interface HistoryLog {
	contract_status_code?: string;
	contract_type_description_th?: string;
	contract_type_description_en?: string;
	updated_by_id?: string;
	updated_by_name: string;
	updated_date?: number;
}

export interface MetaDataItem {
	ref_code?: string;
	ref_name?: string;
	value?: string;
}

export interface MessageButton {
	seq: number;
	name_en: string;
	name_th: string;
}

export interface Snapshot {
	id_no?: string;
	rm_id?: string;
	tha_tname?: string;
	tha_fname?: string;
	tha_lname?: string;
	tha_fullname?: string;
	eng_tname?: string;
	eng_fname?: string;
	eng_lname?: string;
	eng_fullname?: string;
	meta_data?: MetaDataItem[];
	message_title_th?: string;
	message_title_en?: string;
	message_title_img?: string;
	context_message_th?: string;
	context_message_en?: string;
	message_button?: MessageButton[];
}

export interface ContractList {
	customer_contract_id?: string;
	document_running?: string;
	customer_contract_version?: number;
	contract_template_id?: string;
	online_flag?: boolean;
	contract_status_code?: string;
	contract_status_description_th?: string;
	contract_status_description_en?: string;
	contract_type_code?: string;
	contract_type_description_th?: string;
	contract_type_description_en?: string;
	snapshot?: Snapshot;
	ecm_doc_id?: string | null;
	history_log?: HistoryLog[];
	created_by_role_name?: string;
	created_by_role_group_id?: number;
	created_by_id?: string;
	created_by_name?: string;
	created_date?: number;
	updated_by_role_name?: string;
	updated_by_role_group_id?: number;
	updated_by_id?: string;
	updated_by_name?: string;
	updated_date?: number;
	can_edit_contract_flag?: boolean;
	can_delete_contract_flag?: boolean;
	can_preview_message_flag?: boolean;
	can_preview_pdf_flag?: boolean;
}

export interface DashboardData {
	total_record?: number;
	contract_lists?: ContractList[];
	masters?: MasterData[];
	isError?: boolean;
	isEmpty?: boolean;
	isLoading?: boolean;
}

export interface FetchDashboardDataParams {
	master_flag?: boolean;
	contract_status_code_list?: string[];
	contract_type_code_list?: string[];
	cust_fname?: string;
	cust_lname?: string;
	cust_cid?: string;
	cust_passport?: string;
	filter_by_name?: string;
	sort_by_key?: string;
	sort_type?: string;
	page_size?: number;
	page_number?: number;
}

export interface ContextPdfOffline {
	context_pdf_th?: string;
	context_pdf_en?: string;
}

export interface DashboardPreviewPDFData {
	file_name?: string;
	context_pdf_offline?: ContextPdfOffline | null;
	ecm_pdf?: string | null;
	isError?: boolean;
	isEmpty?: boolean;
	isLoading?: boolean;
}
