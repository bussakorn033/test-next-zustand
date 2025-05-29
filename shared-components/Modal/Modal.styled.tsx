import { toPx } from '@/utils/Utility';
import styled, { css } from 'styled-components';
import { Button } from '../Button';

export const Modal = styled.div<{
  m?: string | number;
  width?: string | number;
  $minWidth?: string | number;
  $maxWidth?: string | number;
  height?: string | number;
  minHeight?: string | number;
  $maxHeight?: string | number;
}>`
  display: flex;
  flex-direction: column;
  margin: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  box-shadow:
    0px 16px 32px 0px #4c57650f,
    0px 8px 16px 0px #4c576514,
    0px 4px 8px 0px #4c57651a,
    0px 2px 4px 0px #4c57651f,
    0px 0px 2px 0px #4c576524;

  ${({ m }) =>
    m !== undefined &&
    css`
      m: ${toPx(m)};
    `}
  ${({ height }) =>
    height !== undefined &&
    css`
      height: ${toPx(height) || '500px'};
    `}
	${({ minHeight }) =>
    minHeight !== undefined &&
    css`
      min-height: ${toPx(minHeight) || 'unset'};
    `}
	${({ $maxHeight }) =>
    $maxHeight !== undefined &&
    css`
      max-height: ${toPx($maxHeight) || 'unset'};
    `}
	${({ width }) =>
    width !== undefined &&
    css`
      width: ${toPx(width) || '500px'};
    `}
	${({ $minWidth }) =>
    $minWidth !== undefined &&
    css`
      min-width: ${toPx($minWidth) || 'unset'};
    `}
	${({ $maxWidth }) =>
    $maxWidth !== undefined &&
    css`
      max-width: ${toPx($maxWidth) || 'unset'};
    `}
`;

export const Overlay = styled.div`
  overflow-x: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  align-content: center;
`;

export const CloseButton = styled(Button)`
  cursor: pointer;
`;
