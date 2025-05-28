import styled from 'styled-components';
import { Box } from '@/shared-components/Box';

export const ToastWrapper = styled(Box)<{ isVisible: boolean }>`
  position: relative;
  transform: translateX(-50%) translateY(${(props) => (props.isVisible ? '0' : '20px')});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  box-shadow:
    0px 16px 32px 0px #4c57650f,
    0px 8px 16px 0px #4c576514,
    0px 4px 8px 0px #4c57651a,
    0px 2px 4px 0px #4c57651f,
    0px 0px 2px 0px #4c576524;
`;
