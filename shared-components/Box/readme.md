## Usage

```js
import {Box} from "@/shared-components/Box";

<Box
  display="flex"
  direction="column"
  gap={8}
  padding={16}
  $bgColor="--color-neutral-light"
  $borderColor="--color-primary"
  color="--color-primary"
  border="all"
  $borderRadius="md"
  $borderWidth={1}
  width="full"
  $justifyContent="center"
  $alignItems="center"
>
  Box Component
</Box>;

display?: "flex" | "grid" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "block" | "table" | "contents" | "none";

direction?: "row"| "row-reverse"| "row-wrap"| "column"| "column-reverse"| "none";

gap?: string | number;
gapRow?: string | number;
gapColumn?: string | number;

p?: string | number;
px?: string | number;
py?: string | number;
pt?: string | number;
pb?: string | number;
pr?: string | number;
pl?: string | number;
m?: string | number;
mx?: string | number;
my?: string | number;
mt?: string | number;
mb?: string | number;
mr?: string | number;
ml?: string | number;

$bgColor?: string;            /* --color-error || #f00 */
color?: string;               /* --color-error || #f00 */
$borderColor?: string;        /* --color-error || #f00 */

border?: "all" | "top" | "bottom" ;

$borderRadius?:
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "circle";

$borderWidth?: 0 | 1 | 2;

width?: string | number;;
height?: string | number;;
$minWidth?: string | number;;
$maxWidth?: string | number;;
$minHeight?: string | number;;
$maxHeight?: string | number;;

$boxShadow?: "none" | "top" | "bottom";

$isHover?: boolean;

$textAlign?: "left" | "center" | "right";
$alignItems?: "start" | "center" | "end" | "baseline" | string;
$alignContent?: "start" | "center" | "end" | "baseline" | string;
$justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | string;

position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | string;
$zIndex?: string | number;
top?: string | number;
bottom?: string | number;
left?: string | number;
right?: string | number;

```
