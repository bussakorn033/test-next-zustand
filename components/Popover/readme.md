## Usage

```js
import { Popover } from "@/shared-components/Popover";
<Popover open={true} anchorRef={'buttonRef'}>
  <Box p={16}>This is popover!</Box>
</Popover>

open: boolean;
anchorRef: React.RefObject<HTMLElement | null>;
children: React.ReactNode;
```
