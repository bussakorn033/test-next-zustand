import styled from 'styled-components';

export const Popover = styled.div`
  position: absolute;
  background: var(--color-neutral-light);
  border: 1px solid var(--button-color-disabled-ghost-icon)
  padding: 12px;
  border-radius: 8px;
  z-index: 1000;
  max-width: 100vw;
  box-shadow: 0px 16px 32px 0px rgba(76, 87, 101, 0.06),
    0px 8px 16px 0px rgba(76, 87, 101, 0.08),
    0px 4px 8px 0px rgba(76, 87, 101, 0.1),
    0px 2px 4px 0px rgba(76, 87, 101, 0.12),
    0px 0px 2px 0px rgba(76, 87, 101, 0.14);
`;
