import { DashboardData } from '@/dto/DashboardDTO';

/* TODO: Mock data // REMOVE THIS MOCK DATA BEFORE DEPLOYMENT */
export const mockData: DashboardData = {
	total_record: 62,
	contract_lists: [
		{
			customer_contract_id: 'ECONTRACT1754303368610',
			document_running: '941/2568',
			customer_contract_version: 1,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'SUBMIT',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '5727791974902',
				rm_id: '001100000000000000000025570151',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทคหนึ่ง',
				tha_lname: 'ทดสอบ',
				tha_fullname: 'นาย อีคอนแทคหนึ่ง ทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TEST',
				eng_fullname: 'MR ECONTRACT TEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754303357248'
					},
					{
						ref_code: 'contract_number',
						value: '22222'
					},
					{
						ref_code: 'date',
						value: '1754240400000'
					},
					{
						ref_code: 'old_msg',
						value: '3123123'
					},
					{
						ref_code: 'new_msg',
						value: 'qweqweqr'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทคหนึ่ง ทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 941/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'champfem',
					updated_by_name: '302เมกเกอร์ ChampFE',
					updated_date: 1754303368610
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: '302เมกเกอร์ ChampFE',
			created_date: 1754303368610,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: '302เมกเกอร์ ChampFE',
			updated_date: 1754303368610,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754303799827',
			document_running: '944/2568',
			customer_contract_version: 3,
			contract_template_id: 'EcontractTepm_ALChangeinfo_02',
			online_flag: true,
			contract_status_code: 'WAIT_CUST_APP',
			contract_type_code: 'CT_AL002',
			snapshot: {
				id_no: '1864850206086',
				rm_id: '001100000000000000000025570155',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทค',
				tha_lname: 'เตยทดสอบ',
				tha_fullname: 'นาย อีคอนแทค เตยทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TOEYTEST',
				eng_fullname: 'MR ECONTRACT TOEYTEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754303780168'
					},
					{
						ref_code: 'contract_number',
						value: '23-959595'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'test'
					},
					{
						ref_code: 'new_msg',
						value: 'test'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 944/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'contract_expiry_date',
						value: '1754931599999'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/Require_Consent_Inbox_Details_c6929c6d3a.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 23-959595 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest\n\nข้อความใหม่ที่ใช้ทดแทน\ntest\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 23-959595 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest\n\nข้อความใหม่ที่ใช้ทดแทน\ntest\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'CONFIRM',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'REJECT',
						name_th: 'ปฎิเสธ'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'APPROVE',
					updated_by_id: 'wonwisa_approver',
					updated_by_name: 'คิวเอทดสอบแอพพรูพเวอร์ Wonwisamaker',
					updated_date: 1754383005876
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754303823830
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754303799827
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754303799827,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'คิวเอทดสอบแอพพรูพเวอร์ Wonwisamaker',
			updated_date: 1754383005876,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754038893513',
			document_running: '898/2568',
			customer_contract_version: 3,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'SEND_DOC_SUCCESS',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '1864850206086',
				rm_id: '001100000000000000000025570155',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทค',
				tha_lname: 'เตยทดสอบ',
				tha_fullname: 'นาย อีคอนแทค เตยทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TOEYTEST',
				eng_fullname: 'MR ECONTRACT TOEYTEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754038852583'
					},
					{
						ref_code: 'contract_number',
						value: '63-202516'
					},
					{
						ref_code: 'date',
						value: '1755190800000'
					},
					{
						ref_code: 'old_msg',
						value: 'test fail edit'
					},
					{
						ref_code: 'new_msg',
						value: '8/012025'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 898/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: 'idd_98795990-0000-C184-8BA9-8F48B8DBA03A',
			history_log: [
				{
					contract_status_code: 'SEND_DOC_SUCCESS',
					updated_by_id: 'wonwisa_approver',
					updated_by_name: 'คิวเอทดสอบแอพพรูพเวอร์ Wonwisamaker',
					updated_date: 1754382563837
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'econ_po003',
					updated_by_name: 'ธันเดอร์เอ็กเพรส Xiaoyu',
					updated_date: 1754038921939
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754038893513
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754038893513,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'คิวเอทดสอบแอพพรูพเวอร์ Wonwisamaker',
			updated_date: 1754382563837,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: true
		},
		{
			customer_contract_id: 'ECONTRACT1754381371160',
			document_running: '991/2568',
			customer_contract_version: 1,
			contract_template_id: 'EcontractTepm_ALChangeinfo_06',
			online_flag: true,
			contract_status_code: 'SUBMIT',
			contract_type_code: 'CT_AL006',
			snapshot: {
				id_no: '1100702565706',
				rm_id: '001100000000000000000025551428',
				tha_tname: 'น.ส.',
				tha_fname: 'นัฐพร',
				tha_lname: 'ค้อมทอง',
				tha_fullname: 'น.ส. นัฐพร ค้อมทอง',
				eng_tname: 'MISS',
				eng_fname: 'NATTHAPORN',
				eng_lname: 'KOMTHONG',
				eng_fullname: 'MISS NATTHAPORN KOMTHONG',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754381263419'
					},
					{
						ref_code: 'contract_number',
						value: '23-569758'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'Test for PF2'
					},
					{
						ref_code: 'new_msg',
						value: 'Test for PF2'
					},
					{
						ref_code: 'customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 991/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'contract_expiry_date',
						value: ''
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/announce_b96604202f.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน {contract_expiry_date}\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน {contract_expiry_date}\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'Confirm',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'Reject',
						name_th: 'ปฏิเสธ'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754381371160
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754381371160,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'ราชชมภู Punnaporn',
			updated_date: 1754381371160,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754378249464',
			document_running: '990/2568',
			customer_contract_version: 1,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'DRAFT',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '7034495071481',
				rm_id: '001100000000000000000025570152',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทคบอส',
				tha_lname: 'ทดสอบ',
				tha_fullname: 'นาย อีคอนแทคบอส ทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACTBOSS',
				eng_lname: 'TEST',
				eng_fullname: 'MR ECONTRACTBOSS TEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754378110341'
					},
					{
						ref_code: 'contract_number',
						value: '456'
					},
					{
						ref_code: 'date',
						value: '1754499600000'
					},
					{
						ref_code: 'old_msg',
						value: 'test'
					},
					{
						ref_code: 'new_msg',
						value: 'test'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทคบอส ทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 990/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'atapol_maker',
					updated_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
					updated_date: 1754378249464
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
			created_date: 1754378249464,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
			updated_date: 1754378249464,
			can_edit_contract_flag: true,
			can_delete_contract_flag: true,
			can_preview_message_flag: false,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754375011424',
			document_running: '988/2568',
			customer_contract_version: 2,
			contract_template_id: 'EcontractTepm_ALChangeinfo_02',
			online_flag: true,
			contract_status_code: 'WAIT_CUST_APP',
			contract_type_code: 'CT_AL002',
			snapshot: {
				id_no: '1864850206086',
				rm_id: '001100000000000000000025570155',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทค',
				tha_lname: 'เตยทดสอบ',
				tha_fullname: 'นาย อีคอนแทค เตยทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TOEYTEST',
				eng_fullname: 'MR ECONTRACT TOEYTEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754374843329'
					},
					{
						ref_code: 'contract_number',
						value: '52-686964'
					},
					{
						ref_code: 'date',
						value: '1754413200000'
					},
					{
						ref_code: 'old_msg',
						value: 'Test'
					},
					{
						ref_code: 'new_msg',
						value: 'Test'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 988/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'contract_expiry_date',
						value: '1754931599999'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/Require_Consent_Inbox_Details_c6929c6d3a.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 52-686964 ฉบับวันที่ 06 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\nTest\n\nข้อความใหม่ที่ใช้ทดแทน\nTest\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 52-686964 ฉบับวันที่ 06 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\nTest\n\nข้อความใหม่ที่ใช้ทดแทน\nTest\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'CONFIRM',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'REJECT',
						name_th: 'ปฎิเสธ'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'APPROVE',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754375329867
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754375011424
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754375011424,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
			updated_date: 1754375329867,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754383829758',
			document_running: '999/2568',
			customer_contract_version: 4,
			contract_template_id: 'EcontractTepm_ALChangeinfo_02',
			online_flag: true,
			contract_status_code: 'SEND_DOC_SUCCESS',
			contract_type_code: 'CT_AL002',
			snapshot: {
				id_no: '1343756006897',
				rm_id: '001100000000000000000025552651',
				tha_tname: 'นาย',
				tha_fname: 'แพลตฟอร์มสอง',
				tha_lname: 'ทดสอบ',
				tha_fullname: 'นาย แพลตฟอร์มสอง ทดสอบ',
				eng_tname: 'Mr.',
				eng_fname: 'PLATFORMTWO',
				eng_lname: 'TEST',
				eng_fullname: 'Mr. PLATFORMTWO TEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754383792792'
					},
					{
						ref_code: 'contract_number',
						value: '25-656565'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'test-jew-econ message id 001'
					},
					{
						ref_code: 'new_msg',
						value: 'pf2'
					},
					{
						ref_code: 'customer_name',
						value: 'แพลตฟอร์มสอง ทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 999/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'แพลตฟอร์มสอง ทดสอบ'
					},
					{
						ref_code: 'contract_expiry_date',
						value: '1754931599999'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/Require_Consent_Inbox_Details_c6929c6d3a.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 25-656565 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest-jew-econ message id 001\n\nข้อความใหม่ที่ใช้ทดแทน\npf2\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 25-656565 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest-jew-econ message id 001\n\nข้อความใหม่ที่ใช้ทดแทน\npf2\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'CONFIRM',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'REJECT',
						name_th: 'ปฎิเสธ'
					}
				]
			},
			ecm_doc_id: 'idd_98797010-0000-C1DC-8239-79C192F42089',
			history_log: [
				{
					contract_status_code: 'SEND_DOC_SUCCESS',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754384044017
				},
				{
					contract_status_code: 'CUST_SIGNED',
					updated_by_id: '001100000000000000000025552651',
					updated_by_name: 'ลูกค้า',
					updated_date: 1754383879672
				},
				{
					contract_status_code: 'APPROVE',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754383843066
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754383829758
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754383829758,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
			updated_date: 1754384044017,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: true
		},
		{
			customer_contract_id: 'ECONTRACT1754383645361',
			document_running: '998/2568',
			customer_contract_version: 4,
			contract_template_id: 'EcontractTepm_ALChangeinfo_02',
			online_flag: true,
			contract_status_code: 'SEND_DOC_SUCCESS',
			contract_type_code: 'CT_AL002',
			snapshot: {
				id_no: '1100702565706',
				rm_id: '001100000000000000000025551428',
				tha_tname: 'น.ส.',
				tha_fname: 'นัฐพร',
				tha_lname: 'ค้อมทอง',
				tha_fullname: 'น.ส. นัฐพร ค้อมทอง',
				eng_tname: 'MISS',
				eng_fname: 'NATTHAPORN',
				eng_lname: 'KOMTHONG',
				eng_fullname: 'MISS NATTHAPORN KOMTHONG',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754383618432'
					},
					{
						ref_code: 'contract_number',
						value: '63-252525'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'test'
					},
					{
						ref_code: 'new_msg',
						value: 'pf-econ001'
					},
					{
						ref_code: 'customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 998/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'contract_expiry_date',
						value: '1754931599999'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/Require_Consent_Inbox_Details_c6929c6d3a.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 63-252525 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest\n\nข้อความใหม่ที่ใช้ทดแทน\npf-econ001\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ 63-252525 ฉบับวันที่ 05 สิงหาคม 2568\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\ntest\n\nข้อความใหม่ที่ใช้ทดแทน\npf-econ001\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน 11 สิงหาคม 2568\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'CONFIRM',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'REJECT',
						name_th: 'ปฎิเสธ'
					}
				]
			},
			ecm_doc_id: 'idd_98796F20-0000-C159-9D38-34AED94AB8AF',
			history_log: [
				{
					contract_status_code: 'SEND_DOC_SUCCESS',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754383978101
				},
				{
					contract_status_code: 'CUST_SIGNED',
					updated_by_id: '001100000000000000000025551428',
					updated_by_name: 'ลูกค้า',
					updated_date: 1754383777326
				},
				{
					contract_status_code: 'APPROVE',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754383670152
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754383645361
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754383645361,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
			updated_date: 1754383978101,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: true
		},
		{
			customer_contract_id: 'ECONTRACT1754382790579',
			document_running: '995/2568',
			customer_contract_version: 1,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: false,
			contract_status_code: 'CREATED',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '00000005341183',
				rm_id: '001100000000000000000005341183',
				tha_tname: 'น.ส.',
				tha_fname: 'ทดสอบ',
				tha_lname: 'ทดสอบ',
				tha_fullname: 'น.ส. ทดสอบ ทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'NAME',
				eng_lname: 'TEST',
				eng_fullname: 'MR NAME TEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754382769512'
					},
					{
						ref_code: 'contract_number',
						value: '13213124'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'dsafdafdag'
					},
					{
						ref_code: 'new_msg',
						value: 'dafdafdafaf'
					},
					{
						ref_code: 'customer_name',
						value: 'น.ส. ทดสอบ ทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 995/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'CREATED',
					updated_by_id: 'econ_m007',
					updated_by_name: 'ฮุนได Uncle',
					updated_date: 1754382790579
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ฮุนได Uncle',
			created_date: 1754382790579,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'ฮุนได Uncle',
			updated_date: 1754382790579,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: false,
			can_preview_pdf_flag: true
		},
		{
			customer_contract_id: 'ECONTRACT1754381562677',
			document_running: '992/2568',
			customer_contract_version: 1,
			contract_template_id: 'EcontractTepm_ALChangeinfo_06',
			online_flag: true,
			contract_status_code: 'SUBMIT',
			contract_type_code: 'CT_AL006',
			snapshot: {
				id_no: '1100702565706',
				rm_id: '001100000000000000000025551428',
				tha_tname: 'น.ส.',
				tha_fname: 'นัฐพร',
				tha_lname: 'ค้อมทอง',
				tha_fullname: 'น.ส. นัฐพร ค้อมทอง',
				eng_tname: 'MISS',
				eng_fname: 'NATTHAPORN',
				eng_lname: 'KOMTHONG',
				eng_fullname: 'MISS NATTHAPORN KOMTHONG',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754381502327'
					},
					{
						ref_code: 'contract_number',
						value: '63-254585'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'Test PF2'
					},
					{
						ref_code: 'new_msg',
						value: 'Test PF2 Approve'
					},
					{
						ref_code: 'customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 992/2568'
					},
					{
						ref_code: 'signature_customer_name',
						value: 'น.ส. นัฐพร ค้อมทอง'
					},
					{
						ref_code: 'contract_expiry_date',
						value: ''
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/announce_b96604202f.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน {contract_expiry_date}\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากในสัญญาเช่าซื้อฉบับดังกล่าวมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริง เพื่อความถูกต้องของสัญญาเช่าซื้อ ธนาคารจึงขอแจ้งเปลี่ยนแปลงข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nโปรดยืนยันการแก้ไขข้อมูลภายใน {contract_expiry_date}\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'Confirm',
						name_th: 'ยืนยัน'
					},
					{
						seq: 2,
						name_en: 'Reject',
						name_th: 'ปฏิเสธ'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754381562677
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754381562677,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'ราชชมภู Punnaporn',
			updated_date: 1754381562677,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754304232763',
			document_running: '945/2568',
			customer_contract_version: 3,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'DRAFT',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '1864850206086',
				rm_id: '001100000000000000000025570155',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทค',
				tha_lname: 'เตยทดสอบ',
				tha_fullname: 'นาย อีคอนแทค เตยทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TOEYTEST',
				eng_fullname: 'MR ECONTRACT TOEYTEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754304211681'
					},
					{
						ref_code: 'contract_number',
						value: '25-636363'
					},
					{
						ref_code: 'date',
						value: '1754413200000'
					},
					{
						ref_code: 'old_msg',
						value: 'test tg'
					},
					{
						ref_code: 'new_msg',
						value: 'test'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 945/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754378261919
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'econ_po003',
					updated_by_name: 'ธันเดอร์เอ็กเพรส Xiaoyu',
					updated_date: 1754304279390
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754304232763
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754304232763,
			updated_by_role_name: 'ECONTRACT_MAKER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'ราชชมภู Punnaporn',
			updated_date: 1754378261919,
			can_edit_contract_flag: true,
			can_delete_contract_flag: true,
			can_preview_message_flag: false,
			can_preview_pdf_flag: false
		},
		{
			customer_contract_id: 'ECONTRACT1754375240377',
			document_running: '989/2568',
			customer_contract_version: 4,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'SEND_DOC_SUCCESS',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '7034495071481',
				rm_id: '001100000000000000000025570152',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทคบอส',
				tha_lname: 'ทดสอบ',
				tha_fullname: 'นาย อีคอนแทคบอส ทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACTBOSS',
				eng_lname: 'TEST',
				eng_fullname: 'MR ECONTRACTBOSS TEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754375193817'
					},
					{
						ref_code: 'contract_number',
						value: '42154'
					},
					{
						ref_code: 'date',
						value: '1754326800000'
					},
					{
						ref_code: 'old_msg',
						value: 'tet 123'
					},
					{
						ref_code: 'new_msg',
						value: 'testst fghfg      \ndghgdfhhg  fhfgh\nfgfghfghg'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทคบอส ทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 989/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: 'idd_9878FE70-0000-C12D-981E-DF64AA92F9AF',
			history_log: [
				{
					contract_status_code: 'SEND_DOC_SUCCESS',
					updated_by_id: 'kittin_a007',
					updated_by_name: 'ลิ้ิมสมเกียรติ Kittin',
					updated_date: 1754376594962
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'atapol_maker',
					updated_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
					updated_date: 1754375263898
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'atapol_maker',
					updated_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
					updated_date: 1754375254393
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'atapol_maker',
					updated_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
					updated_date: 1754375240377
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'จิตรักมั่นเมกเกอร์ atapolmaker',
			created_date: 1754375240377,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'ลิ้ิมสมเกียรติ Kittin',
			updated_date: 1754376594962,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: true
		},
		{
			customer_contract_id: 'ECONTRACT1754367358996',
			document_running: '974/2568',
			customer_contract_version: 4,
			contract_template_id: 'EcontractTepm_ALChangeinfo_01',
			online_flag: true,
			contract_status_code: 'STAFF_REJECT',
			contract_type_code: 'CT_AL001',
			snapshot: {
				id_no: '1864850206086',
				rm_id: '001100000000000000000025570155',
				tha_tname: 'นาย',
				tha_fname: 'อีคอนแทค',
				tha_lname: 'เตยทดสอบ',
				tha_fullname: 'นาย อีคอนแทค เตยทดสอบ',
				eng_tname: 'MR',
				eng_fname: 'ECONTRACT',
				eng_lname: 'TOEYTEST',
				eng_fullname: 'MR ECONTRACT TOEYTEST',
				meta_data: [
					{
						ref_code: 'datenow',
						value: '1754367328775'
					},
					{
						ref_code: 'contract_number',
						value: '65-585858'
					},
					{
						ref_code: 'date',
						value: '1754413200000'
					},
					{
						ref_code: 'old_msg',
						value: 'testtedit'
					},
					{
						ref_code: 'new_msg',
						value: 'testt'
					},
					{
						ref_code: 'customer_name',
						value: 'นาย อีคอนแทค เตยทดสอบ'
					},
					{
						ref_code: 'document_running',
						value: 'ttb-e 974/2568'
					}
				],
				message_title_th: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_en: 'แจ้งแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์',
				message_title_img:
					'https://ccms-bau.tau2904.com/upload/file/ccms-public-bau/assets/View_Document_Inbox_details_3cfa7ab5c5.png',
				context_message_th:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				context_message_en:
					'อ้างถึง สัญญาเช่าซื้อ เลขที่ {contract_number} ฉบับวันที่ {date}\n\nเนื่องจากสัญญาเช่าซื้อฉบับที่อ้างถึงมีข้อมูลบางรายการที่ระบุไว้คลาดเคลื่อนไปจากข้อเท็จจริงในเอกสารทางทะเบียน ธนาคารจึงขอแจ้งเปลี่ยนแปลงรายการข้อมูลในสัญญาเช่าซื้อ ดังต่อไปนี้\n\nข้อความเก่า\n{old_msg}\n\nข้อความใหม่ที่ใช้ทดแทน\n{new_msg}\n\nทั้งนี้ รายการแก้ไขเปลี่ยนแปลงที่แจ้งตามหนังสือฉบับนี้ ให้ถือเป็นส่วนหนึ่งของสัญญาเช่าซื้อฉบับที่อ้างถึงข้างต้นด้วย\n\nหากมีข้อสงสัย โปรดติดต่อ RLO งาน Contract & Credit File\nคุณจิดาภา วรรณะพาหุณ, คุณสุพัตรา ไวยภาษ โทร 02-242-3316, 02-242-3318',
				message_button: [
					{
						seq: 1,
						name_en: 'See Document',
						name_th: 'ดูเอกสาร'
					}
				]
			},
			ecm_doc_id: null,
			history_log: [
				{
					contract_status_code: 'STAFF_REJECT',
					updated_by_id: 'econ_a006',
					updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
					updated_date: 1754376715872
				},
				{
					contract_status_code: 'SUBMIT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754367731099
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754367414702
				},
				{
					contract_status_code: 'DRAFT',
					updated_by_id: 'punnaporn_maker',
					updated_by_name: 'ราชชมภู Punnaporn',
					updated_date: 1754367358996
				}
			],
			created_by_role_name: 'ECONTRACT_MAKER_RL',
			created_by_role_group_id: 2,
			created_by_name: 'ราชชมภู Punnaporn',
			created_date: 1754367358996,
			updated_by_role_name: 'ECONTRACT_APPROVER_RL',
			updated_by_role_group_id: 2,
			updated_by_name: 'จึ๋งปั๋ง Seehanuiapprovertest',
			updated_date: 1754376715872,
			can_edit_contract_flag: false,
			can_delete_contract_flag: false,
			can_preview_message_flag: true,
			can_preview_pdf_flag: false
		}
	],
	masters: [
		{
			id: 'CONTRACT_STATUS',
			details: [
				{
					code: 'DARFT',
					description_th: 'แบบร่าง',
					description_en: 'draft',
					history_description_th: 'บันทึกแบบร่าง',
					history_description_en: 'SAVE DRAFT',
					filter_flag: true
				},
				{
					code: 'SUBMIT',
					description_th: 'รออนุมัติ',
					description_en: 'WAIT APP',
					history_description_th: 'สร้างสัญญา',
					history_description_en: 'CREATE CONTRACT',
					filter_flag: true
				},
				{
					code: 'STAFT_REJECT',
					description_th: 'ไม่อนุมัติ',
					description_en: 'STAFT REJECT',
					history_description_th: 'ไม่อนุมัติสัญญา',
					history_description_en: 'NOT APPROVED',
					filter_flag: true
				},
				{
					code: 'APPROVE',
					description_th: 'อนุมัติ',
					description_en: 'APPROVE',
					history_description_th: 'อนุมัติสัญญา',
					history_description_en: 'APPROVED',
					filter_flag: false
				},
				{
					code: 'WAIT_CUST_APP',
					description_th: 'รอลูกค้าตอบกลับ',
					description_en: 'WAIT CUST APP',
					history_description_th: null,
					history_description_en: null,
					filter_flag: true
				},
				{
					code: 'CUST_SIGNED',
					description_th: 'ลูกค้ายอมรับ',
					description_en: 'CUST SIGNED',
					history_description_th: 'ลูกค้ายืนยัน',
					history_description_en: 'CUSTOMER CONFIRMATION',
					filter_flag: false
				},
				{
					code: 'CUST_REJECT',
					description_th: 'ลูกค้าปฏิเสธ',
					description_en: 'CUST REJECT',
					history_description_th: 'ลูกค้าปฏิเสธ',
					history_description_en: 'CUSTOMER REJECTS',
					filter_flag: true
				},
				{
					code: 'WAIT_CONFIRM',
					description_th: 'รอยืนยัน',
					description_en: 'WAIT CONFIRM',
					history_description_th: null,
					history_description_en: null,
					filter_flag: true
				},
				{
					code: 'DOC_REJECT',
					description_th: 'ปฏิเสธการส่งเอกสาร',
					description_en: 'DOCUMENT REJECT',
					history_description_th: 'ยกเลิกการแก้ไข',
					history_description_en: 'CANCEL EDIT',
					filter_flag: true
				},
				{
					code: 'EXPIRE',
					description_th: 'หมดอายุ',
					description_en: 'Expired',
					history_description_th: '-',
					history_description_en: '-',
					filter_flag: true
				},
				{
					code: 'CONFIRM_SUBMISSION',
					description_th: 'ยืนยันการส่งเอกสาร',
					description_en: 'CONFIRM SUBMISSION',
					history_description_th: null,
					history_description_en: null,
					filter_flag: false
				},
				{
					code: 'SEND_DOC_SUCCESS',
					description_th: 'ส่งเอกสารสำเร็จ',
					description_en: 'SEND DOCUMENT SUCCESS',
					history_description_th: 'ส่งเอกสารสำเร็จ',
					history_description_en: 'DOCUMENT SUBMISSION',
					filter_flag: true
				},
				{
					code: 'CREATED',
					description_th: 'สร้างเอกสารสำเร็จ',
					description_en: 'CREATED',
					history_description_th: 'สร้างเอกสารสำเร็จ',
					history_description_en: 'CREATED',
					filter_flag: true
				}
			]
		},
		{
			id: 'CONTRACT_TYPE',
			details: [
				{
					code: 'CT_AL001',
					description_th: 'หนังสือแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์ - ข้อมูลทั่วไป',
					description_en: 'Editing data items in the hire purchase contract (general)'
				},
				{
					code: 'CT_AL002',
					description_th: 'หนังสือแก้ไขรายการข้อมูลในสัญญาเช่าซื้อรถยนต์ - วันชำระ',
					description_en: 'Edit lease contract information - payment date'
				}
			]
		}
	]
};
export const mockDataContractList = { ...mockData };
