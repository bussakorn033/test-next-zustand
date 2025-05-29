import styled, { css } from 'styled-components';
import { TextAreaProps } from './TextArea.types';
import { toPx } from '@/utils/Utility';

export const TextAreaWrapper = styled.div<TextAreaProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ width }) =>
    width !== undefined &&
    css`
      width: ${toPx(width)};
    `}
  ${({ $minWidth }) =>
    $minWidth !== undefined &&
    css`
      min-width: ${toPx($minWidth)};
    `}
  ${({ $maxWidth }) =>
    $maxWidth !== undefined &&
    css`
      max-width: ${toPx($maxWidth)};
    `}

  ${({ $zIndex }) =>
    $zIndex !== undefined &&
    css`
      z-index: ${$zIndex};
    `}
  ${({ $marginBottom }) =>
    $marginBottom !== undefined &&
    css`
      margin-bottom: ${toPx($marginBottom)};
    `}
`;

export const InputWrapper = styled.div<{ $isError?: boolean | string }>`
  display: flex;
  flex: 1;
  align-items: center;
  border: 1px solid
    ${({ $isError }) => ($isError ? 'var(--color-danger)' : 'var(--color-neutral-grey-lighter)')};
  border-radius: 10px;
  padding: 10px 12px;
  background-color: var(--color-neutral-light);

  &:focus-within {
    border-color: var(--color-primary);
  }
`;

export const InputTextArea = styled.textarea<TextAreaProps & { disabled?: boolean }>`
  width: 100%;
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  resize: none;

  ::placeholder {
    color: var(--color-placeholder);
  }

  ${({ disabled }) =>
    disabled !== undefined &&
    css`
      color: var(--color-disabled);
      cursor: not-allowed;
    `}
`;

export const Icon = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: var(--color-icon);
`;

export const HelpingText = styled.span<{ $isError?: boolean | string }>`
  width: inherit;
  font-size: 12px;
  color: ${({ $isError }) => ($isError ? 'var(--color-danger)' : 'var(--color-neutral-dark)')};
`;

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  align-self: flex-start;
`;
