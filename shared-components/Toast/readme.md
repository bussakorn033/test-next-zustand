## Usage

```js
import { Button } from '@/shared-components/Button';
import { showToast } from '@/shared-components/Toast';

<Button onClick={() => showToast.success('บันทึกเอกสารร่างสำเร็จ')}>Success</Button>
<Button onClick={() => showToast.error('บันทึกเอกสารร่างไม่สำเร็จ')}>Error</Button>
<Button onClick={() => showToast.warning('บันทึกเอกสารร่างไม่สำเร็จ')}>Warning</Button>
<Button onClick={() => showToast.info('บันทึกเอกสารร่างไม่สำเร็จ')}>Info</Button>

```
