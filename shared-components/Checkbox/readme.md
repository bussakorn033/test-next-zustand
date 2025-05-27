## Usage

```jsx
import React, {useState} from "react";
import Checkbox from "@/shared-components/Checkbox/Checkbox";

const [accepted, setAccepted] = useState(false);
<Checkbox
    label="Accept Terms and Conditions"
    labelVariant="labelSmall"
    checked={accepted}
    onChange={(e) => {console.log(e)}}
/>
<button type="submit">Submit</button>


label?: string;

labelVariant?: string;

checked?: boolean;

onChange?: React.ChangeEventHandler<HTMLInputElement>;

```
