export type SubMenuItemType = {
	id: string | number;
	label: string | number;
};

export type MenuItemType = {
	id: string | number;
	label: string | number;
	subMenu?: SubMenuItemType[];
};

/**
 * Props for the InputDropdown component.
 *
 * @param label - The label of the component (e.g. button or input field).
 * @param variant - Optional visual style of the component. Accepts `'primary'` or `'secondary'`.
 * @param menuItems - List of menu options that can be selected.
 * @param activeMenu - Optional ID of the currently selected menu item.
 * @param onSelect - Callback function that is called when a menu item is selected, with the selected item's `id`.
 */
export interface InputDropdownProps {
	label: string | React.ReactNode;
	variant?: 'primary' | 'secondary';
	menuItems: MenuItemType[];
	activeMenu?: string | number;
	onSelect: (item: MenuItemType | SubMenuItemType) => void;
	height?: string | number;
	width?: string | number;
	minHeight?: string | number;
	$minWidth?: string | number;
	$maxHeight?: string | number;
	$maxWidth?: string | number;
}
