## Usage

```js
import { PillStatus } from "@/shared-components/PillStatus";
<Box direction='row' gap={8} p={24}>
		<PillStatus>แบบร่าง</PillStatus>
		<PillStatus variant='purple'>รออนุมัติ</PillStatus>
		<PillStatus variant='danger'>ไม่อนุมัติ</PillStatus>
		<PillStatus variant='warning'>รอตอบกลับ</PillStatus>
		<PillStatus variant='light-orange'>เรียกคืน</PillStatus>
		<PillStatus variant='disabled'>หมดอายุ</PillStatus>
		<PillStatus variant='information'>รับทราบ</PillStatus>
		<PillStatus variant='success'>ยอมรับ</PillStatus>
		<PillStatus variant='primary' isCircle>
			Admin
		</PillStatus>
</Box>

variant?:
		| 'default'
		| 'purple'
		| 'danger'
		| 'warning'
		| 'light-orange'
		| 'disabled'
		| 'information'
		| 'success'
		| 'primary';
children?: string;
isCircle?: boolean;
```
