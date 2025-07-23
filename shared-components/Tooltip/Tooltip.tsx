import { Box } from '@/shared-components/Box';
import { TextStyle } from '@/shared-components/TextStyle';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './Tooltip.styled';
import { TooltipProps } from './Tooltip.types';
import { nodeToText } from '@/utils/Utility';

const Tooltip: React.FC<TooltipProps> = ({ content, children, isShow = false }) => {
  const [$isVisible, setIsVisible] = useState(isShow || false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!$isVisible || !triggerRef.current || !tooltipRef.current) return;

    const padding = 8;
    const offset = 8;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const calcLeft = () => {
      const center = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
      if (center < padding) return padding;
      if (center + tooltipRect.width > window.innerWidth - padding) {
        return window.innerWidth - tooltipRect.width - padding;
      }

      return center;
    };
    const top = triggerRect.top + offset;
    const left = calcLeft();

    setPosition({
      top: triggerRect.height + 15,
      left: 0
    });
  }, [$isVisible, triggerRef.current, tooltipRef.current]);

  return (
    <Box className='ds-ui-tooltip'>
      <S.TooltipWrapper
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </S.TooltipWrapper>
      <S.TooltipWrapperBox $isVisible={!nodeToText(content) ? false : $isVisible}>
        <TextStyle
          $textAlign='center'
          variant='paragraphXSmall'
          color={'--color-neutral-light'}
          $wordBreak='keep-all'
        >
          <S.TooltipBox
            ref={tooltipRef}
            $isVisible={!nodeToText(content) ? false : $isVisible}
            px={8}
            py={4}
            border='all'
            width={'auto'}
            $minWidth={'fit-content'}
            $maxWidth={200}
            $borderRadius='xs'
            style={{ top: position.top, left: position.left }}
          >
            {nodeToText(content)}
          </S.TooltipBox>
        </TextStyle>
      </S.TooltipWrapperBox>
    </Box>
  );
};

export default Tooltip;
