import { Box } from '@/shared-components/Box';
import { Divider } from '@/shared-components/Divider';
import { Popover } from '@/shared-components/Popover';
import { TextStyle } from '@/shared-components/TextStyle';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import * as S from './InputDropdown.styled';
import { InputDropdownProps, MenuItemType } from './InputDropdown.types';

const InputDropdown: React.FC<InputDropdownProps> = ({
  label,
  menuItems,
  activeMenu,
  onSelect,
  height,
  width,
  minHeight,
  $minWidth,
  $maxHeight,
  $maxWidth,
  variant = 'primary'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Box ref={wrapperRef} height={'100%'}>
      <Box
        ref={buttonRef}
        role='button'
        $isHover
        direction='row'
        gap={4}
        onClick={() => setIsOpen((prev) => !prev)}
        position='relative'
        $zIndex={1}
      >
        {variant !== 'primary' && (
          <Box
            mt={0}
            $alignItems='center'
            pointerEvents='none'
            position='relative'
            $zIndex={2}
            onClick={(e) => e.stopPropagation()}
          >
            <TextStyle variant={'labelXSmall'} color={`color-${variant}`}>
              {label}
            </TextStyle>
          </Box>
        )}
        <Box $justifyContent='center' $alignItems='center'>
          <Button
            variant={'ghost-main-no-padding'}
            $borderRadius='small'
            iconRight={isOpen ? 'arrow_down_bold' : 'arrow_up_bold'}
            sizeIcon={16}
            colorIcon='--color-primary'
            style={{ height: '100%', alignSelf: 'center', padding: '4px !important' }}
            pl={variant === 'primary' ? 12 : 8}
            pr={variant === 'primary' ? 8 : 8}
          >
            {variant === 'primary' && (
              <TextStyle variant={'labelSmallBold'} color={`color-${variant}`}>
                {label}
              </TextStyle>
            )}
          </Button>
        </Box>
      </Box>
      <Popover isOpen={isOpen} anchorRef={buttonRef} padding={0}>
        <Box
          direction='column'
          py={8}
          height={height}
          width={width}
          minHeight={minHeight}
          $minWidth={$minWidth}
          $maxHeight={$maxHeight}
          $maxWidth={$maxWidth}
        >
          {menuItems.map((item, index) => {
            const selectMenu = (item: MenuItemType): void => {
              onSelect(item);
              setIsOpen(false);
            };

            return (
              <Box key={item.id} direction='column'>
                {item.subMenu ? (
                  <>
                    <S.Item>
                      <TextStyle variant='labelSmall' color='color-neutral-grey-light'>
                        {item.label}
                      </TextStyle>
                    </S.Item>
                    {item.subMenu.map((sub) => (
                      <S.SubItem
                        key={sub.id}
                        $active={sub.id === activeMenu}
                        onClick={() => selectMenu(sub)}
                      >
                        <TextStyle variant='paragraphSmall'>{sub.label}</TextStyle>
                      </S.SubItem>
                    ))}
                    {index + 1 !== menuItems.length && <Divider m={0} />}
                  </>
                ) : (
                  <>
                    <S.SubItem
                      $active={item.id === activeMenu || Number(item.label) === Number(activeMenu)}
                      onClick={() => selectMenu(item)}
                    >
                      <TextStyle variant='paragraphSmall'>{item.label}</TextStyle>
                    </S.SubItem>
                    {index + 1 !== menuItems.length && <Divider m={0} />}
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Popover>
    </Box>
  );
};

export default InputDropdown;
