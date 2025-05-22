## Usage

```js
import { Popover } from "@/shared-components/Popover";
const buttonRef = useRef<HTMLButtonElement | null>(null);
<Popover isOpen={true} anchorRef={buttonRef}>
  <Box p={16}>This is popover!</Box>
</Popover>

isOpen: boolean;
anchorRef: React.RefObject<HTMLElement | null>;
children: React.ReactNode;
width?: number;
```
