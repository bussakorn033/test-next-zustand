## Usage

```js
import {TextStyle} from "@/shared-components/TextStyle";

<TextStyle
  variant="h2"
  color="--color-error"
>
  text
</TextStyle>;

color?: '--color-error' | '#f00' | 'red' | string;

$limitLine?: number;

variant?: // Desktop Headings
  | "h2" // 32px bold, 44px
  | "h4" // 24px bold, 34px
  | "h6" // 16px bold, 24px

  // Paragraphs
  | "paragraphMedium" // 16px regular, 24px
  | "paragraphSmall" // 14px regular, 20px
  | "paragraphXSmall" // 12px regular, 16px

  // Labels
  | "labelMedium" // 16px regular, 24px
  | "labelSmall" // 14px regular, 20px
  | "labelSmallBold" // 14px bold, 20px
  | "labelXSmall" // 12px regular, 16px
  | "labelXSmallBold" // 12px bold, 16px

  // Values
  | "valueSmall" // 14px regular, 20px

  // Buttons
  | "buttonMedium" // 16px regular, 24px
  | "buttonBig" // 20px regular, 32px

  // Special Cases
  | "pageTitle" // 20px bold, 24px
  | "timeDevice" // 7.5px regular, 100%
  | "allCapSmall" // 12px regular, 16px, uppercase

  // Mobile Specific
  | "mobileH4" // 14px bold, 20px
  | "mobileLabelSmallBold" // 14px bold, 24px
  | "span"; // 14px bold, 24px

$whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

$wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";

$textAlign?: "left" | "center" | "right";

textDecoration?: "none" | "underline" | "line-through" | "overline";
```
