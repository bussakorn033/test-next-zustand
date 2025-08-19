export type ExtractedField = {
  fieldType: string;
  value: string;
};

export type ContractListMetaData = {
  code: string;
  description_th: string;
  description_en: string;
};

export type MetaDataField = {
  ref_code: string;
  description_th: string;
  description_en: string;
  type: string;
  format: string;
  placeholder: string;
  require_flag: boolean;
  tooltip_text_th: string;
  tooltip_text_en: string;
  length: number;
  value: string;
};

export type ContractData = {
  contract_template_id: string;
  contract_template_version: number;
  require_sign_flag: boolean;
  require_edit_doc_flag: boolean;
  announce_messaging_id: string | null;
  announce_status_contract: string | null;
  expire_date: number | null;
  reject_modify_messaging_id: string | null;
  reject_status_contract: string | null;
  complete_status_contract: string | null;
  ecm_upload_messaging_id: string | null;
  message_title_th: string;
  message_title_en: string;
  message_title_img: string;
  context_message_th: string;
  context_message_en: string;
  created_date: number;
  updated_date: number;
  context_pdf_online: PDFContext;
  context_pdf_offline: PDFContext;
  message_button: MessageButton[] | null;
  meta_data: MetaDataItem[];
  reject_reason_list: RejectReason[] | null;
};

export type PDFContext = {
  context_pdf_th: string;
  context_pdf_en: string;
};

export type MessageButton = {
  seq: number;
  name_th: string;
  name_en: string;
};

export type MetaDataItem = {
  ref_code: string;
  value_of_th: string | null;
  value_of_en: string | null;
  description_th: string;
  description_en: string;
  type?: string;
  format: string | null;
  placeholder_th: string | null;
  placeholder_en: string | null;
  require_flag: boolean;
  length: number;
  tooltip_text_th: string | null;
  tooltip_text_en: string | null;
  show_on_message_box_flag: boolean;
  show_on_screen_flag: boolean;
  show_on_pdf_flag: boolean;
  value: string;
};

export type RejectReason = {
  reject_reason_id: number;
  description_th: string;
  description_en: string;
};

export type ContractResponse = {
  customer_contract_id: string;
  customer_contract_version: number;
  updated_date: number;
};

export type ContractPreRequest = {
  customer_contract_id: string;
  customer_contract_version: number;
  document_running: string;
  contract_template_id: string;
  contract_template_version: number;
  message_title_th: string;
  message_title_en: string;
  message_title_img: string;
  context_message_th: string;
  context_message_en: string;
  message_button: MessageButton[];
  meta_data: MetaDataItem[];
  expire_date: number;
};

export interface MetaData {
  ref_code: string;
  value: string;
}

export interface Snapshot {
  id_no: string;
  rm_id: string;
  tha_tname: string;
  tha_fname: string;
  tha_lname: string;
  eng_tname: string;
  eng_fname: string;
  eng_lname: string;
  meta_data: MetaData[];
  message_title_th: string;
  message_title_en: string;
  message_title_img: string;
  context_message_en: string;
  context_message_th: string;
  message_button: MessageButton[];
}

export interface ContractRequest {
  customer_contract_id?: string;
  customer_contract_version?: number;
  document_running?: string;
  contract_template_id: string;
  contract_template_version: number;
  online_flag: boolean;
  contract_status_code: string;
  contract_type_code: string;
  snapshot: Snapshot;
  expire_date: number;
  isCreate: boolean;
}

export interface MasterDetailsStatus {
  code: string;
  variant: string;
  description_th: string;
  description_en: string;
  history_description_th: string;
  history_description_en: string;
}

export interface MasterDetailsDoc {
  code: string;
  description_th: string;
  description_en: string;
}

export interface ContractStatusCodeProps {
  updated_date?: number;
}

export interface HistoLogProps {
  contract_status_code: string;
  updated_by_id: string;
  updated_by_name: string;
  update_date: number;
}

export interface ContractDetailProps {
  customer_contract_id: string;
  document_running: string;
  customer_contract_version: number;
  contract_template_id: string;
  contract_template_version: number;
  file_name: string;
  online_flag: boolean;
  contract_status_code: string;
  contract_type_code: string;
  require_sign_flag: boolean;
  require_edit_doc_flag: boolean;
  announce_messaging_id: string;
  announce_status_contract: string;
  expire_date: number | null;
  reject_modify_messaging_id: string | null;
  reject_status_contract: string | null;
  complete_status_contract: string | null;
  ecm_upload_messaging_id: string | null;
  message_title_th: string;
  message_title_en: string;
  message_title_img: string;
  context_message_th: string;
  context_message_en: string;
  context_pdf_online: PDFContext | null;
  context_pdf_offline: PDFContext | null;
  message_button: MessageButton[] | null;
  meta_data: MetaDataItem[] | null;
  reject_reason_list: RejectReason[] | null;
  send_sign_date: number;
  expiry: number;
  confirm_edit_date: number;
  ecm_doc_id: string;
  reject_reason_staff: string | null;
  reject_reason_customer: string | null;
  history_log: HistoLogProps[] | null;
  created_by_role_group_id: string;
  created_by_role_name: string;
  created_by_name: string;
  created_date: number;
  updated_by_role_group_id: string;
  updated_by_role_name: string;
  updated_by_name: string;
  updated_date: number;
}
