import styled, { css } from 'styled-components';
import { DividerProps } from './Divider.types';
import { toPx } from '@/utils/Utility';

export const Divider = styled.hr<DividerProps>`
  display: block;
  border: 0px;
  border-style: solid;
  margin-left: 8px;
  margin-right: 8px;

  ${(props) =>
    props.orientation === 'horizontal'
      ? css`
          border-top-width: ${props.weight}px;
          margin-top: 0;
          margin-bottom: 0;
          border-color: var(--${props.color || 'color-border-light'});
          width: 100%;
        `
      : css`
          border: none;
          min-height: 16px;
          height: auto;
          width: ${props.weight}px;
          border-top-width: 1px;
          margin-top: 16px;
          margin-bottom: 16px;
          background: var(--${props.color || 'color-border-light'});
        `}

  ${({ m }) =>
    m !== undefined &&
    css`
      margin: ${toPx(m)} !important;
    `}
	${({ mx }) =>
    mx !== undefined &&
    css`
      margin-left: ${toPx(mx)} !important;
      margin-right: ${toPx(mx)} !important;
    `}
	${({ my }) =>
    my !== undefined &&
    css`
      margin-top: ${toPx(my)} !important;
      margin-bottom: ${toPx(my)} !important;
    `}
		${({ mt }) =>
    mt !== undefined &&
    css`
      margin-top: ${toPx(mt)} !important;
    `}
  	${({ mb }) =>
    mb !== undefined &&
    css`
      margin-bottom: ${toPx(mb)} !important;
    `}
  	${({ mr }) =>
    mr !== undefined &&
    css`
      margin-right: ${toPx(mr)} !important;
    `}
  	${({ ml }) =>
    ml !== undefined &&
    css`
      margin-left: ${toPx(ml)} !important;
    `}
`;
