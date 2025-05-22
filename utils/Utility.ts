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
  new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(
    parseFloat(
      String(value === "" || !value ? "0.00" : value || "0.00").replace(
        /,/g,
        "",
      ),
    ),
  );

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
  new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(
    parseInt(
      String(value === "" || !value ? "0" : value || "0").replace(/,/g, ""),
    ),
  );

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
  if (typeof obj !== "object" || obj === null) return obj as KeysToCamelCase<T>;
  if (Array.isArray(obj))
    return obj.map(convertKeysToCamelCase) as KeysToCamelCase<T>;

  return Object.fromEntries(
    Object.entries(obj as Record<string, unknown>).map(([key, value]) => [
      toCamelCase(key),
      convertKeysToCamelCase(value),
    ]),
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
  return str.replace(/,/g, "");
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
export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  wait: number,
) => {
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
  typeof value === "number" ? `${value}px` : value;

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
export const transformFlexProperties = (
  prop: string | undefined,
): string | undefined => {
  switch (prop) {
    case "left":
    case "start":
      return "flex-start";
    case "right":
    case "end":
      return "flex-end";
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
export const formatDate = (date: string | number | Date): string => {
  let d: Date;

  if (typeof date === "number") {
    d = new Date(date < 1e12 ? date * 1000 : date); // handle seconds or ms
  } else {
    d = new Date(date);
  }

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
};
