export interface SearchCustomerBody {
	search_type: string;
	search_value: string[];
}

export interface CustomersList {
	rm_id: string;
	id_no: string;
	tha_fullname: string;
	en_fullname: string;
	tha_tname: string;
	tha_fname: string;
	tha_lname: string;
	eng_tname: string;
	eng_fname: string;
	eng_lname: string;
	mobile_no: string;
	birth_date: string;
	oneapp_mobile_banking: boolean;
	customer_status: string;
}

export interface SearchCustomerResponse {
	customers: CustomersList[] | null;
}
