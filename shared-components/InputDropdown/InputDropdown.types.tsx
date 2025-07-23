export type SubMenuItemType = {
	id: string | number;
	label?: string | number;
	labelTh?: string | number;
	labelEn?: string | number;
};

export type MenuItemType = {
	id: string | number;
	label?: string | number;
	labelTh?: string | number;
	labelEn?: string | number;
	subMenu?: SubMenuItemType[];
};

/**
 * Props for the InputDropdown component.
 *
 * @param label - The label of the component (e.g. button or input field).
 * @param variant - Optional visual style of the component. Accepts `'primary'` or `'secondary'`.
 * @param menuItems - List of menu options that can be selected.
 * @param activeMenu - Optional ID of the currently selected menu item. & now accepts a single value or an array of values for checkboxes.
 * @param onSelect - Callback function that is called when a menu item is selected, with the selected item's `id`.
 */
export interface InputDropdownProps {
	label: string | React.ReactNode;
	variant?: 'primary' | 'secondary';
	type?: 'normal' | 'checkbox' | string;
	menuItems: MenuItemType[];
	activeMenu?: string | number | undefined | Array<string | number | undefined>;
	onSelect: (
		item:
			| MenuItemType
			| SubMenuItemType
			| MenuItemType[]
			| SubMenuItemType[]
			| Array<string | number | undefined>
	) => void;
	height?: string | number;
	width?: string | number;
	$minHeight?: string | number;
	$minWidth?: string | number;
	$maxHeight?: string | number;
	$maxWidth?: string | number;
}
