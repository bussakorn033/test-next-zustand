## Usage

```js
import {Button} from "@/shared-components/Button";

<Button
    variant="ghost-primary"
    iconLeft="refresh"
    iconLeft=""
    iconRight=""
    disabled
>
  text
</Button>;

variant?:
    | "primary"
    | "negative"
    | "secondary"
    | "secondary-negative"
    | "ghost-primary"
    | "ghost-secondary"
    | "ghost-negative"
    | "ghost-primary-no-padding"
    | "ghost-secondary-no-padding"
    | "ghost-negative-no-padding"
    | "ghost-icon-primary"
    | "ghost-icon-secondary"
    | "ghost-icon-negative"
    | "ghost-icon-primary-no-padding"
    | "ghost-icon-secondary-no-padding"
    | "ghost-icon-negative-no-padding";

$borderRadius?: "normal" | "round" | "none";

width?: "normal" | "full";

sizeIcon?: string | number | null;

$isDisabled?: boolean;

```
