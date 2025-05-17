## Usage

```js
import {Box} from "@/shared-components/Box";

<Box
  direction="column"
  gap={8}
  color="var(--color-table-border-dark)"
  bgColor="var(--color-neutral-light)"
  border="all"
  borderRadius="md"
  borderWidth={1}
>
  text
</Box>;

direction?: "none"| "row"| "row-reverse"| "row-wrap"| "column"| "column-reverse";

border?: "all" | "top" | "bottom";

borderRadius?: string; // none: '0' | xs: '4px' | sm: '8px'| md: '12px'| lg: '16px'| xl: '24px'| circle: '50%'

boxShadow?: "none" | "top" | "bottom";

width?: "normal" | "full";

color?: string; // "var(--color-error)" | "#f00" | "red" | string;

bgColor?: string; // "var(--color-error)" | "#f00" | "red" | string;

```
