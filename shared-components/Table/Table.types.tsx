// write a typescript interface for the Table component

/**
 * Table component props.
 *
 * @param headers - An array of header definitions for the table. Each header should include:
 *   - key: Unique identifier for the column.
 *   - value: Text or React node to display as the header.
 *   - alignHeader: Alignment for the header text ('left', 'center', 'right', etc.).
 *   - align: Alignment for the cell content ('left', 'center', 'right', etc.).
 *   - sortBy: Initial sort direction ('asc', 'desc', or 'sorting').
 *   - isSort: Indicates whether the column is sortable.
 *   - onClick: Callback invoked when the header is clicked (e.g., to trigger sorting).
 *   - flex: Flex value to control the width of the column.
 *   - $minWidth, $maxWidth: Minimum and maximum widths for the column.
 *   - icon: Optional icon to display in the header.
 *
 * @param values - A 2D array of TableColumn objects representing the table rows and cells.
 *
 * @param className - Custom CSS class name(s) applied to the table container.
 *
 * @param minHeightTable - Minimum height of the table (e.g., "100px", "auto").
 * @param $maxHeightTable - Maximum height of the table (e.g., "350px", "100%").
 *
 * @param paginationOptions - Array of pagination options; each option must include:
 *   - id: A unique identifier for the option.
 *   - label: The display label (often the number of items per page).
 *
 * @param page - Current page number.
 * @param limit - Number of rows per page.
 * @param count - Total number of available items.
 *
 * @param onPageChange - Callback function called when the page is changed.
 * @param onLimitChange - Callback function called when the limit (items per page) is changed.
 *
 * @param isPaginationDisabled - Disables pagination controls when set to true.
 * @param mode - Visual mode of the table (e.g., 'dark' or 'light').
 * @param size - Size variant of the table ('md', 'lg', etc.).
 */
export type SortDirection = 'asc' | 'desc' | 'sorting' | string | undefined;
export type Align = 'left' | 'center' | 'right' | string | undefined;

export interface Pagination {
	page: number;
	limit: number;
	count: number;
}

export interface OnClickCellParams {
	key?: string;
	row?: number;
	col?: number;
	sortBy?: SortDirection;
	[key: string]: any;
}

export interface PaginationOptions {
	id: string | number;
	label: string | number;
}

export interface TableColumn {
	key?: string | undefined;
	value: string | React.ReactNode;
	alignHeader?: Align;
	align?: Align;
	sortBy?: SortDirection;
	isSort?: boolean;
	onClick?: (params: OnClickCellParams) => void | null;
	flex?: number | string;
	$minWidth?: number | string;
	$maxWidth?: number | string;
	icon?: string;
	[key: string]: any | (() => void | null);
}

export interface TableProps extends React.HTMLAttributes<HTMLElement | undefined> {
	headers?: TableColumn[];
	values?: TableColumn[][];
	className?: string;
	minHeightTable?: number | string;
	$maxHeightTable?: number | string;
	paginationOptions?: PaginationOptions[];
	page?: number;
	limit?: number;
	count?: number;
	onPageChange?: (newPage: number) => void | null;
	onLimitChange?: (newLimit: number) => void | null;
	isPaginationDisabled?: boolean;
	mode?: 'dark' | 'light' | string;
	size?: 'md' | 'lg' | string;
}
