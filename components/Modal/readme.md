## Usage

```js
import { Modal } from "@/shared-components/Modal";
<Modal
    open={true}
    title="Modal"
    onClose={() => setOpen(false)}
>
    <p>This is modal</p>
</Modal>

open: boolean;
onClose: () => void;
children: React.ReactNode;
width?: number;
height?: number;
title?: string;
className?: string;
```
