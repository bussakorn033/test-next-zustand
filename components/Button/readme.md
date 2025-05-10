## Usage

```js

import { DSButton } from 'ttb-design-system-webview'
```

## Button variant

- [Primary](./?path=/docs/new-components-button-primary-button--example)
- [Secondary](./?path=/docs/new-components-button-secondary-button--example)
- [Ghost](./?path=/docs/new-components-button-ghost-button--example)
- [Ghost on Dark](./?path=/docs/new-components-button-ghost-on-dark-button--example)

## Clickable Icon

You can provide only icon name in prop `iconLeft` need no to add any children.

```js
<DSButton iconLeft='placeholder' />
```

## Specification

### Text Style

- สำหรับปุ่มขนาดใหญ่ ใช้ [`buttonBig`](./?path=/docs/new-components-text-style--button-big)
- สำหรับปุ่มขนาดกลางใช้ [`buttonMedium`](./?path=/docs/new-components-text-style--button-medium)
- สำหรับปุ่มขนาดกลางใช้ [`buttonSmall`](./?path=/docs/new-components-text-style--button-small)
- ข้อความบนปุ่มไม่เกิน 1 บรรทัด

- Text limit charactor Maximum : 26 charactors

```css
/* button.module.scss file */
@import 'src/shared/styles/mixin.scss';

@include limit-char(26);
```

> Note: button large not have icon with label
