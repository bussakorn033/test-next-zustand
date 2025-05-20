// write a typescript interface for the Table component

/**
 * Table component props
 *
 * @param headers - An array of header definitions for the table
 * @param rows - A 2D array of row data, where each row contains columns
 * @param className - Custom CSS class names
 * @param tag - Custom tag string (e.g., 'div', 'section')
 * @param TableShadow - Shadow style for the table container
 * @param bgColor - Background color of the table
 * @param hover - Whether to apply hover effect on rows
 * @param fullWidth - Whether the table should occupy full width
 * @param fullHeight - Whether the table should occupy full height
 * @param border - Border style or side (e.g., 'all', 'top', 'none')
 * @param borderRadius - Border radius (e.g., 'md', '4px')
 * @param borderWidth - Thickness of the border
 * @param direction - Layout direction of the table (e.g., 'row', 'column')
 */

export type SortDirection = "asc" | "desc" | "sorting" | undefined;
export type Align = "left" | "center" | "right";

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

export interface TableColumn {
  key?: string | undefined;
  value: string | React.ReactNode;
  alignHeader?: Align;
  align?: Align;
  sortBy?: SortDirection;
  isSort?: boolean;
  onClick?: (params: OnClickCellParams) => void | null;
  flex?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  icon?: string;
}

export interface TableProps
  extends React.HTMLAttributes<HTMLElement | undefined> {
  headers?: TableColumn[];
  values?: TableColumn[][];
  className?: string;
  maxHeightTable?: number | string;
  page?: number;
  limit?: number;
  count?: number;
  onPageChange?: (newPage: number) => void;
  onLimitChange?: (newLimit: number) => void;
  isPaginationDisabled?: boolean;
  mode?: "dark" | "light" | string;
  size?: "md" | "lg" | string;
}
