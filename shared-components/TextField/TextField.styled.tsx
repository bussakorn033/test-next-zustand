import styled, {css} from "styled-components";
import {TextFieldProps} from "./TextField.types";
import {toPx} from "@/src/utils/Utility";

export const TextFieldWrapper = styled.div<TextFieldProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({width}) =>
    width &&
    css`
      width: ${toPx(width)};
    `}
  ${({zIndex}) =>
    zIndex &&
    css`
      z-index: ${zIndex};
    `}
  ${({marginBottom}) =>
    marginBottom &&
    css`
      margin-bottom: ${toPx(marginBottom)};
    `}
`;

export const InputWrapper = styled.div<{error?: boolean}>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({error}) =>
      error ? "var(--color-danger)" : "var(--color-neutral-light)"};
  border-radius: 10px;
  padding: 10px 12px;
  background-color: var(--color-neutral-light);

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
  color: ${({error}) =>
    error ? "var(--color-danger)" : "var(--color-neutral-dark)"};
`;
