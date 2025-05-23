## Usage

```js
import {TextField} from "@/shared-components/TextField";

<TextField
  placeholder={"Text shown inside the input when empty."}
  type="text"
  minWidth={50}
  maxWidth={160}
  clearable
  name="key_input"
  value={"The current value of the input field."}
  label={"Displays a text label above the field."}
  labelHelping={"If specified, a help icon appears next to the label. When hovered, it shows a tooltip with this text."}
  helpingText={"Renders additional supporting text below the input. This can be used for instructions or error messages."}
  onChange={handleFilterChange}
  errorMessage="Something went wrong"
  error
  disabled
/>


id?: string

label?: string

labelHelping?: string

helpingText?: string

placeholder?: string

type?: string

name*: string

value*: string

onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

clearable?: boolean

disabled?: boolean

width?: number | string

minWidth?: number | string

maxWidth?: number | string

className?: string

errorMessage?: string;

error?: boolean;

```
