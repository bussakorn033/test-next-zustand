## Usage

```jsx
import React, {useState} from "react";
import Checkbox from "@/shared-components/Checkbox/Checkbox";

const [accepted, setAccepted] = useState(false);
<Checkbox
    label="Accept Terms and Conditions"
    labelVariant="labelSmall"
    name="checkbox-gender"
    checked={accepted}
    onChange={(e) => {
      console.log(e.target.name);
      console.log(e.target.checked);
      setAccepted(e.target.checked);
    }}
    size={16}
    disabled
/>
<button type="submit">Submit</button>


label?: string;

labelVariant?: string;

isChecked?: boolean;

isDisabled?: boolean;

size?: number;

onChange?: React.ChangeEventHandler<HTMLInputElement>;

```
