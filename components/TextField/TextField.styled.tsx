import styled, {css} from "styled-components";

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputWrapper = styled.div<{error?: boolean}>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({error}) => (error ? "--color-danger)" : "--color-neutral)")};
  border-radius: 4px;
  padding: 8px;
  background-color: var(--color-background);

  &:focus-within {
    border-color: var(--color-primary);
  }
`;

export const Input = styled.input<{disabled?: boolean}>`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--color-text);
  background-color: transparent;

  ${({disabled}) =>
    disabled &&
    css`
      color: var(--color-disabled);
      cursor: not-allowed;
    `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: var(--color-icon);
`;

export const HelpingText = styled.span<{error?: boolean}>`
  font-size: 12px;
  color: ${({error}) => (error ? "--color-danger)" : "--color-neutral-dark)")};
`;
