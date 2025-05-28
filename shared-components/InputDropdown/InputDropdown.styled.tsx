import styled from 'styled-components';

export const Wrapper = styled.div``;

export const InputBox = styled.div``;

export const Item = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: normal;
`;

export const SubItem = styled.div<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: ${({ active }) => (active ? '0px' : '8px')};
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? 'var(--component-background-accent-primary-soft)' : '#fff'};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  &,
  > * {
    color: var(--${({ active }) => (active ? 'color-accent' : 'color-primary')}) !important;
  }

  &:hover {
    background-color: var(--color-pill-bg-primary);
    border-radius: 0px;
  }
`;
