'use client';

import { Box } from '@/shared-components/Box';
import { Button } from '@/shared-components/Button';
import Icon from '@/shared-components/Icon/Icon';
import { Table } from '@/shared-components/Table';
import { TextField } from '@/shared-components/TextField';
import { TextStyle } from '@/shared-components/TextStyle';
import useDashboard from '@/hooks/useDashboard';
import globalSlice from '@/stores/globalSlice';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextArea } from '@/shared-components/TextArea';
import Checkbox from '@/shared-components/Checkbox/Checkbox';
import { InputDropdown } from '../shared-components/InputDropdown';
import ModalCreateContract from '../src/components/modalCreateContract';
import { PillStatus } from '@/shared-components/PillStatus';
import { Tooltip } from '@/shared-components/Tooltip';
import { DatePicker } from '@/shared-components/DatePicker/DatePicker';
import { Modal } from '@/shared-components/Modal';
import { Popover } from '@/shared-components/Popover';
import { Skeleton } from '@/shared-components/Skeleton';
import { Tabs } from '@/shared-components/Tabs';
import { ToastWrapper } from '@/shared-components/Toast/Toast.styled';
import { showToast } from '@/shared-components/Toast';

export default function Home() {
  // Access Zustand store
  const globalStore = globalSlice();
  const {
    bears, // BearState
    addBear, // BearState
    eatFish, // BearState

    fishes, // FishState
    addFish, // FishState
    eatBear, // FishState

    total, // SharedState
    addBearAndFish, // SharedState
    calculateBearAndFish // SharedState
  } = globalStore;
  const { t } = useTranslation();

  const anchorRef1 = useRef<HTMLButtonElement | null>(null);
  const anchorRef2 = useRef<HTMLButtonElement | null>(null);
  const [checked, setChecked] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [valueTab, setValueTab] = useState('1');
  const tab = [
    { label: 'Item One', value: '1', content: <div>Item One</div> },
    { label: 'Item Two', value: '2', content: <div>Item Two</div> },
    { label: 'Item Three', value: '3', content: <div>Item Three</div> }
  ];
  const {
    paginationOptions,
    pagination,
    setPagination,
    headers,
    values,
    filters,
    handleFilterChange,
    handleFilterBtnSearch,
    handleFilterBtnReset,
    filterByUserOptions,
    filterByUserOptionsActive,
    setFilterByUserOptionsActive,
    filterByTypeDocOptions,
    filterByTypeDocOptionsActive,
    setFilterByTypeDocOptionsActive,
    filterByStatusDocOptions,
    filterByStatusDocOptionsActive,
    setFilterByStatusDocOptionsActive,
    isShowModalCreateContract,
    setIsShowModalCreateContract
  } = useDashboard();

  const tooltipContent = (
    <>
      'This is a very long text that will be limited to 2 lines. It demonstrates text truncation with
      ellipsis when content overflows the specified number of lines.';
    </>
  );

  return (
    <>
      <Box direction='column' px={32} py={100} gap={16}>
        {/* Common  Box */}
        <TextStyle variant='h2'>Box</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='left' // left | center | right
            $alignItems='center' // start | center | end | baseline
            $justifyContent='center' // start | center | end | space-between | space-around
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={0}
            px={0}
            py={0}
          >
            <>
              <TextStyle variant='paragraphMedium'>box1</TextStyle>
              <TextStyle variant='paragraphMedium'>box2</TextStyle>
            </>
          </Box>
          <Box
            color='#f00'
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='center' // left | center | right
            $alignItems='center' // start | center | end | baseline
            $justifyContent='center' // start | center | end | space-between | space-around
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={50}
            px={10}
            py={10}
          >
            <>
              <TextStyle variant='paragraphMedium'>box1</TextStyle>
              <TextStyle variant='paragraphMedium'>box2</TextStyle>
            </>
          </Box>
          <Box
            color='#f00'
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            $alignItems='center' // start | center | end | baseline
            $justifyContent='center' // start | center | end | space-between | space-around
            direction='column' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={50}
            px={10}
            py={50}
          >
            <>
              <TextStyle variant='paragraphMedium'>box1</TextStyle>
              <TextStyle variant='paragraphMedium'>box2</TextStyle>
            </>
          </Box>
        </>
        {/* Common  Box */}

        {/* Common Button */}
        <TextStyle variant='h2'>Button</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              {(
                [
                  'primary',
                  'primary-no-padding',
                  'negative',
                  'secondary',
                  'tertiary',
                  'secondary-negative',
                  'ghost-main',
                  'ghost-primary',
                  'ghost-secondary',
                  'ghost-tertiary',
                  'ghost-negative',
                  'ghost-main-no-padding',
                  'ghost-primary-no-padding',
                  'ghost-secondary-no-padding',
                  'ghost-tertiary-no-padding',
                  'ghost-negative-no-padding',
                  'ghost-icon-main',
                  'ghost-icon-primary',
                  'ghost-icon-secondary',
                  'ghost-icon-tertiary',
                  'ghost-icon-negative',
                  'ghost-icon-main-no-padding',
                  'ghost-icon-primary-no-padding',
                  'ghost-icon-secondary-no-padding',
                  'ghost-icon-tertiary-no-padding',
                  'ghost-icon-negative-no-padding'
                ] as const
              ).map((variant) => (
                <Box key={variant} direction='none' gap={16}>
                  <TextStyle variant='h4'>Variant: {variant}</TextStyle>
                  {!variant.includes('icon') && (
                    <>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                      >
                        Default
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        size={'large'}
                      >
                        Default Large
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        disabled
                      >
                        Disabled
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        disabled
                        size={'large'}
                      >
                        Disabled Large
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        width='full'
                        $borderRadius='none'
                      >
                        Full Width Border radius none
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        width='full'
                      >
                        Full Width Border radius normal
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        width='full'
                        $borderRadius='round'
                      >
                        Full Width Border radius round
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        iconLeft='plus'
                      >
                        Left Icon
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        iconRight='calendar'
                      >
                        Right Icon
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        iconLeft='arrow_left'
                        iconRight='arrow_right'
                      >
                        Both Icons
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        iconLeft='arrow_left'
                        iconRight='arrow_right'
                        disabled
                      >
                        Both Icons
                      </Button>
                      <Button
                        onClick={() => {
                          // console.log("onClick" + variant);
                        }}
                        variant={variant}
                        iconLeft='arrow_left'
                        iconRight='arrow_right'
                        size={'large'}
                      >
                        Both Icons Large
                      </Button>
                    </>
                  )}
                  <>
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='printer'
                      $borderRadius='round'
                    />
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='edit'
                    />
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='share'
                      size='large'
                    />
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='user_circle'
                      $borderRadius='round'
                      disabled
                    />
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='trash'
                      disabled
                    />
                    <Button
                      onClick={() => {
                        // console.log("onClick" + variant);
                      }}
                      variant={variant}
                      iconLeft='history'
                      size='large'
                      disabled
                    />
                  </>
                </Box>
              ))}
            </>
          </Box>
        </>
        {/* Common Button */}

        {/* Common Checkbox */}
        <TextStyle variant='h2'>Checkbox</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <Checkbox
              label=''
              name='checkbox-gender'
              $isChecked={checked}
              onChange={(e) => {
                console.log(e);
                setChecked(e.target.checked);
              }}
            />
            <Checkbox
              label='Default Checkbox'
              name='checkbox-gender'
              $isChecked={checked}
              onChange={(e) => {
                console.log(e);
                setChecked(e.target.checked);
              }}
            />
            <Checkbox label='Large Checkbox (Unchecked)' $isChecked={false} />
            <Checkbox label='Default Checkbox (Checked)' $isChecked={true} />
            <Checkbox label='Large Checkbox (Unchecked)' $isChecked={false} size={50} />
            <Checkbox label='Default Checkbox (Checked)' $isChecked={true} size={50} />
            <Checkbox label='Disabled Checkbox (Unchecked)' $isChecked={false} $isDisabled />
            <Checkbox label='$isDisabled Checkbox (Checked)' $isChecked={true} $isDisabled />
            <Checkbox
              label='$isDisabled Checkbox (Unchecked)'
              $isChecked={false}
              $isDisabled
              size={50}
            />
            <Checkbox label='$isDisabled Checkbox (Checked)' $isChecked={true} $isDisabled size={50} />
          </Box>
        </>
        {/* Common Checkbox */}

        {/* Common IconComponent */}
        <TextStyle variant='h2'>IconComponent</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              {[
                ...[
                  'alert_circle_bold',
                  'alert_circle',
                  'arrow_down_bold',
                  'arrow_down',
                  'arrow_left',
                  'arrow_right',
                  'arrow_up_bold',
                  'arrow_up',
                  'calendar',
                  'cancel_circle_fill',
                  'check_circle',
                  'check',
                  'close',
                  'download',
                  'edit',
                  'help_circle_fill',
                  'history',
                  'home',
                  'info_circle',
                  'logout',
                  'minus',
                  'plus',
                  'printer',
                  'refresh',
                  'save',
                  'search',
                  'share',
                  'sort_ascending',
                  'sort_descending',
                  'sorting',
                  'trash',
                  'user_circle',
                  'view_document',
                  'img_empty_svg',
                  'img_nodata_svg',
                  'img_mobile_bar',
                  'img_profile_circle',
                  'img_ttb_logo'
                  // 'empty_search',
                  // 'empty_box',
                  // 'img_mobile_bar_svg'
                ]
              ].map((iconName) => (
                <Box key={iconName} direction='column' gap={4} $alignItems='center'>
                  <Icon icon={iconName} color='--color-error' width={50} height={50} />
                  <span style={{ fontSize: '12px' }}>{iconName}</span>
                </Box>
              ))}
            </>
          </Box>
        </>
        {/* Common IconComponent */}

        {/* Common TextField */}
        <TextStyle variant='h2'>TextField</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Box direction='column' gap={40}>
                {/* ✅ Normal */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Normal TextFields</TextStyle>
                  <TextField
                    label='Basic'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    placeholder='Type here...'
                    width={400}
                  />
                  <TextField
                    label='Basic $isClearable'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    placeholder='Type here...'
                    width={400}
                    $isClearable
                  />
                  <TextField label='Basic' placeholder='Type here...' width={400} />
                  <TextField
                    label='Basic'
                    placeholder='Type here...'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    $isClearable
                  />
                  <TextField label='Basic' placeholder='Type here...' />
                  <TextField
                    labelHelping='With Helper'
                    label='With Helper'
                    placeholder='Enter something'
                    helpingText='Supporting text here'
                  />
                  <TextField
                    label='With Error'
                    placeholder='Oops...'
                    error
                    helpingText='Still showing helper'
                    errorMessage='Something went wrong'
                  />
                  <TextField label='Disabled' placeholder='Not editable' disabled />
                </Box>

                {/* ✅ Input Types */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Input Types</TextStyle>
                  <TextField label='Text' type='text' placeholder='Enter text' />
                  <TextField label='Number' type='number' placeholder='Enter number' />
                  <TextField label='Email' type='email' placeholder='your@email.com' />
                  <TextField label='Password' type='password' placeholder='••••••••' />
                  <TextField label='Telephone' type='tel' placeholder='012-345-6789' />
                </Box>

                {/* ✅ With Icons */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>With Icons</TextStyle>
                  <TextField
                    label='Left Icon'
                    iconLeft={<Icon icon='search' />}
                    placeholder='Search here'
                  />
                  <TextField
                    label='Right Icon'
                    iconRight={<Icon icon='calendar' />}
                    placeholder='Pick a date'
                  />
                  <TextField
                    label='Both Icons'
                    iconLeft={<Icon icon='plus' />}
                    iconRight={<Icon icon='minus' />}
                    placeholder='Adjust amount'
                  />
                </Box>

                {/* ✅ Variants */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Variants</TextStyle>
                  <TextField label='Amount' variant='amount' placeholder='0.00' type='number' />
                  <TextField
                    label='Search Field'
                    variant='search'
                    placeholder='Search something...'
                    iconLeft={<Icon icon='search' />}
                  />
                  <TextField
                    label='Amount Transaction'
                    variant='amount-transaction'
                    placeholder='Enter amount'
                  />
                </Box>

                {/* ✅ Styling: width, $marginBottom, $zIndex */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Styled TextField</TextStyle>
                  <TextField label='Custom Width' placeholder='400px wide' width={400} />
                  <TextField label='With $zIndex' placeholder='This field has $zIndex' $zIndex={100} />
                  <TextField label='Margin Bottom' placeholder='Has spacing below' $marginBottom={32} />
                </Box>

                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Error States</TextStyle>

                  {/* 🔴 Basic error state */}
                  <TextField
                    label='Error Only'
                    labelHelping='Error Only'
                    placeholder='Invalid input'
                    error
                  />

                  {/* 🔴 Error with message */}
                  <TextField
                    label='Error with Message'
                    placeholder='Try again'
                    error
                    helpingText='Username must be at least 6 characters'
                  />

                  {/* 🔴 Error + Helper text */}
                  <TextField
                    label='Error with Both Messages'
                    placeholder='Enter email'
                    type='email'
                    error
                    helpingText='Use your company email'
                    errorMessage='Invalid email format'
                  />

                  {/* 🔴 Disabled with error (for edge case testing) */}
                  <TextField
                    label='Disabled + Error'
                    placeholder="Can't type"
                    disabled
                    error
                    helpingText='Field cannot be edited'
                    errorMessage='Still showing error'
                  />
                </Box>
              </Box>
            </>

            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {/* Normal Text Fields */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Normal Text Fields</TextStyle>
                    <TextField label='Default TextField' placeholder='Enter text here' />
                    <TextField
                      label='With Helper Text'
                      placeholder='Enter text'
                      helpingText='This is a helping text'
                    />
                    <TextField
                      label='With Error'
                      placeholder='Enter text'
                      error={true}
                      errorMessage='This is an error message'
                    />
                    <TextField
                      label='Disabled TextField'
                      placeholder='Cannot edit this'
                      disabled={true}
                    />
                  </Box>
                  {/* Normal Text Fields */}

                  {/* Special Types */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Special Types</TextStyle>
                    <TextField label='Email Field' type='email' placeholder='Enter email' />
                    <TextField label='Password Field' type='password' placeholder='Enter password' />
                    <TextField label='Number Field' type='number' placeholder='Enter number' />
                    <TextField label='Tel Field' type='tel' placeholder='Enter phone number' />
                  </Box>
                  {/* Special Types */}

                  {/* With Icons */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>With Icons</TextStyle>
                    <TextField
                      label='Left Icon'
                      placeholder='Search...'
                      iconLeft={<Icon icon='search' />}
                    />
                    <TextField
                      label='Right Icon'
                      placeholder='Select date'
                      iconRight={<Icon icon='calendar' />}
                    />
                    <TextField
                      label='Both Icons'
                      placeholder='Enter amount'
                      iconLeft={<Icon icon='plus' />}
                      iconRight={<Icon icon='minus' />}
                    />
                  </Box>
                  {/* With Icons */}

                  {/* Variants */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Variants</TextStyle>
                    <TextField label='Amount' variant='amount' placeholder='0.00' />
                    <TextField
                      label='Search'
                      variant='search'
                      placeholder='Search...'
                      iconLeft={<Icon icon='search' />}
                    />
                    <TextField
                      label='Amount Transaction'
                      variant='amount-transaction'
                      placeholder='Enter amount'
                    />
                  </Box>
                  {/* Variants */}
                </>
              </Box>
            </>
          </Box>
        </>
        {/* Common TextField */}

        {/* Common DatePicker */}
        <TextStyle variant='h2'>DatePicker</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <DatePicker
              value={new Date()}
              onChange={(date) => console.log(date)}
              onClose={() => console.log('Closed')}
            />
          </Box>
        </>
        {/* Common DatePicker */}

        {/* Common Modal */}
        <TextStyle variant='h2'>Modal</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <Button onClick={() => setIsShowModal(true)}>Show Modal</Button>
            <Modal isOpen={isShowModal} title='Modal' onClose={() => setIsShowModal(false)}>
              <Box width={500} height={500} position='relative' $bgColor='--color-error'>
                <p>This is modal</p>
              </Box>
            </Modal>
          </Box>
        </>
        {/* Common Modal */}

        {/* Common PillComponent */}
        <TextStyle variant='h2'>PillComponent</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-neutral-light'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              {[
                'default',
                'purple',
                'danger',
                'warning',
                'light-orange',
                'disabled',
                'information',
                'success',
                'primary'
              ].map((variant) => (
                <Box key={variant} direction='column' gap={4} $alignItems='center'>
                  <PillStatus variant={variant}>{variant}</PillStatus>
                </Box>
              ))}
            </>
          </Box>
        </>
        {/* Common PillComponent */}

        {/* Common Popover */}
        <TextStyle variant='h2'>Popover</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-neutral-light'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Box direction='row' gap={4} $alignItems='center'>
                <Box direction='row' gap={4} $alignItems='center'>
                  <Button ref={anchorRef1} onClick={() => setIsShowPopover(true)}>
                    Show Popover isNotAllowDisplayTop
                  </Button>
                  <Button ref={anchorRef2} onClick={() => setIsShowPopover(true)}>
                    Show Popover isAllowDisplayTop
                  </Button>
                </Box>
                <Popover
                  anchorRef={anchorRef1}
                  isOpen={isShowPopover}
                  padding={0}
                  onClose={() => setIsShowPopover(false)}
                  $isAllowDisplayTop={false}
                >
                  {[...Array(10)].map((_, index) => (
                    <Box key={index} px={16} py={8}>
                      <TextStyle variant='paragraphMedium'>Popover Item {index + 1}</TextStyle>
                    </Box>
                  ))}
                </Popover>
                <Popover
                  anchorRef={anchorRef2}
                  isOpen={isShowPopover}
                  padding={0}
                  onClose={() => setIsShowPopover(false)}
                  $isAllowDisplayTop={true}
                >
                  {[...Array(10)].map((_, index) => (
                    <Box key={index} px={16} py={8}>
                      <TextStyle variant='paragraphMedium'>Popover Item {index + 1}</TextStyle>
                    </Box>
                  ))}
                </Popover>
              </Box>
            </>
          </Box>
        </>
        {/* Common Popover */}

        {/* Common Skeleton */}
        <TextStyle variant='h2'>Skeleton</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-neutral-light'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Box direction='row' gap={4} $alignItems='center' $isFullWidth $flexWrap='wrap'>
                {[...Array(10)].map((_, index) => (
                  <Box key={index} flex={1} $minWidth={'200px'}>
                    <Skeleton />
                  </Box>
                ))}
              </Box>
            </>
          </Box>
        </>
        {/* Common Skeleton */}

        {/* Common Tabs */}
        <TextStyle variant='h2'>Tabs</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-neutral-light'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Tabs
                tabsName='Items List'
                activeTab={valueTab}
                menu={tab}
                onChange={(newVal) => setValueTab(newVal)}
              />
            </>
          </Box>
        </>
        {/* Common Tabs */}

        {/* Common Table  */}
        <TextStyle variant='h2'>Table</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            width={'max-content'}
            $minWidth={'calc(100% - 64px)'}
          >
            <Box direction='column' $minWidth={'calc(100% - 64px)'} px={24} py={24}>
              <Box direction='column' width={'fit-content'} $minWidth={'100%'} flex={1} gap={24}>
                <Table
                  headers={headers}
                  values={values}
                  $maxHeightTable={'calc(100dvh - 300px)'}
                  paginationOptions={paginationOptions}
                  page={pagination.page}
                  limit={pagination.limit}
                  count={pagination.count}
                  onPageChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
                  onLimitChange={(newLimit) => {
                    setPagination((prev) => ({
                      ...prev,
                      limit: newLimit,
                      page: 1
                    }));
                  }}
                />
                <Table
                  mode='light'
                  size='md'
                  $maxHeightTable={'200px'}
                  headers={headers}
                  values={values}
                  paginationOptions={paginationOptions}
                  page={pagination.page}
                  limit={pagination.limit}
                  count={pagination.count}
                  onPageChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
                  onLimitChange={(newLimit) =>
                    setPagination((prev) => ({
                      ...prev,
                      limit: newLimit,
                      page: 1
                    }))
                  }
                  isPaginationDisabled
                />
              </Box>
            </Box>
          </Box>
        </>
        {/* Common Table  */}

        {/* Common TextStyle */}
        <TextStyle variant='h2'>TextStyle</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              {/* Headings */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Heading Styles</TextStyle>
                <Box direction='column' gap={8}>
                  <TextStyle variant='h2'>Heading 2</TextStyle>
                  <TextStyle variant='h4'>Heading 4</TextStyle>
                  <TextStyle variant='h6'>Heading 6</TextStyle>
                  <TextStyle variant='pageTitle'>Page Title</TextStyle>
                </Box>
              </Box>
              {/* Paragraphs */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Paragraph Styles</TextStyle>
                <Box direction='column' gap={8}>
                  <TextStyle variant='paragraphMedium'>
                    Medium paragraph text for regular content
                  </TextStyle>
                  <TextStyle variant='paragraphSmall'>
                    Small paragraph text for secondary content
                  </TextStyle>
                  <TextStyle variant='paragraphXSmall'>
                    Extra small paragraph text for captions
                  </TextStyle>
                </Box>
              </Box>
              {/* Labels */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Label Styles</TextStyle>
                <Box direction='column' gap={8}>
                  <TextStyle variant='labelMedium'>Medium Label</TextStyle>
                  <TextStyle variant='labelSmall'>Small Label</TextStyle>
                  <TextStyle variant='labelSmallBold'>Small Bold Label</TextStyle>
                  <TextStyle variant='labelXSmall'>Extra Small Label</TextStyle>
                  <TextStyle variant='labelXSmallBold'>Extra Small Bold Label</TextStyle>
                </Box>
              </Box>
              {/* Interactive Elements */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Interactive Styles</TextStyle>
                <Box direction='column' gap={8}>
                  <TextStyle variant='buttonBig'>Large Button Text</TextStyle>
                  <TextStyle variant='buttonMedium'>Medium Button Text</TextStyle>
                </Box>
              </Box>
              {/* Text Colors */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Text Colors</TextStyle>
                <Box direction='column' gap={8}>
                  <TextStyle color='--text-primary-dark'>Primary Dark Text</TextStyle>
                  <TextStyle color='--color-primary'>Primary Brand Color</TextStyle>
                  <TextStyle color='--color-secondary'>Secondary Text</TextStyle>
                  <TextStyle color='--color-success'>Success Message</TextStyle>
                  <TextStyle color='--color-danger'>Error Message</TextStyle>
                  <TextStyle color='--color-warning'>Warning Message</TextStyle>
                </Box>
              </Box>
              {/* Text Formatting */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Text Formatting</TextStyle>
                <Box direction='column' gap={8}>
                  {/* Line Limiting */}
                  <TextStyle $limitLine={2}>
                    This is a very long text that will be limited to 2 lines. It demonstrates text
                    truncation with ellipsis when content overflows the specified number of lines.
                  </TextStyle>
                  {/* Word Breaking */}
                  <TextStyle $wordBreak='break-all'>
                    This is a very long word that will break at any point
                  </TextStyle>
                  {/* Text Alignment */}
                  <Box direction='column' gap={4}>
                    <TextStyle $textAlign='left'>Left aligned text</TextStyle>
                    <TextStyle $textAlign='center'>Center aligned text</TextStyle>
                    <TextStyle $textAlign='right'>Right aligned text</TextStyle>
                  </Box>
                  {/* Regular text */}
                  <TextStyle variant='paragraphMedium'>Normal text</TextStyle>
                  {/* Underlined text */}
                  <TextStyle variant='paragraphMedium' textDecoration='underline'>
                    Underlined text
                  </TextStyle>
                  {/* Overline text */}
                  <TextStyle variant='paragraphMedium' textDecoration='overline'>
                    Overline text
                  </TextStyle>
                </Box>
                {/* Line through text */}
                <TextStyle variant='paragraphMedium' textDecoration='line-through'>
                  {/* Struck through text */}
                </TextStyle>
              </Box>
              {/* Nested Text */}
              <Box direction='column' gap={16}>
                <TextStyle variant='h2'>Nested Text Example</TextStyle>
                <TextStyle variant='h2'>
                  Main Heading with <TextStyle color='--color-accent)'>inline accent text</TextStyle> and
                  continuation
                </TextStyle>
              </Box>
            </>
          </Box>
          {/* White Space Handling */}
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <TextStyle variant='h2'>Text Formatting</TextStyle>
              <TextStyle $whiteSpace='nowrap'>
                This text won't wrap to a new line even if it's very long
              </TextStyle>
            </>
          </Box>
        </>
        {/* Common TextStyle */}

        {/* Common TextArea  */}
        <TextStyle variant='h2'>TextArea</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Box direction='column' gap={40}>
                {/* ✅ Normal */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Normal TextAreas</TextStyle>
                  <TextArea
                    label='Basic'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    placeholder='Type here...'
                    width={400}
                  />
                  <TextArea
                    label='Basic $isClearable'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    placeholder='Type here...'
                    width={400}
                    $isClearable
                  />
                  <TextArea label='Basic' placeholder='Type here...' width={400} />
                  <TextArea
                    label='Basic'
                    placeholder='Type here...'
                    value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    $isClearable
                  />
                  <TextArea label='Basic' placeholder='Type here...' />
                  <TextArea
                    labelHelping='With Helper'
                    label='With Helper'
                    placeholder='Enter something'
                    helpingText='Supporting text here'
                  />
                  <TextArea
                    label='With Error'
                    placeholder='Oops...'
                    error
                    helpingText='Still showing helper'
                    errorMessage='Something went wrong'
                  />
                  <TextArea label='Disabled' placeholder='Not editable' disabled />
                </Box>

                {/* ✅ Input Types */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Input Types</TextStyle>
                  <TextArea label='Text' type='text' placeholder='Enter text' />
                  <TextArea label='Number' type='number' placeholder='Enter number' />
                  <TextArea label='Email' type='email' placeholder='your@email.com' />
                  <TextArea label='Password' type='password' placeholder='••••••••' />
                  <TextArea label='Telephone' type='tel' placeholder='012-345-6789' />
                </Box>

                {/* ✅ With Icons */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>With Icons</TextStyle>
                  <TextArea
                    label='Left Icon'
                    iconLeft={<Icon icon='search' />}
                    placeholder='Search here'
                  />
                  <TextArea
                    label='Right Icon'
                    iconRight={<Icon icon='calendar' />}
                    placeholder='Pick a date'
                  />
                  <TextArea
                    label='Both Icons'
                    iconLeft={<Icon icon='plus' />}
                    iconRight={<Icon icon='minus' />}
                    placeholder='Adjust amount'
                  />
                </Box>

                {/* ✅ Variants */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Variants</TextStyle>
                  <TextArea label='Amount' variant='amount' placeholder='0.00' type='number' />
                  <TextArea
                    label='Search Field'
                    variant='search'
                    placeholder='Search something...'
                    iconLeft={<Icon icon='search' />}
                  />
                  <TextArea
                    label='Amount Transaction'
                    variant='amount-transaction'
                    placeholder='Enter amount'
                  />
                </Box>

                {/* ✅ Styling: width, $marginBottom, $zIndex */}
                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Styled TextArea</TextStyle>
                  <TextArea label='Custom Width' placeholder='400px wide' width={400} />
                  <TextArea label='With $zIndex' placeholder='This field has $zIndex' $zIndex={100} />
                  <TextArea label='Margin Bottom' placeholder='Has spacing below' $marginBottom={32} />
                </Box>

                <Box direction='column' gap={8}>
                  <TextStyle variant='h4'>Error States</TextStyle>

                  {/* 🔴 Basic error state */}
                  <TextArea
                    label='Error Only'
                    labelHelping='Error Only'
                    placeholder='Invalid input'
                    error
                  />

                  {/* 🔴 Error with message */}
                  <TextArea
                    label='Error with Message'
                    placeholder='Try again'
                    error
                    helpingText='Username must be at least 6 characters'
                  />

                  {/* 🔴 Error + Helper text */}
                  <TextArea
                    label='Error with Both Messages'
                    placeholder='Enter email'
                    type='email'
                    error
                    helpingText='Use your company email'
                    errorMessage='Invalid email format'
                  />

                  {/* 🔴 Disabled with error (for edge case testing) */}
                  <TextArea
                    label='Disabled + Error'
                    placeholder="Can't type"
                    disabled
                    error
                    helpingText='Field cannot be edited'
                    errorMessage='Still showing error'
                  />
                </Box>
              </Box>
            </>

            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {/* Normal Text Fields */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Normal Text Fields</TextStyle>
                    <TextArea label='Default TextArea' placeholder='Enter text here' />
                    <TextArea
                      label='With Helper Text'
                      placeholder='Enter text'
                      helpingText='This is a helping text'
                    />
                    <TextArea
                      label='With Error'
                      placeholder='Enter text'
                      error={true}
                      errorMessage='This is an error message'
                    />
                    <TextArea label='Disabled TextArea' placeholder='Cannot edit this' disabled={true} />
                  </Box>
                  {/* Normal Text Fields */}

                  {/* Special Types */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Special Types</TextStyle>
                    <TextArea label='Email Field' type='email' placeholder='Enter email' />
                    <TextArea label='Password Field' type='password' placeholder='Enter password' />
                    <TextArea label='Number Field' type='number' placeholder='Enter number' />
                    <TextArea label='Tel Field' type='tel' placeholder='Enter phone number' />
                  </Box>
                  {/* Special Types */}

                  {/* With Icons */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>With Icons</TextStyle>
                    <TextArea
                      label='Left Icon'
                      placeholder='Search...'
                      iconLeft={<Icon icon='search' />}
                    />
                    <TextArea
                      label='Right Icon'
                      placeholder='Select date'
                      iconRight={<Icon icon='calendar' />}
                    />
                    <TextArea
                      label='Both Icons'
                      placeholder='Enter amount'
                      iconLeft={<Icon icon='plus' />}
                      iconRight={<Icon icon='minus' />}
                    />
                  </Box>
                  {/* With Icons */}

                  {/* Variants */}
                  <Box direction='column' gap={8}>
                    <TextStyle variant='h4'>Variants</TextStyle>
                    <TextArea label='Amount' variant='amount' placeholder='0.00' />
                    <TextArea
                      label='Search'
                      variant='search'
                      placeholder='Search...'
                      iconLeft={<Icon icon='search' />}
                    />
                    <TextArea
                      label='Amount Transaction'
                      variant='amount-transaction'
                      placeholder='Enter amount'
                    />
                  </Box>
                  {/* Variants */}
                </>
              </Box>
            </>
          </Box>
        </>
        {/* Common TextArea  */}

        {/* Common Toast  */}
        <TextStyle variant='h2'>Toast</TextStyle>
        <>
          <Box
            $bgColor='--color-bg-primary'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <>
              <Box direction='row' gap={4} $alignItems='center' $isFullWidth $flexWrap='wrap'>
                {['error', 'success', 'warning', 'info'].map((_, index) => (
                  <Box key={index} flex={1} $minWidth={'200px'}>
                    <Button
                      onClick={() => {
                        // showToast[_](`Opening toast with ${_} message`);
                        switch (_) {
                          case 'error':
                            showToast.error(`This is an ${_} message`);
                            break;
                          case 'success':
                            showToast.success(`This is a ${_} message`);
                            break;
                          case 'warning':
                            showToast.warning(`This is a ${_} message`);
                            break;
                          case 'info':
                            showToast.info(`This is an ${_} message`);
                            break;
                        }
                      }}
                    >
                      {`Show ${_} Toast`}
                    </Button>
                  </Box>
                ))}
              </Box>
            </>
            {/* {<>{showToast.error('Toast message error')}</>}
            {<>{showToast.success('Toast message success')}</>}
            {<>{showToast.warning('Toast message warning')}</>}
            {<>{showToast.info('Toast message info')}</>} */}
          </Box>
        </>
        {/* Common Toast  */}

        {/* Common TooltipComponent */}
        <TextStyle variant='h2'>TooltipComponent</TextStyle>
        <>
          <Box
            color='#f00'
            $bgColor='--color-neutral-light'
            border='all' // all | top | bottom
            $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
            $borderWidth={1} // 0 | 1 | 2
            $boxShadow='top' // none | top | bottom
            $textAlign='right' // left | center | right
            direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
            $isHover={true}
            gap={10}
            px={24}
            py={24}
          >
            <Box>
              <Box position='relative' direction='column' gap={16}>
                <Box position='relative'>
                  <Tooltip content={tooltipContent}>
                    <TextStyle $limitLine={1}>
                      This is a very long text that will be limited to 2 lines. It demonstrates text
                      truncation with ellipsis when content overflows the specified number of lines.
                    </TextStyle>
                  </Tooltip>
                </Box>
                <Box position='relative'>
                  <Tooltip content={tooltipContent}>
                    <TextStyle $limitLine={1}>
                      This is a very long text that will be limited to 2 lines. It demonstrates text
                      truncation with ellipsis when content overflows the specified number of lines.
                    </TextStyle>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
        {/* Common TooltipComponent */}
      </Box>
    </>
  );

  return (
    <>
      {/* Note */}
      <>
        <Box direction='column' p={32}>
          {/* Common  Box */}
          <Box direction='column' gap={50}>
            {/* Common Checkbox */}
            <TextStyle variant='h2'>Checkbox</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                {/* <Checkbox
										label=''
										name='checkbox-gender'
										$isChecked={checked}
										onChange={(e) => {
											console.log(e);
											setChecked(e.target.checked);
										}}
									/>
									<Checkbox
										label='Default Checkbox'
										name='checkbox-gender'
										$isChecked={checked}
										onChange={(e) => {
											console.log(e);
											setChecked(e.target.checked);
										}}
									/> */}
                <Checkbox label='Large Checkbox (Unchecked)' $isChecked={false} />
                <Checkbox label='Default Checkbox (Checked)' $isChecked={true} />
                <Checkbox label='Large Checkbox (Unchecked)' $isChecked={false} size={50} />
                <Checkbox label='Default Checkbox (Checked)' $isChecked={true} size={50} />
                <Checkbox label='Disabled Checkbox (Unchecked)' $isChecked={false} $isDisabled />
                <Checkbox label='$isDisabled Checkbox (Checked)' $isChecked={true} $isDisabled />
                <Checkbox
                  label='$isDisabled Checkbox (Unchecked)'
                  $isChecked={false}
                  $isDisabled
                  size={50}
                />
                <Checkbox
                  label='$isDisabled Checkbox (Checked)'
                  $isChecked={true}
                  $isDisabled
                  size={50}
                />
              </Box>
            </>
            {/* Common Checkbox */}

            {/* Common Table */}
            <TextStyle variant='h2'>Table</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                width={'max-content'}
                $minWidth={'calc(100% - 64px)'}
              >
                <Box direction='column' $minWidth={'calc(100% - 64px)'} px={24} py={24}>
                  <Box direction='column' width={'fit-content'} $minWidth={'100%'} flex={1} gap={24}>
                    <Table
                      headers={headers}
                      values={values}
                      $maxHeightTable={'calc(100dvh - 300px)'}
                      paginationOptions={paginationOptions}
                      page={pagination.page}
                      limit={pagination.limit}
                      count={pagination.count}
                      onPageChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
                      onLimitChange={(newLimit) => {
                        setPagination((prev) => ({
                          ...prev,
                          limit: newLimit,
                          page: 1
                        }));
                      }}
                    />
                    <Table
                      mode='light'
                      size='md'
                      $maxHeightTable={'200px'}
                      headers={headers}
                      values={values}
                      paginationOptions={paginationOptions}
                      page={pagination.page}
                      limit={pagination.limit}
                      count={pagination.count}
                      onPageChange={(newPage) => setPagination((prev) => ({ ...prev, page: newPage }))}
                      onLimitChange={(newLimit) =>
                        setPagination((prev) => ({
                          ...prev,
                          limit: newLimit,
                          page: 1
                        }))
                      }
                      isPaginationDisabled
                    />
                  </Box>
                </Box>
              </Box>
            </>
            {/* Common Table */}

            {/* Common TextArea */}
            <TextStyle variant='h2'>TextArea</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  <Box direction='column' gap={40}>
                    {/* ✅ Normal */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Normal TextAreas</TextStyle>
                      <TextArea
                        label='Basic'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        placeholder='Type here...'
                        width={400}
                      />
                      <TextArea
                        label='Basic $isClearable'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        placeholder='Type here...'
                        width={400}
                        $isClearable
                      />
                      <TextArea label='Basic' placeholder='Type here...' width={400} />
                      <TextArea
                        label='Basic'
                        placeholder='Type here...'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        $isClearable
                      />
                      <TextArea label='Basic' placeholder='Type here...' />
                      <TextArea
                        labelHelping='With Helper'
                        label='With Helper'
                        placeholder='Enter something'
                        helpingText='Supporting text here'
                      />
                      <TextArea
                        label='With Error'
                        placeholder='Oops...'
                        error
                        helpingText='Still showing helper'
                        errorMessage='Something went wrong'
                      />
                      <TextArea label='Disabled' placeholder='Not editable' disabled />
                    </Box>

                    {/* ✅ Input Types */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Input Types</TextStyle>
                      <TextArea label='Text' type='text' placeholder='Enter text' />
                      <TextArea label='Number' type='number' placeholder='Enter number' />
                      <TextArea label='Email' type='email' placeholder='your@email.com' />
                      <TextArea label='Password' type='password' placeholder='••••••••' />
                      <TextArea label='Telephone' type='tel' placeholder='012-345-6789' />
                    </Box>

                    {/* ✅ With Icons */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>With Icons</TextStyle>
                      <TextArea
                        label='Left Icon'
                        iconLeft={<Icon icon='search' />}
                        placeholder='Search here'
                      />
                      <TextArea
                        label='Right Icon'
                        iconRight={<Icon icon='calendar' />}
                        placeholder='Pick a date'
                      />
                      <TextArea
                        label='Both Icons'
                        iconLeft={<Icon icon='plus' />}
                        iconRight={<Icon icon='minus' />}
                        placeholder='Adjust amount'
                      />
                    </Box>

                    {/* ✅ Variants */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Variants</TextStyle>
                      <TextArea label='Amount' variant='amount' placeholder='0.00' type='number' />
                      <TextArea
                        label='Search Field'
                        variant='search'
                        placeholder='Search something...'
                        iconLeft={<Icon icon='search' />}
                      />
                      <TextArea
                        label='Amount Transaction'
                        variant='amount-transaction'
                        placeholder='Enter amount'
                      />
                    </Box>

                    {/* ✅ Styling: width, $marginBottom, $zIndex */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Styled TextArea</TextStyle>
                      <TextArea label='Custom Width' placeholder='400px wide' width={400} />
                      <TextArea
                        label='With $zIndex'
                        placeholder='This field has $zIndex'
                        $zIndex={100}
                      />
                      <TextArea
                        label='Margin Bottom'
                        placeholder='Has spacing below'
                        $marginBottom={32}
                      />
                    </Box>

                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Error States</TextStyle>

                      {/* 🔴 Basic error state */}
                      <TextArea
                        label='Error Only'
                        labelHelping='Error Only'
                        placeholder='Invalid input'
                        error
                      />

                      {/* 🔴 Error with message */}
                      <TextArea
                        label='Error with Message'
                        placeholder='Try again'
                        error
                        helpingText='Username must be at least 6 characters'
                      />

                      {/* 🔴 Error + Helper text */}
                      <TextArea
                        label='Error with Both Messages'
                        placeholder='Enter email'
                        type='email'
                        error
                        helpingText='Use your company email'
                        errorMessage='Invalid email format'
                      />

                      {/* 🔴 Disabled with error (for edge case testing) */}
                      <TextArea
                        label='Disabled + Error'
                        placeholder="Can't type"
                        disabled
                        error
                        helpingText='Field cannot be edited'
                        errorMessage='Still showing error'
                      />
                    </Box>
                  </Box>
                </>

                <>
                  <Box
                    $bgColor='--color-bg-primary'
                    border='all' // all | top | bottom
                    $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                    $borderWidth={1} // 0 | 1 | 2
                    $boxShadow='top' // none | top | bottom
                    direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                    $isHover={true}
                    gap={10}
                    px={24}
                    py={24}
                  >
                    <>
                      {/* Normal Text Fields */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Normal Text Fields</TextStyle>
                        <TextArea label='Default TextArea' placeholder='Enter text here' />
                        <TextArea
                          label='With Helper Text'
                          placeholder='Enter text'
                          helpingText='This is a helping text'
                        />
                        <TextArea
                          label='With Error'
                          placeholder='Enter text'
                          error={true}
                          errorMessage='This is an error message'
                        />
                        <TextArea
                          label='Disabled TextArea'
                          placeholder='Cannot edit this'
                          disabled={true}
                        />
                      </Box>
                      {/* Normal Text Fields */}

                      {/* Special Types */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Special Types</TextStyle>
                        <TextArea label='Email Field' type='email' placeholder='Enter email' />
                        <TextArea label='Password Field' type='password' placeholder='Enter password' />
                        <TextArea label='Number Field' type='number' placeholder='Enter number' />
                        <TextArea label='Tel Field' type='tel' placeholder='Enter phone number' />
                      </Box>
                      {/* Special Types */}

                      {/* With Icons */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>With Icons</TextStyle>
                        <TextArea
                          label='Left Icon'
                          placeholder='Search...'
                          iconLeft={<Icon icon='search' />}
                        />
                        <TextArea
                          label='Right Icon'
                          placeholder='Select date'
                          iconRight={<Icon icon='calendar' />}
                        />
                        <TextArea
                          label='Both Icons'
                          placeholder='Enter amount'
                          iconLeft={<Icon icon='plus' />}
                          iconRight={<Icon icon='minus' />}
                        />
                      </Box>
                      {/* With Icons */}

                      {/* Variants */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Variants</TextStyle>
                        <TextArea label='Amount' variant='amount' placeholder='0.00' />
                        <TextArea
                          label='Search'
                          variant='search'
                          placeholder='Search...'
                          iconLeft={<Icon icon='search' />}
                        />
                        <TextArea
                          label='Amount Transaction'
                          variant='amount-transaction'
                          placeholder='Enter amount'
                        />
                      </Box>
                      {/* Variants */}
                    </>
                  </Box>
                </>
              </Box>
            </>
            {/* Common TextArea */}

            {/* Common TextField */}
            <TextStyle variant='h2'>TextField</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  <Box direction='column' gap={40}>
                    {/* ✅ Normal */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Normal TextFields</TextStyle>
                      <TextField
                        label='Basic'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        placeholder='Type here...'
                        width={400}
                      />
                      <TextField
                        label='Basic $isClearable'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        placeholder='Type here...'
                        width={400}
                        $isClearable
                      />
                      <TextField label='Basic' placeholder='Type here...' width={400} />
                      <TextField
                        label='Basic'
                        placeholder='Type here...'
                        value='Basic $isClearable lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        $isClearable
                      />
                      <TextField label='Basic' placeholder='Type here...' />
                      <TextField
                        labelHelping='With Helper'
                        label='With Helper'
                        placeholder='Enter something'
                        helpingText='Supporting text here'
                      />
                      <TextField
                        label='With Error'
                        placeholder='Oops...'
                        error
                        helpingText='Still showing helper'
                        errorMessage='Something went wrong'
                      />
                      <TextField label='Disabled' placeholder='Not editable' disabled />
                    </Box>

                    {/* ✅ Input Types */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Input Types</TextStyle>
                      <TextField label='Text' type='text' placeholder='Enter text' />
                      <TextField label='Number' type='number' placeholder='Enter number' />
                      <TextField label='Email' type='email' placeholder='your@email.com' />
                      <TextField label='Password' type='password' placeholder='••••••••' />
                      <TextField label='Telephone' type='tel' placeholder='012-345-6789' />
                    </Box>

                    {/* ✅ With Icons */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>With Icons</TextStyle>
                      <TextField
                        label='Left Icon'
                        iconLeft={<Icon icon='search' />}
                        placeholder='Search here'
                      />
                      <TextField
                        label='Right Icon'
                        iconRight={<Icon icon='calendar' />}
                        placeholder='Pick a date'
                      />
                      <TextField
                        label='Both Icons'
                        iconLeft={<Icon icon='plus' />}
                        iconRight={<Icon icon='minus' />}
                        placeholder='Adjust amount'
                      />
                    </Box>

                    {/* ✅ Variants */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Variants</TextStyle>
                      <TextField label='Amount' variant='amount' placeholder='0.00' type='number' />
                      <TextField
                        label='Search Field'
                        variant='search'
                        placeholder='Search something...'
                        iconLeft={<Icon icon='search' />}
                      />
                      <TextField
                        label='Amount Transaction'
                        variant='amount-transaction'
                        placeholder='Enter amount'
                      />
                    </Box>

                    {/* ✅ Styling: width, $marginBottom, $zIndex */}
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Styled TextField</TextStyle>
                      <TextField label='Custom Width' placeholder='400px wide' width={400} />
                      <TextField
                        label='With $zIndex'
                        placeholder='This field has $zIndex'
                        $zIndex={100}
                      />
                      <TextField
                        label='Margin Bottom'
                        placeholder='Has spacing below'
                        $marginBottom={32}
                      />
                    </Box>

                    <Box direction='column' gap={8}>
                      <TextStyle variant='h4'>Error States</TextStyle>

                      {/* 🔴 Basic error state */}
                      <TextField
                        label='Error Only'
                        labelHelping='Error Only'
                        placeholder='Invalid input'
                        error
                      />

                      {/* 🔴 Error with message */}
                      <TextField
                        label='Error with Message'
                        placeholder='Try again'
                        error
                        helpingText='Username must be at least 6 characters'
                      />

                      {/* 🔴 Error + Helper text */}
                      <TextField
                        label='Error with Both Messages'
                        placeholder='Enter email'
                        type='email'
                        error
                        helpingText='Use your company email'
                        errorMessage='Invalid email format'
                      />

                      {/* 🔴 Disabled with error (for edge case testing) */}
                      <TextField
                        label='Disabled + Error'
                        placeholder="Can't type"
                        disabled
                        error
                        helpingText='Field cannot be edited'
                        errorMessage='Still showing error'
                      />
                    </Box>
                  </Box>
                </>

                <>
                  <Box
                    $bgColor='--color-bg-primary'
                    border='all' // all | top | bottom
                    $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                    $borderWidth={1} // 0 | 1 | 2
                    $boxShadow='top' // none | top | bottom
                    direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                    $isHover={true}
                    gap={10}
                    px={24}
                    py={24}
                  >
                    <>
                      {/* Normal Text Fields */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Normal Text Fields</TextStyle>
                        <TextField label='Default TextField' placeholder='Enter text here' />
                        <TextField
                          label='With Helper Text'
                          placeholder='Enter text'
                          helpingText='This is a helping text'
                        />
                        <TextField
                          label='With Error'
                          placeholder='Enter text'
                          error={true}
                          errorMessage='This is an error message'
                        />
                        <TextField
                          label='Disabled TextField'
                          placeholder='Cannot edit this'
                          disabled={true}
                        />
                      </Box>
                      {/* Normal Text Fields */}

                      {/* Special Types */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Special Types</TextStyle>
                        <TextField label='Email Field' type='email' placeholder='Enter email' />
                        <TextField label='Password Field' type='password' placeholder='Enter password' />
                        <TextField label='Number Field' type='number' placeholder='Enter number' />
                        <TextField label='Tel Field' type='tel' placeholder='Enter phone number' />
                      </Box>
                      {/* Special Types */}

                      {/* With Icons */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>With Icons</TextStyle>
                        <TextField
                          label='Left Icon'
                          placeholder='Search...'
                          iconLeft={<Icon icon='search' />}
                        />
                        <TextField
                          label='Right Icon'
                          placeholder='Select date'
                          iconRight={<Icon icon='calendar' />}
                        />
                        <TextField
                          label='Both Icons'
                          placeholder='Enter amount'
                          iconLeft={<Icon icon='plus' />}
                          iconRight={<Icon icon='minus' />}
                        />
                      </Box>
                      {/* With Icons */}

                      {/* Variants */}
                      <Box direction='column' gap={8}>
                        <TextStyle variant='h4'>Variants</TextStyle>
                        <TextField label='Amount' variant='amount' placeholder='0.00' />
                        <TextField
                          label='Search'
                          variant='search'
                          placeholder='Search...'
                          iconLeft={<Icon icon='search' />}
                        />
                        <TextField
                          label='Amount Transaction'
                          variant='amount-transaction'
                          placeholder='Enter amount'
                        />
                      </Box>
                      {/* Variants */}
                    </>
                  </Box>
                </>
              </Box>
            </>
            {/* Common TextField */}

            {/* Common Button */}
            <TextStyle variant='h2'>Button</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {(
                    [
                      'primary',
                      'negative',
                      'secondary',
                      'secondary-negative',
                      'ghost-main',
                      'ghost-primary',
                      'ghost-secondary',
                      'ghost-negative',
                      'ghost-main-no-padding',
                      'ghost-primary-no-padding',
                      'ghost-secondary-no-padding',
                      'ghost-negative-no-padding',
                      'ghost-icon-main',
                      'ghost-icon-primary',
                      'ghost-icon-secondary',
                      'ghost-icon-negative',
                      'ghost-icon-main-no-padding',
                      'ghost-icon-primary-no-padding',
                      'ghost-icon-secondary-no-padding',
                      'ghost-icon-negative-no-padding'
                    ] as const
                  ).map((variant) => (
                    <Box key={variant} direction='none' gap={16}>
                      <TextStyle variant='h4'>Variant: {variant}</TextStyle>
                      {!variant.includes('icon') && (
                        <>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                          >
                            Default
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            size={'large'}
                          >
                            Default Large
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            disabled
                          >
                            Disabled
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            disabled
                            size={'large'}
                          >
                            Disabled Large
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            width='full'
                            $borderRadius='none'
                          >
                            Full Width Border radius none
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            width='full'
                          >
                            Full Width Border radius normal
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            width='full'
                            $borderRadius='round'
                          >
                            Full Width Border radius round
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft='plus'
                          >
                            Left Icon
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconRight='calendar'
                          >
                            Right Icon
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft='arrow_left'
                            iconRight='arrow_right'
                          >
                            Both Icons
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft='arrow_left'
                            iconRight='arrow_right'
                            disabled
                          >
                            Both Icons
                          </Button>
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft='arrow_left'
                            iconRight='arrow_right'
                            size={'large'}
                          >
                            Both Icons Large
                          </Button>
                        </>
                      )}
                      <>
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='printer'
                          $borderRadius='round'
                        />
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='edit'
                        />
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='share'
                          size='large'
                        />
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='user_circle'
                          $borderRadius='round'
                          disabled
                        />
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='trash'
                          disabled
                        />
                        <Button
                          onClick={() => {
                            // console.log("onClick" + variant);
                          }}
                          variant={variant}
                          iconLeft='history'
                          size='large'
                          disabled
                        />
                      </>
                    </Box>
                  ))}
                </>
              </Box>
            </>
            {/* Common Button */}

            {/* Common TextStyle */}
            <TextStyle variant='h2'>TextStyle</TextStyle>
            <>
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {/* Headings */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Heading Styles</TextStyle>
                    <Box direction='column' gap={8}>
                      <TextStyle variant='h2'>Heading 2</TextStyle>
                      <TextStyle variant='h4'>Heading 4</TextStyle>
                      <TextStyle variant='h6'>Heading 6</TextStyle>
                      <TextStyle variant='pageTitle'>Page Title</TextStyle>
                    </Box>
                  </Box>
                  {/* Paragraphs */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Paragraph Styles</TextStyle>
                    <Box direction='column' gap={8}>
                      <TextStyle variant='paragraphMedium'>
                        Medium paragraph text for regular content
                      </TextStyle>
                      <TextStyle variant='paragraphSmall'>
                        Small paragraph text for secondary content
                      </TextStyle>
                      <TextStyle variant='paragraphXSmall'>
                        Extra small paragraph text for captions
                      </TextStyle>
                    </Box>
                  </Box>
                  {/* Labels */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Label Styles</TextStyle>
                    <Box direction='column' gap={8}>
                      <TextStyle variant='labelMedium'>Medium Label</TextStyle>
                      <TextStyle variant='labelSmall'>Small Label</TextStyle>
                      <TextStyle variant='labelSmallBold'>Small Bold Label</TextStyle>
                      <TextStyle variant='labelXSmall'>Extra Small Label</TextStyle>
                      <TextStyle variant='labelXSmallBold'>Extra Small Bold Label</TextStyle>
                    </Box>
                  </Box>
                  {/* Interactive Elements */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Interactive Styles</TextStyle>
                    <Box direction='column' gap={8}>
                      <TextStyle variant='buttonBig'>Large Button Text</TextStyle>
                      <TextStyle variant='buttonMedium'>Medium Button Text</TextStyle>
                    </Box>
                  </Box>
                  {/* Text Colors */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Text Colors</TextStyle>
                    <Box direction='column' gap={8}>
                      <TextStyle color='--text-primary-dark'>Primary Dark Text</TextStyle>
                      <TextStyle color='--color-primary'>Primary Brand Color</TextStyle>
                      <TextStyle color='--color-secondary'>Secondary Text</TextStyle>
                      <TextStyle color='--color-success'>Success Message</TextStyle>
                      <TextStyle color='--color-danger'>Error Message</TextStyle>
                      <TextStyle color='--color-warning'>Warning Message</TextStyle>
                    </Box>
                  </Box>
                  {/* Text Formatting */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Text Formatting</TextStyle>
                    <Box direction='column' gap={8}>
                      {/* Line Limiting */}
                      <TextStyle $limitLine={2}>
                        This is a very long text that will be limited to 2 lines. It demonstrates text
                        truncation with ellipsis when content overflows the specified number of lines.
                      </TextStyle>
                      {/* Word Breaking */}
                      <TextStyle $wordBreak='break-all'>
                        This is a very long word that will break at any point
                      </TextStyle>
                      {/* Text Alignment */}
                      <Box direction='column' gap={4}>
                        <TextStyle $textAlign='left'>Left aligned text</TextStyle>
                        <TextStyle $textAlign='center'>Center aligned text</TextStyle>
                        <TextStyle $textAlign='right'>Right aligned text</TextStyle>
                      </Box>
                      {/* Regular text */}
                      <TextStyle variant='paragraphMedium'>Normal text</TextStyle>
                      {/* Underlined text */}
                      <TextStyle variant='paragraphMedium' textDecoration='underline'>
                        Underlined text
                      </TextStyle>
                      {/* Overline text */}
                      <TextStyle variant='paragraphMedium' textDecoration='overline'>
                        Overline text
                      </TextStyle>
                    </Box>
                    {/* Line through text */}
                    <TextStyle variant='paragraphMedium' textDecoration='line-through'>
                      {/* Struck through text */}
                    </TextStyle>
                  </Box>
                  {/* Nested Text */}
                  <Box direction='column' gap={16}>
                    <TextStyle variant='h2'>Nested Text Example</TextStyle>
                    <TextStyle variant='h2'>
                      Main Heading with <TextStyle color='--color-accent)'>inline accent text</TextStyle>{' '}
                      and continuation
                    </TextStyle>
                  </Box>
                </>
              </Box>
              {/* White Space Handling */}
              <Box
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  <TextStyle variant='h2'>Text Formatting</TextStyle>
                  <TextStyle $whiteSpace='nowrap'>
                    This text won't wrap to a new line even if it's very long
                  </TextStyle>
                </>
              </Box>
            </>
            {/* Common TextStyle */}

            {/* Common IconComponent */}
            <TextStyle variant='h2'>IconComponent</TextStyle>
            <>
              <Box
                color='#f00'
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='right' // left | center | right
                direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {[
                    ...[
                      'alert_circle_bold',
                      'alert_circle',
                      'arrow_down_bold',
                      'arrow_down',
                      'arrow_left',
                      'arrow_right',
                      'arrow_up_bold',
                      'arrow_up',
                      'calendar',
                      'cancel_circle_fill',
                      'check_circle',
                      'check',
                      'close',
                      'download',
                      'edit',
                      'help_circle_fill',
                      'history',
                      'home',
                      'info_circle',
                      // "logout",
                      'minus',
                      'plus',
                      'printer',
                      'refresh',
                      'save',
                      'search',
                      'share',
                      'sort_ascending',
                      'sort_descending',
                      'sorting',
                      'trash',
                      'user_circle',
                      'view_document',
                      'img_empty_svg',
                      'img_nodata_svg',
                      'img_profile_circle'
                      // "img_ttb_logo",
                    ]
                  ].map((iconName) => (
                    <Box key={iconName} direction='column' gap={4} $alignItems='center'>
                      <Icon icon={iconName} color='--color-error' width={50} height={50} />
                      <span style={{ fontSize: '12px' }}>{iconName}</span>
                    </Box>
                  ))}
                </>
              </Box>
            </>
            {/* Common IconComponent */}

            {/* Common PillComponent */}
            <TextStyle variant='h2'>PillComponent</TextStyle>
            <>
              <Box
                color='#f00'
                $bgColor='--color-neutral-light'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='right' // left | center | right
                direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  {[
                    'default',
                    'purple',
                    'danger',
                    'warning',
                    'light-orange',
                    'disabled',
                    'information',
                    'success',
                    'primary'
                  ].map((variant) => (
                    <Box key={variant} direction='column' gap={4} $alignItems='center'>
                      <PillStatus variant={variant}>{variant}</PillStatus>
                    </Box>
                  ))}
                </>
              </Box>
            </>
            {/* Common PillComponent */}

            {/* Common TooltipComponent */}
            <TextStyle variant='h2'>TooltipComponent</TextStyle>
            <>
              <Box
                color='#f00'
                $bgColor='--color-neutral-light'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='right' // left | center | right
                direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={10}
                px={24}
                py={24}
              >
                <>
                  <Box position='relative' direction='column' gap={16}>
                    <Box position='relative'>
                      <Tooltip content={tooltipContent}>
                        <TextStyle $limitLine={1}>
                          This is a very long text that will be limited to 2 lines. It demonstrates text
                          truncation with ellipsis when content overflows the specified number of lines.
                        </TextStyle>
                      </Tooltip>
                    </Box>
                    <Box position='relative'>
                      <Tooltip content={tooltipContent} isShow={true}>
                        <TextStyle $limitLine={1}>
                          This is a very long text that will be limited to 2 lines. It demonstrates text
                          truncation with ellipsis when content overflows the specified number of lines.
                        </TextStyle>
                      </Tooltip>
                    </Box>
                  </Box>
                </>
              </Box>
            </>
            {/* Common TooltipComponent */}

            {/* Common  Box */}
            <TextStyle variant='h2'>Box</TextStyle>
            <>
              <Box
                color='#f00'
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='left' // left | center | right
                $alignItems='center' // start | center | end | baseline
                $justifyContent='center' // start | center | end | space-between | space-around
                direction='none' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={0}
                px={0}
                py={0}
              >
                <>
                  <TextStyle variant='paragraphMedium'>box1</TextStyle>
                  <TextStyle variant='paragraphMedium'>box2</TextStyle>
                </>
              </Box>
              <Box
                color='#f00'
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='center' // left | center | right
                $alignItems='center' // start | center | end | baseline
                $justifyContent='center' // start | center | end | space-between | space-around
                direction='row-wrap' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={50}
                px={10}
                py={10}
              >
                <>
                  <TextStyle variant='paragraphMedium'>box1</TextStyle>
                  <TextStyle variant='paragraphMedium'>box2</TextStyle>
                </>
              </Box>
              <Box
                color='#f00'
                $bgColor='--color-bg-primary'
                border='all' // all | top | bottom
                $borderRadius='xl' // none | xs | sm | md | lg | xl | circle
                $borderWidth={1} // 0 | 1 | 2
                $boxShadow='top' // none | top | bottom
                $textAlign='right' // left | center | right
                $alignItems='center' // start | center | end | baseline
                $justifyContent='center' // start | center | end | space-between | space-around
                direction='column' // none | row | row-reverse | row-wrap | column | column-reverse
                $isHover={true}
                gap={50}
                px={10}
                py={50}
              >
                <>
                  <TextStyle variant='paragraphMedium'>box1</TextStyle>
                  <TextStyle variant='paragraphMedium'>box2</TextStyle>
                </>
              </Box>
            </>
          </Box>
          {/* Common  Box */}
        </Box>
      </>
      {/* Note */}
    </>
  );

  return (
    <>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex gap-4 items-center'>
          <h1 className='text-3xl font-bold underline'>Test Zustand with Next.js</h1>

          <button
            className='bg-gray-500 text-white px-4 py-2 rounded'
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <div className='flex flex-row gap-2 items-center'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={addBear}>
                Add Bear
              </button>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={eatBear}>
                Eat Bear
              </button>
            </div>
            <span>Bears: {bears}</span>
          </div>

          <div className='flex gap-2 items-center'>
            <div className='flex flex-row gap-2 items-center'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={addFish}>
                Add Fish
              </button>
              <button className='bg-green-500 text-white px-4 py-2 rounded' onClick={eatFish}>
                Eat Fish
              </button>
            </div>
            <span>Fishes: {fishes}</span>
          </div>

          <div className='flex gap-2 items-center'>
            <button className='bg-purple-500 text-white px-4 py-2 rounded' onClick={addBearAndFish}>
              Add Both
            </button>
            <span>Total: {total}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <button
              className='bg-red-500 text-white px-4 py-2 rounded'
              onClick={() => {
                globalSlice.setState({ bears: 0, fishes: 0 });
                globalSlice.getState().calculateBearAndFish();
              }}
            >
              Reset
            </button>
            <span>Reset both bears and fishes</span>
          </div>
        </div>
      </div>
    </>
  );
}
