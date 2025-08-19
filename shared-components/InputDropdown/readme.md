## Usage

```js
import { InputDropdown } from '@/shared-components/InputDropdown';
const [active, setActive] = useState<string | undefined>();

<InputDropdown
	label='เลือก'
	variant='primary'
	menuItems={[
		{
			id: '1',
			label: 'เมนู',
			subMenu: [
				{ id: '2', label: 'เมนู1' },
				{ id: '3', label: 'เมนู2' },
				{ id: '4', label: 'เมนู3' }
			]
		},
		{
			id: '5',
			label: 'เมนู',
			subMenu: [{ id: '6', label: 'เมนู4' }]
		}
	]}
	activeMenu={active}
	onSelect={(id) => {
		setActive(id);
	}}
/>;

<InputDropdown
	label='เลือก'
	variant='primary'
	menuItems={[
		{ id: '1', label: 'เมนู1' },
		{ id: '2', label: 'เมนู2' },
		{ id: '3', label: 'เมนู3' },
		{ id: '4', label: 'เมนู4' }
	]}
	activeMenu={active}
	onSelect={(id) => {
		setActive(id);
	}}
/>;

label: string;
variant?: 'primary' | 'secondary';
menuItems: MenuItemType[];
activeMenu?: string;
onSelect: (id: string) => void;
```
