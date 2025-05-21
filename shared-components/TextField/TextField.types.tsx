export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * ID of component
   */
  id?: string;
  value?: string | number;
  label?: string;
  labelHelping?: string;
  placeholder?: string;
  type?:
    | "text"
    | "tel"
    | "number"
    | "amount"
    | "email"
    | "password"
    | "card-id"
    | "laser-card";
  keyboard?:
    | "none"
    | "text"
    | "numeric"
    | "decimal"
    | "tel"
    | "search"
    | "email"
    | "url";
  helpingText?: string;
  errorMessage?: string;
  suffix?: string;
  error?: boolean;
  disabled?: boolean;
  half?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variant?: "amount" | "amount-transaction" | "search";
  className?: string;
  helpingTextRight?: string;
  focus?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconTyping?: boolean;
  format?: string;
  /**
   * @deprecated
   */
  options?: string;
  zIndex?: number;
  width?: string | number;
  marginBottom?: string | number;
  clearable?: boolean;
  [key: string]: any;
}
