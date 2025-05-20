## Usage

```js
import { Tabs } from "@/shared-components/Tabs";
const [value, setValue] = useState('1');
const menu = [
  { label: 'Item One', value: '1', content: <div>Item One</div> },
  { label: 'Item Two', value: '2', content: <div>Item Two</div> },
  { label: 'Item Three', value: '3', content: <div>Item Three</div> },
];

<Tabs
	tabsName='Items List'
	activeTab={value}
	menu={menu}
	onChange={(newVal) => setValue(newVal)}
/>

tabsName?: string;
activeTab: string;
menu: TabItemProps[];
onChange: (value: string) => void;
```
