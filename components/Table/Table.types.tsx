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

export interface TableColumn {
  value: string | React.ReactNode;
  sortBy?: "asc" | "desc" | undefined;
  isSort?: boolean;
  onClick?: ({row, col}: Record<string, number>) => void | null;
  minWidth?: string;
}

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  headers?: TableColumn[];
  values?: TableColumn[][];
  page?: number;
  limit?: number;
  count?: number;
  onPageChange?: (newPage: number) => void;
  onLimitChange?: (newLimit: number) => void;
  isPaginationDisabled?: boolean;
}
