import styled, { css } from 'styled-components';

export const Modal = styled.div<{
  width?: number;
  height?: number;
}>`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 100%;
  position: relative;
  box-shadow:
    0px 16px 32px 0px #4c57650f,
    0px 8px 16px 0px #4c576514,
    0px 4px 8px 0px #4c57651a,
    0px 2px 4px 0px #4c57651f,
    0px 0px 2px 0px #4c576524;

  overflow: auto;

  ${(props) => {
    return css`
      width: ${props.width || '500'}px;
      height: ${props.height + 'px' || 'auto'};
    `;
  }}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const CloseButton = styled.div`
  cursor: pointer;
`;
