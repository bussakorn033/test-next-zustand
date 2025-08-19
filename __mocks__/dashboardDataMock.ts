import { vi } from 'vitest';

export const mockUseDashboardData = {
	contracts: undefined,
	contractsList: [],
	contractsListMaster: [],
	handleResetPage: vi.fn(),
	handleFilterChange: vi.fn(),
	handleFilterBtnSearch: vi.fn(),
	handleFilterBtnReset: vi.fn(),
	paginationOptions: [],
	pagination: {
		page: 1,
		limit: 50,
		count: 0
	},
	headers: [],
	values: [],
	filterByUserOptions: [],
	filterByUserOptionsActive: 'FullName',
	setFilterByUserOptionsActive: vi.fn(),
	filterByTypeDocOptions: [],
	filterByTypeDocOptionsActive: null,
	setFilterByTypeDocOptionsActive: vi.fn(),
	filterByStatusDocOptions: [],
	filterByStatusDocOptionsActive: null,
	setFilterByStatusDocOptionsActive: vi.fn(),
	isShowModalSearchCustomer: false,
	setIsShowModalSearchCustomer: vi.fn(),
	isShowModalHistory: false,
	setIsShowModalHistory: vi.fn(),
	isShowModalPreview: false,
	setIsShowModalPreview: vi.fn(),
	searchFilterList: [
		{
			key: 'FullName',
			name: 'firstName',
			name2: 'lastName',
			type: 'text',
			pattern: '^(?!.*\u0E3F)[A-Za-zก-๙\\s-]*$',
			width: '100%',
			label: 'First Name',
			label2: 'Last Name'
		}
	],
	filtersError: {},
	setFiltersError: vi.fn(),
	isFilterSearch: false,
	setIsFilterSearch: vi.fn(),
	isFilterBtnSearch: false,
	setIsFilterBtnSearch: vi.fn(),
	sort: {
		key: 'updated_date',
		name: 'updated_date',
		sortBy: 'desc'
	},
	setSort: vi.fn(),
	filters: {
		firstName: '',
		lastName: '',
		cardId: '',
		passport: '',
		createdBy: ''
	},
	setFilters: vi.fn(),
	resetFilters: vi.fn(),
	resetFiltersError: vi.fn(),
	setContractsListDashboard: vi.fn(),
	setContractsSelectDashboard: vi.fn(),
	restoreDashboard: vi.fn(),
	isLoading: false,
	setIsLoading: vi.fn(),
	getMasterDetails: vi.fn(),
	isClickedRow: false,
	setIsClickedRow: vi.fn(),
	fetchDashboardData: vi.fn(),
	contractTypeDetails: [],
	handleValidateFetchDashboardData: vi.fn(() => {
		mockUseDashboardData.setIsFilterBtnSearch(false);
		mockUseDashboardData.fetchDashboardData();
	}),
	isFilterBtnResetSearch: false
};
