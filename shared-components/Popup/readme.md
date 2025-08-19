## Usage

```js
import { showPopup } from "@/shared-components/Popup";

<Button onClick={() =>
	showPopup.confirm({
		title: 'ทดสอบ',
		description: 'ทดสอบ',
		popupName: 'ทดสอบ'
	})}
>Popup Confirm</Button>
<Button onClick={() =>
	showPopup.error({
		title: 'ทดสอบ',
		description: 'ทดสอบ',
		popupName: 'ทดสอบ'
	})}
>Popup Error</Button>

title: string;
description: string;
popupName: string;
primaryButtonLabel?: string;
primaryButtonAction?: () => void;
primaryButtonColor?: string;
secondaryButtonLabel?: string;
secondaryButtonAction?: () => void;
ghostButtonLabel?: string;
ghostButtonAction?: () => void;
```
