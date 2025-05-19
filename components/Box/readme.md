## Usage

```js
import {Box} from "@/shared-components/Box";

<Box
  display="flex"
  direction="column"
  gap={8}
  padding={16}
  bgColor="--color-neutral-light"
  color="--color-table-border-dark"
  border="all"
  borderRadius="md"
  borderWidth={1}
  width="full"
  justifyContent="center"
  alignItems="center"
>
  Box Component
</Box>;

| Prop           | Type                                | Description              |
| -------------- | ----------------------------------- | ------------------------ |
| `display`      | `"flex"`, `"grid"`, `"block"`, etc. | Controls the CSS display |
| `direction`    | `"row"`, `"column"`, etc.           | Flex direction           |
| `gap`          | `string` | `number`                 | Spacing between children |
| `bgColor`      | `string`                            | Background color         |
| `color`        | `string`                            | Text color               |
| `border`       | `"all"`, `"top"`, `"bottom"`        | Border sides             |
| `borderRadius` | `"none"` | `"xs"` | `"circle"`      | Corner radius            |
| `boxShadow`    | `"none"`, `"top"`, `"bottom"`       | Box shadow               |
| `fullWidth`    | `boolean`                           | Sets width to 100%       |
| `fullHeight`   | `boolean`                           | Sets height to 100vh     |
```
