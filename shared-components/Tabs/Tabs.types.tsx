/**
 * Represents a single tab item.
 *
 * @property label - The label to display on the tab header.
 * @property value - A unique identifier for the tab, used to determine the active tab.
 * @property content - The content to display when the tab is active.
 */
export interface TabItemProps {
	id?: string;
	label?: string;
	value?: string;
	content?: React.ReactNode;
}

/**
 * Props for the TabsComponent.
 *
 * @param className - Custom className
 * @param tabsName - Optional name of tab to show before tabs menu.
 * @param activeTab - The current active tab value. Determines which tab is shown.
 * @param menu - An array of tab definitions containing label, value, and content.
 * @param onChange - Callback triggered when a different tab is selected. Receives the new tab's value.
 */

export interface TabsProps {
	className?: string;
	id?: string;
	tabsName?: string;
	activeTab: string;
	menu: TabItemProps[];
	onChange: (value: string) => void;
	variant?: 'default' | 'space-between';
}
