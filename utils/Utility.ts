import { MasterDetail } from '@/dto/DashboardDTO';
import React, { ReactElement, ReactNode } from 'react';

/**
 * Formats a string value into Thai currency format with 2 decimal places.
 *
 * - Accepts numeric strings (e.g., "1234.56", "1,234.56")
 * - Automatically removes commas and handles empty/null values gracefully
 * - Always returns a string formatted in "th-TH" locale with two decimal places
 *
 * @param {string} value - The input number as a string. Can include commas or be empty/null.
 * @returns {string} Formatted currency string (e.g., "1,234.56")
 *
 * @example
 * parseCurrency("1234.5")      // "1,234.50"
 * parseCurrency("1,000")       // "1,000.00"
 * parseCurrency("")            // "0.00"
 * parseCurrency(null as any)   // "0.00"
 */
export const parseCurrency = (value: string) =>
  new Intl.NumberFormat('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(String(value === '' || !value ? '0.00' : value || '0.00').replace(/,/g, '')));

/**
 * Formats a string number into Thai currency format **without decimal places**.
 *
 * - Removes any commas from the input string
 * - Returns number formatted in "th-TH" locale with **no decimals**
 * - Handles empty or falsy input by defaulting to `0`
 *
 * @param {string} value - Input number as a string (can include commas or be empty/null).
 * @returns {string} Formatted number string (e.g., "1,234")
 *
 * @example
 * parseCurrencyWithoutDecimal("1234.56")      // "1,234"
 * parseCurrencyWithoutDecimal("1,000")        // "1,000"
 * parseCurrencyWithoutDecimal("")             // "0"
 * parseCurrencyWithoutDecimal(null as any)    // "0"
 */
export const parseCurrencyWithoutDecimal = (value: string) =>
  new Intl.NumberFormat('th-TH', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(parseInt(String(value === '' || !value ? '0' : value || '0').replace(/,/g, '')));

/**
 * Converts a snake_case string to camelCase.
 *
 * - Replaces all `_x` with `X` where `x` is any lowercase character
 * - Example: "first_name" → "firstName"
 *
 * @param {string} str - The input string in snake_case format.
 * @returns {string} The converted camelCase string.
 *
 * @example
 * toCamelCase("first_name")     // "firstName"
 * toCamelCase("user_id")        // "userId"
 * toCamelCase("alreadyCamel")   // "alreadyCamel" (unchanged)
 */
export function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Recursively converts all object keys from snake_case to camelCase.
 *
 * - Works with nested objects and arrays
 * - Uses `toCamelCase()` to transform individual keys
 * - Preserves the original structure and values
 *
 * @template T - The input type of the object
 * @param {T} obj - The object (or array) whose keys should be converted
 * @returns {KeysToCamelCase<T>} A new object with camelCased keys
 *
 * @example
 * convertKeysToCamelCase({ user_id: 1, user_info: { first_name: 'John' } })
 */
export const convertKeysToCamelCase = <T>(obj: T): KeysToCamelCase<T> => {
  if (typeof obj !== 'object' || obj === null) return obj as KeysToCamelCase<T>;
  if (Array.isArray(obj)) return obj.map(convertKeysToCamelCase) as KeysToCamelCase<T>;

  return Object.fromEntries(
    Object.entries(obj as Record<string, unknown>).map(([key, value]) => [
      toCamelCase(key),
      convertKeysToCamelCase(value)
    ])
  ) as KeysToCamelCase<T>;
};

/**
 * Removes all commas from a string.
 *
 * - Useful for cleaning number strings before parsing (e.g. "1,000" → "1000")
 * - Does not affect other characters
 *
 * @param {string} str - The input string that may contain commas.
 * @returns {string} A new string with all commas removed.
 *
 * @example
 * removeComma("1,234,567")   // "1234567"
 * removeComma("1000")        // "1000"
 * removeComma("")            // ""
 */
export function removeComma(str: string): string {
  return str.replace(/,/g, '');
}

/**
 * Creates a debounced version of the provided function that delays its execution
 * until after a specified wait time has elapsed since the last time it was invoked.
 *
 * @template F - The type of the function to debounce.
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay execution.
 * @returns A debounced version of the provided function.
 *
 * @example
 * ```typescript
 * const log = (message: string) => console.log(message);
 * const debouncedLog = debounce(log, 300);
 *
 * debouncedLog("Hello");
 * debouncedLog("World");
 * // Only "World" will be logged after 300ms if called in quick succession.
 * ```
 */
export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(func: F, wait: number) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  return debounced;
};

/**
 * Creates a throttled version of the provided function that ensures the function
 * is executed at most once in a specified time interval.
 *
 * @param func - The function to throttle.
 * @param limit - The number of milliseconds to wait before allowing the next execution.
 * @returns A throttled version of the provided function.
 *
 * @example
 * ```typescript
 * const log = (message: string) => console.log(message);
 * const throttledLog = throttle(log, 2000);
 *
 * throttledLog("Hello"); // Logs "Hello"
 * throttledLog("World"); // Ignored if called within 2 seconds of the previous call
 * ```
 */
export function throttle(func: (...args: any[]) => void, limit: number) {
  let lastCall = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

/**
 * Converts a number to a pixel string by appending 'px'.
 * If the value is already a string (e.g., "1rem", "20px"), it returns the value unchanged.
 *
 * @param value - A number or string representing a size.
 * @returns The value with 'px' appended if it is a number, otherwise returns the string as-is.
 *
 * @example
 * ```typescript
 * toPx(16);         // "16px"
 * toPx("20px");     // "20px"
 * toPx("1rem");     // "1rem"
 * ```
 */
export const toPx = (value: number | string): string =>
  typeof value === 'number' ? `${value}px` : value;

/**
 * Transforms alignment keywords into valid CSS flex alignment values.
 *
 * @param prop - A string value like 'left', 'right', 'start', or 'end'.
 * @returns A valid CSS flex alignment like 'flex-start', 'flex-end', or the original value.
 *
 * @example
 * ```ts
 * transformFlexProperties('left');  // "flex-start"
 * transformFlexProperties('right'); // "flex-end"
 * transformFlexProperties('center'); // "center"
 * ```
 */
export const transformFlexProperties = (prop: string | undefined): string | undefined => {
  switch (prop) {
    case 'left':
    case 'start':
      return 'flex-start';
    case 'right':
    case 'end':
      return 'flex-end';
    default:
      return prop;
  }
};

/**
 * Formats a date (ISO string, number timestamp, or Date object) to 'DD/MM/YYYY'.
 *
 * @param date - The input date as a string (ISO), Unix timestamp (in seconds or milliseconds), or Date object.
 * @returns The formatted date string in 'DD/MM/YYYY' format.
 *
 * @example
 * ```ts
 * formatDate("2025-05-21");           // "21/05/2025"
 * formatDate(new Date(2025, 4, 21));  // "21/05/2025"
 * formatDate(1747785600);             // "21/05/2025"
 * formatDate(1747785600000);          // "21/05/2025"
 * ```
 */
export const formatDate = (date: number | string | Date | null | undefined) => {
  if (!date) return '';
  let d: Date;
  if (typeof date === 'number') {
    d = new Date(date < 1e12 ? date * 1000 : date);
  } else {
    d = new Date(date);
  }
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Recursively extracts text content from a ReactNode.
 *
 * NOTE: This function supports strings, numbers, arrays, and valid React elements.
 * If you encounter a TypeScript error regarding "node.props" being of type unknown,
 * we explicitly assert the node as a ReactElement (which has a known structure) so that
 * TypeScript can safely access its props and children.
 *
 * @param node - The React node from which to extract text.
 * @returns A concatenated string of text content.
 */

export function nodeToText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }
  if (Array.isArray(node)) {
    return node.map((child) => nodeToText(child)).join('');
  }
  if (React.isValidElement(node)) {
    // Assert node as ReactElement to access its props.children
    const element = node as ReactElement<{ children?: ReactNode }>;
    return nodeToText(element.props.children);
  }
  return '';
}

/**
 * Checks if any value in the given object is a non-empty string.
 *
 * Iterates through all the object's values and returns true if at least one value
 * is a string with non-whitespace content.
 *
 * @param obj - An object to check for non-empty string values.
 * @returns true if at least one non-empty string exists, false otherwise.
 *
 * @example
 * hasNonEmptyString({ name: 'Alice', age: 30 }); // true
 * hasNonEmptyString({ name: '   ', age: 30 });     // false
 * hasNonEmptyString({});                           // false
 */

export function hasNonEmptyString(obj: Record<string, unknown>): boolean {
  return Object.values(obj).some((val) => typeof val === 'string' && val.trim() !== '');
}

/**
 * Converts a sort direction string into a numeric flag.
 *
 * @param sortDirection - A string indicating sort direction ("ASC" or "DESC").
 * @returns 1 if sortDirection is "ASC", -1 if "DESC", and 0 for any other value.
 *
 * @example
 * getSortNumeric("ASC");   // returns 1
 * getSortNumeric("DESC");  // returns -1
 * getSortNumeric("XYZ");   // returns -1
 */
export function getSortNumeric(sortDirection: string): number {
  switch (sortDirection.toUpperCase()) {
    case 'ASC':
      return 1;
    case 'DESC':
      return -1;
    default:
      return -1;
  }
}

/**
 * Returns a UI mapping for a given contract status code based on master details.
 *
 * NOTE:
 * - This function uses the provided status code and an array of MasterDetail objects (which include descriptions in both Thai and English)
 *   to determine the appropriate UI variant and labels.
 * - The switch-case selects a variant (such as 'primary', 'info', 'danger', etc.) based on the status code.
 * - If a master detail matching the provided code is not found, default empty strings are returned.
 * - This mapping is designed to be used, for example, in rendering UI components like PillStatus, to provide visual cues.
 *
 * @param code - The contract status code to evaluate.
 * @param details - An array of MasterDetail objects containing status information.
 * @returns An object with properties: code, variant, description_th, and description_en.
 *
 * @example
 * const masterDetails: MasterDetail[] = [
 *   { code: 'CAN_NOT_EDIT', description_th: 'ไม่สามารถแก้ไขเอกสารได้', description_en: 'CAN NOT EDIT' },
 *   { code: 'APPROVE', description_th: 'อนุมัติ', description_en: 'APPROVE' }
 * ];
 * const statusDisplay = getMasterDetailsStatus('CAN_NOT_EDIT', masterDetails);
 * statusDisplay => { code: 'CAN_NOT_EDIT', variant: 'warning', description_th: 'ไม่สามารถแก้ไขเอกสารได้', description_en: 'CAN NOT EDIT' }
 */

export function getMasterDetailsStatus(
  code: string | undefined,
  details: MasterDetail[] | undefined
): { code: string; variant: string; description_th: string; description_en: string } {
  const detail = details?.find((d) => d?.code === code || d?.contract_status_code === code);
  let variant = '';

  switch (code) {
    case 'DRAFT':
      variant = 'default';
      break;
    case 'purple':
      variant = 'purple';
      break;
    case 'danger':
    case 'STAFT_REJECT':
    case 'CUST_REJECT':
    case 'DOC_REJECT':
      variant = 'danger';
      break;
    case 'warning':
      variant = 'warning';
      break;
    case 'light-orange':
      variant = 'light-orange';
      break;
    case 'disabled':
    case 'EXPIRE':
      variant = 'disabled';
      break;
    case 'information':
    case 'SUBMIT':
    case 'WAIT_CUST_APP':
    case 'WAIT_CONFIRM':
    case 'CONFIRM_SUBMISSION':
      variant = 'information';
      break;
    case 'success':
    case 'CREATED':
    case 'SEND_DOC_SUCCESS':
      variant = 'success';
      break;
    case 'primary':
      variant = 'primary';
      break;
    default:
      variant = '';
      break;
  }

  return {
    code: detail?.code || '',
    variant: variant || '',
    description_th:
      detail?.description_th ||
      detail?.contract_status_description_th ||
      detail?.contract_type_description_th ||
      '',
    description_en:
      detail?.description_en ||
      detail?.contract_status_description_en ||
      detail?.contract_type_description_en ||
      ''
  };
}

/**
 * Returns the master details for a given contract type code.
 * Similar to getMasterDetails but specifically for contract document types.
 *
 * @param code - The contract type code to look up (e.g., 'CT_AL001' or 'CT_AL002')
 * @param details - An array of MasterDetail objects containing contract type information
 * @returns Object with the contract type details including code and descriptions
 *
 * @example
 * const details = getMasterDetailsDoc('CT_AL001', masterDetails);
 * returns {
 *   code: 'CT_AL001',
 *   description_th: 'แก้ไขรายการข้อมูลในสัญญาเช่าซื้อ (ทั่วไป)',
 *   description_en: 'Editing data items in the hire purchase contract (general)'
 * }
 */

export function getMasterDetailsDoc(
  code: string | undefined,
  details: MasterDetail[] | undefined
): {
  code: string;
  description_th: string;
  description_en: string;
} {
  const detail = details?.find((d) => d?.code === code);

  return {
    code: detail?.code || '',
    description_th: detail?.description_th || detail?.contract_type_description_th || '',
    description_en: detail?.description_en || detail?.contract_type_description_en || ''
  };
}

/**
 * Transforms an array of (string | number | undefined) into an array of strings.
 *
 * @param input - The input array containing strings, numbers, or undefined.
 * @returns An array of strings with no undefined values.
 *
 * @example
 * const result = toStringArray([1, 'hello', undefined, 42]);
 * // result: ['1', 'hello', '42']
 */
export function toStringArray(input: Array<string | number | undefined>): string[] {
  return input
    ?.filter((item): item is string | number => item !== undefined)
    ?.map((item) => item?.toString());
}

/**
 * Measure the pixel width of a string using a given font.
 * @param text The text to measure.
 * @param font The CSS font string, e.g. "14px Arial".
 * @returns The width in pixels.
 */
export function measureTextWidth(text: string, font: string = '20px Arial'): number {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return 0;
  context.font = font;
  const metrics = context.measureText(text);
  return Math.floor(metrics.width);
}

/**
 * Downloads a PDF file from a base64 string.
 *
 * @param input - The base64 encoded PDF string.
 * @param pdfFileName - Optional name for the downloaded PDF file (without .pdf extension).
 * If not provided, defaults to 'download.pdf'.
 */
export const downloadPdfFile = async (input: string, pdfFileName?: string) => {
  if (!input) return;

  const linkSource = `data:application/pdf;base64,${input}`;
  const downloadLink = document.createElement('a');
  const pdfFile = pdfFileName?.trim();
  const fileName = pdfFile?.includes('.pdf') ? pdfFile : `${pdfFile}.pdf`;
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

/**
 * Prints a PDF file from a base64 string.
 *
 * @param input - The base64 encoded PDF string.
 * This function decodes the base64 string, creates a Blob object,
 * and opens it in a new window for printing.
 */
export const printPdfFile = async (input: string) => {
  if (!input) return;

  var byteCharacters = atob(input);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var file = new Blob([byteArray], { type: 'application/pdf;base64' });
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
};
