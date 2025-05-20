"use client";

import {Box} from "@/shared-components/Box";
import {Button} from "@/shared-components/Button";
import Icon from "@/shared-components/Icon/Icon";
import {Table} from "@/shared-components/Table";
import {TextField} from "@/shared-components/TextField";
import {TextStyle} from "@/shared-components/TextStyle";
import useDashboard from "@/hooks/useDashboard";
import globalSlice from "@/stores/globalSlice";
import {useState} from "react";
import {useTranslation} from "react-i18next";

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
    calculateBearAndFish, // SharedState
  } = globalStore;

  const {t} = useTranslation();
  const {optionPagination, pagination, setPagination, headers, values} =
    useDashboard();

  return (
    <>
      <Box bgColor="--color-bg-primary" fullHeight fullWidth overflowY="auto">
        <>
          <Box direction="column" p={32}>
            <>
              <Box direction="column">
                <>
                  <Box direction="column" gap={24}>
                    <Box direction="column" gap={48}>
                      <Box direction="column" gap={0}>
                        <TextStyle variant="h2" color="--color-primary">
                          {t("dashboard_title")}
                        </TextStyle>
                        <TextStyle
                          variant="paragraphMedium"
                          color="--color-neutral-grey-light"
                        >
                          {t("dashboard_sub_title")}
                        </TextStyle>
                      </Box>
                      <Box
                        direction="row"
                        justifyContent="space-between"
                        gap={24}
                      >
                        <TextStyle variant="h4" color="--color-primary">
                          {t("dashboard_title_table")}
                        </TextStyle>
                        <Box direction="row" alignItems="center" gap={8}>
                          <Button variant="ghost-primary" iconLeft="refresh">
                            {t("dashboard_btn_refresh")}
                          </Button>
                          <Button variant="primary" iconLeft="plus">
                            {t("dashboard_btn_create_contract")}
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    {/* Filter */}
                    <Box direction="row" justifyContent="space-between">
                      <Box direction="column" justifyContent="center" gap={8}>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelXSmall"
                            color="--color-secondary"
                          >
                            {t("dashboard_filter_by_user")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                      </Box>
                      <Box direction="row" alignItems="center" gap={8}>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelSmallBold"
                            color="--color-primary"
                          >
                            {t("dashboard_filter_by_type_doc")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelSmallBold"
                            color="--color-primary"
                          >
                            {t("dashboard_filter_by_status")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    {/* Filter */}

                    {/* Table */}
                    <Table
                      headers={headers}
                      values={values}
                      optionPagination={optionPagination}
                      page={pagination.page}
                      limit={pagination.limit}
                      count={pagination.count}
                      onPageChange={(newPage) =>
                        setPagination((prev) => ({...prev, page: newPage}))
                      }
                      onLimitChange={(newLimit) =>
                        setPagination((prev) => ({
                          ...prev,
                          limit: newLimit,
                          page: 1,
                        }))
                      }
                    />
                    {/* Table */}
                  </Box>
                </>
              </Box>
            </>
            <>
              <Box direction="column">
                <>
                  <Box direction="column" gap={24}>
                    <Box direction="column" gap={48}>
                      <Box direction="column" gap={0}>
                        <TextStyle variant="h2" color="--color-primary">
                          {t("dashboard_title")}
                        </TextStyle>
                        <TextStyle
                          variant="paragraphMedium"
                          color="--color-neutral-grey-light"
                        >
                          {t("dashboard_sub_title")}
                        </TextStyle>
                      </Box>
                      <Box
                        direction="row"
                        justifyContent="space-between"
                        gap={24}
                      >
                        <TextStyle variant="h4" color="--color-primary">
                          {t("dashboard_title_table")}
                        </TextStyle>
                        <Box direction="row" alignItems="center" gap={8}>
                          <Button variant="ghost-primary" iconLeft="refresh">
                            {t("dashboard_btn_refresh")}
                          </Button>
                          <Button variant="primary" iconLeft="plus">
                            {t("dashboard_btn_create_contract")}
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    {/* Filter */}
                    <Box direction="row" justifyContent="space-between">
                      <Box direction="column" justifyContent="center" gap={8}>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelXSmall"
                            color="--color-secondary"
                          >
                            {t("dashboard_filter_by_user")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                      </Box>
                      <Box direction="row" alignItems="center" gap={8}>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelSmallBold"
                            color="--color-primary"
                          >
                            {t("dashboard_filter_by_type_doc")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                        <Box direction="row" alignItems="center" gap={8}>
                          <TextStyle
                            variant="labelSmallBold"
                            color="--color-primary"
                          >
                            {t("dashboard_filter_by_status")}
                          </TextStyle>
                          <Button
                            onClick={() => {
                              console.log("onClick");
                            }}
                            variant={"ghost-icon-secondary-no-padding"}
                            borderRadius="round"
                          >
                            <Icon
                              icon="arrow_down"
                              color="--color-primary"
                              width={16}
                              height={16}
                            />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                    {/* Filter */}

                    {/* Table */}
                    <Table
                      headers={headers}
                      values={values}
                      optionPagination={optionPagination}
                      page={pagination.page}
                      limit={pagination.limit}
                      count={pagination.count}
                      onPageChange={(newPage) =>
                        setPagination((prev) => ({...prev, page: newPage}))
                      }
                      onLimitChange={(newLimit) =>
                        setPagination((prev) => ({
                          ...prev,
                          limit: newLimit,
                          page: 1,
                        }))
                      }
                    />
                    {/* Table */}
                  </Box>
                </>
              </Box>
            </>
          </Box>
        </>

        {/* Note */}
        <>
          <Box direction="column" p={32}>
            {/* Common  Box */}
            <Box direction="column" gap={50} mt={500}>
              {/* Common Table  */}
              <TextStyle variant="h2">Table</TextStyle>
              <Box>Table</Box>
              <>
                <Table
                  headers={headers}
                  values={values}
                  optionPagination={optionPagination}
                  page={pagination.page}
                  limit={pagination.limit}
                  count={pagination.count}
                  onPageChange={(newPage) =>
                    setPagination((prev) => ({...prev, page: newPage}))
                  }
                  onLimitChange={(newLimit) =>
                    setPagination((prev) => ({
                      ...prev,
                      limit: newLimit,
                      page: 1,
                    }))
                  }
                />
                <Table
                  mode="light"
                  size="md"
                  maxHeightTable={"200px"}
                  headers={headers}
                  values={values}
                  optionPagination={optionPagination}
                  page={pagination.page}
                  limit={pagination.limit}
                  count={pagination.count}
                  onPageChange={(newPage) =>
                    setPagination((prev) => ({...prev, page: newPage}))
                  }
                  onLimitChange={(newLimit) =>
                    setPagination((prev) => ({
                      ...prev,
                      limit: newLimit,
                      page: 1,
                    }))
                  }
                  isPaginationDisabled
                />
              </>
              {/* Common Table  */}

              {/* Common TextField  */}
              <TextStyle variant="h2">TextField</TextStyle>
              <>
                <Box direction="column" gap={40}>
                  {/* ✅ Normal */}
                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">Normal TextFields</TextStyle>
                    <TextField label="Basic" placeholder="Type here..." />
                    <TextField
                      labelHelping="With Helper"
                      label="With Helper"
                      placeholder="Enter something"
                      helpingText="Supporting text here"
                    />
                    <TextField
                      label="With Error"
                      placeholder="Oops..."
                      error
                      helpingText="Still showing helper"
                      errorMessage="Something went wrong"
                    />
                    <TextField
                      label="Disabled"
                      placeholder="Not editable"
                      disabled
                    />
                  </Box>

                  {/* ✅ Input Types */}
                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">Input Types</TextStyle>
                    <TextField
                      label="Text"
                      type="text"
                      placeholder="Enter text"
                    />
                    <TextField
                      label="Number"
                      type="number"
                      placeholder="Enter number"
                    />
                    <TextField
                      label="Email"
                      type="email"
                      placeholder="your@email.com"
                    />
                    <TextField
                      label="Password"
                      type="password"
                      placeholder="••••••••"
                    />
                    <TextField
                      label="Telephone"
                      type="tel"
                      placeholder="012-345-6789"
                    />
                  </Box>

                  {/* ✅ With Icons */}
                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">With Icons</TextStyle>
                    <TextField
                      label="Left Icon"
                      iconLeft={<Icon icon="search" />}
                      placeholder="Search here"
                    />
                    <TextField
                      label="Right Icon"
                      iconRight={<Icon icon="calendar" />}
                      placeholder="Pick a date"
                    />
                    <TextField
                      label="Both Icons"
                      iconLeft={<Icon icon="plus" />}
                      iconRight={<Icon icon="minus" />}
                      placeholder="Adjust amount"
                    />
                  </Box>

                  {/* ✅ Variants */}
                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">Variants</TextStyle>
                    <TextField
                      label="Amount"
                      variant="amount"
                      placeholder="0.00"
                      type="number"
                    />
                    <TextField
                      label="Search Field"
                      variant="search"
                      placeholder="Search something..."
                      iconLeft={<Icon icon="search" />}
                    />
                    <TextField
                      label="Amount Transaction"
                      variant="amount-transaction"
                      placeholder="Enter amount"
                    />
                  </Box>

                  {/* ✅ Styling: width, marginBottom, zIndex */}
                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">Styled TextField</TextStyle>
                    <TextField
                      label="Custom Width"
                      placeholder="400px wide"
                      width={400}
                    />
                    <TextField
                      label="With zIndex"
                      placeholder="This field has zIndex"
                      zIndex={100}
                    />
                    <TextField
                      label="Margin Bottom"
                      placeholder="Has spacing below"
                      marginBottom={32}
                    />
                  </Box>

                  <Box direction="column" gap={8}>
                    <TextStyle variant="h4">Error States</TextStyle>

                    {/* 🔴 Basic error state */}
                    <TextField
                      label="Error Only"
                      labelHelping="Error Only"
                      placeholder="Invalid input"
                      error
                    />

                    {/* 🔴 Error with message */}
                    <TextField
                      label="Error with Message"
                      placeholder="Try again"
                      error
                      helpingText="Username must be at least 6 characters"
                    />

                    {/* 🔴 Error + Helper text */}
                    <TextField
                      label="Error with Both Messages"
                      placeholder="Enter email"
                      type="email"
                      error
                      helpingText="Use your company email"
                      errorMessage="Invalid email format"
                    />

                    {/* 🔴 Disabled with error (for edge case testing) */}
                    <TextField
                      label="Disabled + Error"
                      placeholder="Can't type"
                      disabled
                      error
                      helpingText="Field cannot be edited"
                      errorMessage="Still showing error"
                    />
                  </Box>
                </Box>
              </>

              <>
                <Box
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={10}
                  px={24}
                  py={24}
                >
                  <>
                    {/* Normal Text Fields */}
                    <Box direction="column" gap={8}>
                      <TextStyle variant="h4">Normal Text Fields</TextStyle>
                      <TextField
                        label="Default TextField"
                        placeholder="Enter text here"
                      />
                      <TextField
                        label="With Helper Text"
                        placeholder="Enter text"
                        helpingText="This is a helping text"
                      />
                      <TextField
                        label="With Error"
                        placeholder="Enter text"
                        error={true}
                        errorMessage="This is an error message"
                      />
                      <TextField
                        label="Disabled TextField"
                        placeholder="Cannot edit this"
                        disabled={true}
                      />
                    </Box>
                    {/* Normal Text Fields */}

                    {/* Special Types */}
                    <Box direction="column" gap={8}>
                      <TextStyle variant="h4">Special Types</TextStyle>
                      <TextField
                        label="Email Field"
                        type="email"
                        placeholder="Enter email"
                      />
                      <TextField
                        label="Password Field"
                        type="password"
                        placeholder="Enter password"
                      />
                      <TextField
                        label="Number Field"
                        type="number"
                        placeholder="Enter number"
                      />
                      <TextField
                        label="Tel Field"
                        type="tel"
                        placeholder="Enter phone number"
                      />
                    </Box>
                    {/* Special Types */}

                    {/* With Icons */}
                    <Box direction="column" gap={8}>
                      <TextStyle variant="h4">With Icons</TextStyle>
                      <TextField
                        label="Left Icon"
                        placeholder="Search..."
                        iconLeft={<Icon icon="search" />}
                      />
                      <TextField
                        label="Right Icon"
                        placeholder="Select date"
                        iconRight={<Icon icon="calendar" />}
                      />
                      <TextField
                        label="Both Icons"
                        placeholder="Enter amount"
                        iconLeft={<Icon icon="plus" />}
                        iconRight={<Icon icon="minus" />}
                      />
                    </Box>
                    {/* With Icons */}

                    {/* Variants */}
                    <Box direction="column" gap={8}>
                      <TextStyle variant="h4">Variants</TextStyle>
                      <TextField
                        label="Amount"
                        variant="amount"
                        placeholder="0.00"
                      />
                      <TextField
                        label="Search"
                        variant="search"
                        placeholder="Search..."
                        iconLeft={<Icon icon="search" />}
                      />
                      <TextField
                        label="Amount Transaction"
                        variant="amount-transaction"
                        placeholder="Enter amount"
                      />
                    </Box>
                    {/* Variants */}
                  </>
                </Box>
              </>
              {/* Common TextField  */}

              {/* Common Button  */}
              <TextStyle variant="h2">Button</TextStyle>
              <>
                <Box
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={10}
                  px={24}
                  py={24}
                >
                  <>
                    {(
                      [
                        "primary",
                        "negative",
                        "secondary",
                        "secondary-negative",
                        "ghost-primary",
                        "ghost-secondary",
                        "ghost-negative",
                        "ghost-primary-no-padding",
                        "ghost-secondary-no-padding",
                        "ghost-negative-no-padding",
                        "ghost-icon-primary",
                        "ghost-icon-secondary",
                        "ghost-icon-negative",
                        "ghost-icon-primary-no-padding",
                        "ghost-icon-secondary-no-padding",
                        "ghost-icon-negative-no-padding",
                      ] as const
                    ).map((variant) => (
                      <Box key={variant} direction="none" gap={16}>
                        <TextStyle variant="h4">Variant: {variant}</TextStyle>
                        {!variant.includes("icon") && (
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
                              size={"large"}
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
                              size={"large"}
                            >
                              Disabled Large
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              width="full"
                              borderRadius="none"
                            >
                              Full Width Border radius none
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              width="full"
                            >
                              Full Width Border radius normal
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              width="full"
                              borderRadius="round"
                            >
                              Full Width Border radius round
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              iconLeft="plus"
                            >
                              Left Icon
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              iconRight="calendar"
                            >
                              Right Icon
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              iconLeft="arrow_left"
                              iconRight="arrow_right"
                            >
                              Both Icons
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              iconLeft="arrow_left"
                              iconRight="arrow_right"
                              disabled
                            >
                              Both Icons
                            </Button>
                            <Button
                              onClick={() => {
                                // console.log("onClick" + variant);
                              }}
                              variant={variant}
                              iconLeft="arrow_left"
                              iconRight="arrow_right"
                              size={"large"}
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
                            iconLeft="printer"
                            borderRadius="round"
                          />
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft="edit"
                          />
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft="share"
                            size="large"
                          />
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft="user_circle"
                            borderRadius="round"
                            disabled
                          />
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft="trash"
                            disabled
                          />
                          <Button
                            onClick={() => {
                              // console.log("onClick" + variant);
                            }}
                            variant={variant}
                            iconLeft="history"
                            size="large"
                            disabled
                          />
                        </>
                      </Box>
                    ))}
                  </>
                </Box>
              </>
              {/* Common Button  */}

              {/* Common TextStyle */}
              <TextStyle variant="h2">TextStyle</TextStyle>
              <>
                <Box
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={10}
                  px={24}
                  py={24}
                >
                  <>
                    {/* Headings */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Heading Styles</TextStyle>
                      <Box direction="column" gap={8}>
                        <TextStyle variant="h2">Heading 2</TextStyle>
                        <TextStyle variant="h4">Heading 4</TextStyle>
                        <TextStyle variant="h6">Heading 6</TextStyle>
                        <TextStyle variant="pageTitle">Page Title</TextStyle>
                      </Box>
                    </Box>
                    {/* Paragraphs */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Paragraph Styles</TextStyle>
                      <Box direction="column" gap={8}>
                        <TextStyle variant="paragraphMedium">
                          Medium paragraph text for regular content
                        </TextStyle>
                        <TextStyle variant="paragraphSmall">
                          Small paragraph text for secondary content
                        </TextStyle>
                        <TextStyle variant="paragraphXSmall">
                          Extra small paragraph text for captions
                        </TextStyle>
                      </Box>
                    </Box>
                    {/* Labels */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Label Styles</TextStyle>
                      <Box direction="column" gap={8}>
                        <TextStyle variant="labelMedium">
                          Medium Label
                        </TextStyle>
                        <TextStyle variant="labelSmall">Small Label</TextStyle>
                        <TextStyle variant="labelSmallBold">
                          Small Bold Label
                        </TextStyle>
                        <TextStyle variant="labelXSmall">
                          Extra Small Label
                        </TextStyle>
                        <TextStyle variant="labelXSmallBold">
                          Extra Small Bold Label
                        </TextStyle>
                      </Box>
                    </Box>
                    {/* Interactive Elements */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Interactive Styles</TextStyle>
                      <Box direction="column" gap={8}>
                        <TextStyle variant="buttonBig">
                          Large Button Text
                        </TextStyle>
                        <TextStyle variant="buttonMedium">
                          Medium Button Text
                        </TextStyle>
                      </Box>
                    </Box>
                    {/* Text Colors */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Text Colors</TextStyle>
                      <Box direction="column" gap={8}>
                        <TextStyle color="--text-primary-dark">
                          Primary Dark Text
                        </TextStyle>
                        <TextStyle color="--color-primary">
                          Primary Brand Color
                        </TextStyle>
                        <TextStyle color="--color-secondary">
                          Secondary Text
                        </TextStyle>
                        <TextStyle color="--color-success">
                          Success Message
                        </TextStyle>
                        <TextStyle color="--color-danger">
                          Error Message
                        </TextStyle>
                        <TextStyle color="--color-warning">
                          Warning Message
                        </TextStyle>
                      </Box>
                    </Box>
                    {/* Text Formatting */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Text Formatting</TextStyle>
                      <Box direction="column" gap={8}>
                        {/* Line Limiting */}
                        <TextStyle limitLine={2}>
                          This is a very long text that will be limited to 2
                          lines. It demonstrates text truncation with ellipsis
                          when content overflows the specified number of lines.
                        </TextStyle>
                        {/* Word Breaking */}
                        <TextStyle wordBreak="break-all">
                          This is a very long word that will break at any point
                        </TextStyle>
                        {/* Text Alignment */}
                        <Box direction="column" gap={4}>
                          <TextStyle textAlign="left">
                            Left aligned text
                          </TextStyle>
                          <TextStyle textAlign="center">
                            Center aligned text
                          </TextStyle>
                          <TextStyle textAlign="right">
                            Right aligned text
                          </TextStyle>
                        </Box>
                        {/* Regular text */}
                        <TextStyle variant="paragraphMedium">
                          Normal text
                        </TextStyle>
                        {/* Underlined text */}
                        <TextStyle
                          variant="paragraphMedium"
                          textDecoration="underline"
                        >
                          Underlined text
                        </TextStyle>
                        {/* Overline text */}
                        <TextStyle
                          variant="paragraphMedium"
                          textDecoration="overline"
                        >
                          Overline text
                        </TextStyle>
                      </Box>
                      {/* Line through text */}
                      <TextStyle
                        variant="paragraphMedium"
                        textDecoration="line-through"
                      >
                        {/* Struck through text */}
                      </TextStyle>
                    </Box>
                    {/* Nested Text */}
                    <Box direction="column" gap={16}>
                      <TextStyle variant="h2">Nested Text Example</TextStyle>
                      <TextStyle variant="h2">
                        Main Heading with{" "}
                        <TextStyle color="--color-accent)">
                          inline accent text
                        </TextStyle>{" "}
                        and continuation
                      </TextStyle>
                    </Box>
                  </>
                </Box>
                {/* White Space Handling */}
                <Box
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={10}
                  px={24}
                  py={24}
                >
                  <>
                    <TextStyle variant="h2">Text Formatting</TextStyle>
                    <TextStyle whiteSpace="nowrap">
                      This text won't wrap to a new line even if it's very long
                    </TextStyle>
                  </>
                </Box>
              </>
              {/* Common TextStyle */}

              {/* Common IconComponent */}
              <TextStyle variant="h2">IconComponent</TextStyle>
              <>
                <Box
                  color="#f00"
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  textAlign="right" // left | center | right
                  direction="row-wrap" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={10}
                  px={24}
                  py={24}
                >
                  <>
                    {[
                      ...[
                        "alert_circle_bold",
                        "alert_circle",
                        "arrow_down_bold",
                        "arrow_down",
                        "arrow_left",
                        "arrow_right",
                        "arrow_up_bold",
                        "arrow_up",
                        "calendar",
                        "cancel_circle_fill",
                        "check_circle",
                        "check",
                        "close",
                        "download",
                        "edit",
                        "help_circle_fill",
                        "history",
                        "home",
                        "info_circle",
                        // "logout",
                        "minus",
                        "plus",
                        "printer",
                        "refresh",
                        "save",
                        "search",
                        "share",
                        "sort_ascending",
                        "sort_descending",
                        "sorting",
                        "trash",
                        "user_circle",
                        "view_document",
                        "img_empty_svg",
                        "img_nodata_svg",
                        "img_profile_circle",
                        // "img_ttb_logo",
                      ],
                    ].map((iconName) => (
                      <Box
                        key={iconName}
                        direction="column"
                        gap={4}
                        alignItems="center"
                      >
                        <Icon
                          icon={iconName}
                          // color="#0f0"
                          color="--color-error"
                          width={50}
                          height={50}
                        />
                        <span style={{fontSize: "12px"}}>{iconName}</span>
                      </Box>
                    ))}
                  </>
                </Box>
              </>
              {/* Common IconComponent */}

              {/* Common  Box */}
              <TextStyle variant="h2">Box</TextStyle>
              <>
                <Box
                  color="#f00"
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  textAlign="left" // left | center | right
                  alignItems="center" // start | center | end | baseline
                  justifyContent="center" // start | center | end | space-between | space-around
                  direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={0}
                  px={0}
                  py={0}
                >
                  <>
                    <TextStyle variant="paragraphMedium">box1</TextStyle>
                    <TextStyle variant="paragraphMedium">box2</TextStyle>
                  </>
                </Box>
                <Box
                  color="#f00"
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  textAlign="center" // left | center | right
                  alignItems="center" // start | center | end | baseline
                  justifyContent="center" // start | center | end | space-between | space-around
                  direction="row-wrap" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={50}
                  px={10}
                  py={10}
                >
                  <>
                    <TextStyle variant="paragraphMedium">box1</TextStyle>
                    <TextStyle variant="paragraphMedium">box2</TextStyle>
                  </>
                </Box>
                <Box
                  color="#f00"
                  bgColor="--color-bg-test"
                  border="all" // all | top | bottom
                  borderRadius="xl" // none | xs | sm | md | lg | xl | circle
                  borderWidth={1} // 0 | 1 | 2
                  boxShadow="top" // none | top | bottom
                  textAlign="right" // left | center | right
                  alignItems="center" // start | center | end | baseline
                  justifyContent="center" // start | center | end | space-between | space-around
                  direction="column" // none | row | row-reverse | row-wrap | column | column-reverse
                  hover={true}
                  gap={50}
                  px={10}
                  py={50}
                >
                  <>
                    <TextStyle variant="paragraphMedium">box1</TextStyle>
                    <TextStyle variant="paragraphMedium">box2</TextStyle>
                  </>
                </Box>
              </>
            </Box>
            {/* Common  Box */}
          </Box>
        </>
        {/* Note */}
      </Box>
    </>
  );

  return (
    <>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold underline">
            Test Zustand with Next.js
          </h1>

          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={addBear}
              >
                Add Bear
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={eatBear}
              >
                Eat Bear
              </button>
            </div>
            <span>Bears: {bears}</span>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex flex-row gap-2 items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={addFish}
              >
                Add Fish
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={eatFish}
              >
                Eat Fish
              </button>
            </div>
            <span>Fishes: {fishes}</span>
          </div>

          <div className="flex gap-2 items-center">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded"
              onClick={addBearAndFish}
            >
              Add Both
            </button>
            <span>Total: {total}</span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                globalSlice.setState({bears: 0, fishes: 0});
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
