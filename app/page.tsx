"use client";

import {DSBox} from "@/components/Box";
import {DSIcon} from "@/components/Icon";
import {galleryList, IconComponent, iconList} from "@/components/Icon/IconList";
import {DSTextStyle} from "@/components/TextStyle";
import globalSlice from "@/stores/globalSlice";

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

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Common DSTextStyle */}
      <DSTextStyle variant="h2">DSTextStyle</DSTextStyle>
      <>
        <DSBox
          // color="#f00"
          bgColor="#a4caf0"
          border="all" // all | top | bottom
          borderRadius="xl" // none | xs | sm | md | lg | xl | circle
          borderWidth={1} // 0 | 1 | 2
          boxShadow="top" // none | top | bottom
          // textAlign="right" // left | center | right
          // alignItems="center" // start | center | end | baseline
          // justifyContent="center" // start | center | end | space-between | space-around
          direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
          hover={true}
          gap={10}
          px={24}
          py={24}
          fullWidth
        >
          <>
            {/* Headings */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Heading Styles</DSTextStyle>
              <DSBox direction="column" gap={8}>
                <DSTextStyle variant="h2">Special Heading 1</DSTextStyle>
                <DSTextStyle variant="specialH2">Special Heading 2</DSTextStyle>
                <DSTextStyle variant="pageTitle">Page Title</DSTextStyle>
                <DSTextStyle variant="h1">Heading 1</DSTextStyle>
                <DSTextStyle variant="h2">Heading 2</DSTextStyle>
                <DSTextStyle variant="h3">Heading 3</DSTextStyle>
                <DSTextStyle variant="h4">Heading 4</DSTextStyle>
              </DSBox>
            </DSBox>

            {/* Paragraphs */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Paragraph Styles</DSTextStyle>
              <DSBox direction="column" gap={8}>
                <DSTextStyle variant="paragraphBig">
                  Large paragraph text with longer content to demonstrate the
                  style
                </DSTextStyle>
                <DSTextStyle variant="paragraphMedium">
                  Medium paragraph text for regular content
                </DSTextStyle>
                <DSTextStyle variant="paragraphSmall">
                  Small paragraph text for secondary content
                </DSTextStyle>
                <DSTextStyle variant="paragraphXSmall">
                  Extra small paragraph text for captions
                </DSTextStyle>
              </DSBox>
            </DSBox>

            {/* Labels */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Label Styles</DSTextStyle>
              <DSBox direction="column" gap={8}>
                <DSTextStyle variant="labelMedium">Medium Label</DSTextStyle>
                <DSTextStyle variant="labelSmall">Small Label</DSTextStyle>
                <DSTextStyle variant="labelSmallBold">
                  Small Bold Label
                </DSTextStyle>
                <DSTextStyle variant="labelXSmall">
                  Extra Small Label
                </DSTextStyle>
                <DSTextStyle variant="labelXSmallBold">
                  Extra Small Bold Label
                </DSTextStyle>
              </DSBox>
            </DSBox>

            {/* Interactive Elements */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Interactive Styles</DSTextStyle>
              <DSBox direction="column" gap={8}>
                <DSTextStyle variant="buttonBig">Large Button Text</DSTextStyle>
                <DSTextStyle variant="buttonMedium">
                  Medium Button Text
                </DSTextStyle>
              </DSBox>
            </DSBox>

            {/* Text Colors */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Text Colors</DSTextStyle>
              <DSBox direction="column" gap={8}>
                <DSTextStyle color="text-primary-dark">
                  Primary Dark Text
                </DSTextStyle>
                <DSTextStyle color="color-primary">
                  Primary Brand Color
                </DSTextStyle>
                <DSTextStyle color="color-secondary">
                  Secondary Text
                </DSTextStyle>
                <DSTextStyle color="color-success">Success Message</DSTextStyle>
                <DSTextStyle color="color-danger">Error Message</DSTextStyle>
                <DSTextStyle color="color-warning">Warning Message</DSTextStyle>
              </DSBox>
            </DSBox>

            {/* Text Formatting */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Text Formatting</DSTextStyle>
              <DSBox direction="column" gap={8}>
                {/* Line Limiting */}
                <DSTextStyle limitLine={2} style={{width: "300px"}}>
                  This is a very long text that will be limited to 2 lines. It
                  demonstrates text truncation with ellipsis when content
                  overflows the specified number of lines.
                </DSTextStyle>

                {/* Word Breaking */}
                <DSTextStyle wordBreak="break-all" style={{width: "300px"}}>
                  This is a very long word that will break at any point
                </DSTextStyle>

                {/* Text Alignment */}
                <DSBox direction="column" gap={4}>
                  <DSTextStyle textAlign="left">Left aligned text</DSTextStyle>
                  <DSTextStyle textAlign="center">
                    Center aligned text
                  </DSTextStyle>
                  <DSTextStyle textAlign="right">
                    Right aligned text
                  </DSTextStyle>
                </DSBox>

                {/* Regular text */}
                <DSTextStyle variant="paragraphMedium">Normal text</DSTextStyle>

                {/* Underlined text */}
                <DSTextStyle
                  variant="paragraphMedium"
                  textDecoration="underline"
                >
                  Underlined text
                </DSTextStyle>

                {/* Overline text */}
                <DSTextStyle
                  variant="paragraphMedium"
                  textDecoration="overline"
                >
                  Overline text
                </DSTextStyle>
              </DSBox>

              {/* Line through text */}
              <DSTextStyle
                variant="paragraphMedium"
                textDecoration="line-through"
              >
                {/* Struck through text */}
              </DSTextStyle>
            </DSBox>

            {/* Nested Text */}
            <DSBox direction="column" gap={16}>
              <DSTextStyle variant="h2">Nested Text Example</DSTextStyle>
              <DSTextStyle variant="h2">
                Main Heading with{" "}
                <DSTextStyle color="color-accent">
                  inline accent text
                </DSTextStyle>{" "}
                and continuation
              </DSTextStyle>
            </DSBox>
          </>
        </DSBox>

        {/* White Space Handling */}
        <DSBox
          // color="#f00"
          bgColor="#a4caf0"
          border="all" // all | top | bottom
          borderRadius="xl" // none | xs | sm | md | lg | xl | circle
          borderWidth={1} // 0 | 1 | 2
          boxShadow="top" // none | top | bottom
          // textAlign="right" // left | center | right
          // alignItems="center" // start | center | end | baseline
          // justifyContent="center" // start | center | end | space-between | space-around
          direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
          hover={true}
          gap={10}
          px={24}
          py={24}
          fullWidth
        >
          <>
            <DSTextStyle variant="h2">Text Formatting</DSTextStyle>
            <DSTextStyle whiteSpace="nowrap" style={{width: "300px"}}>
              This text won't wrap to a new line even if it's very long
            </DSTextStyle>
          </>
        </DSBox>
      </>
      {/* Common DSTextStyle */}

      {/* Common IconComponent */}
      <DSTextStyle variant="h2">IconComponent</DSTextStyle>
      <>
        <DSBox
          color="#f00"
          bgColor="#a4caf0"
          border="all" // all | top | bottom
          borderRadius="xl" // none | xs | sm | md | lg | xl | circle
          borderWidth={1} // 0 | 1 | 2
          boxShadow="top" // none | top | bottom
          textAlign="right" // left | center | right
          // alignItems="center" // start | center | end | baseline
          // justifyContent="center" // start | center | end | space-between | space-around
          direction="row-wrap" // none | row | row-reverse | row-wrap | column | column-reverse
          hover={true}
          gap={10}
          px={24}
          py={24}
          fullWidth
        >
          <>
            {[...Object.keys(iconList)].map((iconName) => (
              <DSBox
                key={iconName}
                direction="column"
                gap={4}
                alignItems="center"
              >
                <IconComponent
                  icon={iconName}
                  color="#0f0"
                  size={50}
                  // width={50}
                  // height={50}
                />
                <span style={{fontSize: "12px"}}>{iconName}</span>
              </DSBox>
            ))}
          </>
        </DSBox>
      </>
      {/* Common IconComponent */}

      {/* Common  DSIcon */}
      <DSTextStyle variant="h2">DSIcon</DSTextStyle>
      <>
        <DSBox
          color="#f00"
          bgColor="#a4caf0"
          border="all" // all | top | bottom
          borderRadius="xl" // none | xs | sm | md | lg | xl | circle
          borderWidth={1} // 0 | 1 | 2
          boxShadow="top" // none | top | bottom
          textAlign="right" // left | center | right
          // alignItems="center" // start | center | end | baseline
          // justifyContent="center" // start | center | end | space-between | space-around
          direction="row-wrap" // none | row | row-reverse | row-wrap | column | column-reverse
          hover={true}
          gap={10}
          px={24}
          py={24}
          fullWidth
        >
          <>
            {[...Object.keys(galleryList)].map((iconName) => (
              <DSBox
                key={iconName}
                direction="column"
                gap={4}
                alignItems="center"
              >
                <DSIcon icon={iconName} color="#0f0" width={50} height={50} />
                <span style={{fontSize: "12px"}}>{iconName}</span>
              </DSBox>
            ))}
          </>
        </DSBox>
      </>
      {/* Common  DSIcon */}
    </div>
  );
  <DSBox
    color="#f00"
    bgColor="#a4caf0"
    border="all" // all | top | bottom
    borderRadius="xl" // none | xs | sm | md | lg | xl | circle
    borderWidth={1} // 0 | 1 | 2
    boxShadow="top" // none | top | bottom
    textAlign="right" // left | center | right
    // alignItems="start" // start | center | end | baseline
    // justifyContent="space-between" // start | center | end | space-between | space-around
    direction="row-wrap" // none | row | row-reverse | row-wrap | column | column-reverse
    hover={true}
    gap={10}
    px={24}
    py={24}
    fullWidth
  >
    {/* SVG */}
    <DSIcon icon="alert_circle_bold" color="#0f0" width={50} height={50} />
    <DSIcon icon="alert_circle" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_down_bold" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_down" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_left" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_right" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_up_bold" color="#0f0" width={50} height={50} />
    <DSIcon icon="arrow_up" color="#0f0" width={50} height={50} />
    <DSIcon icon="calendar" color="#0f0" width={50} height={50} />
    <DSIcon icon="cancel_circle_fill" color="#0f0" width={50} height={50} />
    <DSIcon icon="check_circle" color="#0f0" width={50} height={50} />
    <DSIcon icon="check" color="#0f0" width={50} height={50} />
    <DSIcon icon="close" color="#0f0" width={50} height={50} />
    <DSIcon icon="download" color="#0f0" width={50} height={50} />
    <DSIcon icon="edit" color="#0f0" width={50} height={50} />
    <DSIcon icon="help_circle_fill" color="#0f0" width={50} height={50} />
    <DSIcon icon="history" color="#0f0" width={50} height={50} />
    <DSIcon icon="home" color="#0f0" width={50} height={50} />
    <DSIcon icon="info_circle" color="#0f0" width={50} height={50} />
    <DSIcon icon="logout" color="#0f0" width={50} height={50} />
    <DSIcon icon="minus" color="#0f0" width={50} height={50} />
    <DSIcon icon="plus" color="#0f0" width={50} height={50} />
    <DSIcon icon="printer" color="#0f0" width={50} height={50} />
    <DSIcon icon="refresh" color="#0f0" width={50} height={50} />
    <DSIcon icon="save" color="#0f0" width={50} height={50} />
    <DSIcon icon="search" color="#0f0" width={50} height={50} />
    <DSIcon icon="share" color="#0f0" width={50} height={50} />
    <DSIcon icon="sort_ascending" color="#0f0" width={50} height={50} />
    <DSIcon icon="sort_descending" color="#0f0" width={50} height={50} />
    <DSIcon icon="sorting" color="#0f0" width={50} height={50} />
    <DSIcon icon="trash" color="#0f0" width={50} height={50} />
    <DSIcon icon="user_circle" color="#0f0" width={50} height={50} />
    <DSIcon icon="view_document" color="#0f0" width={50} height={50} />
    {/* SVG */}

    {/* Img */}
    <DSIcon icon="img_empty_png" color="#0f0" width={50} height={50} />
    <DSIcon icon="img_empty_svg" color="#0f0" width={50} height={50} />
    <DSIcon icon="img_nodata_png" color="#0f0" width={50} height={50} />
    <DSIcon icon="img_nodata_svg" color="#0f0" width={50} height={50} />
    <DSIcon icon="img_profile_circle" color="#0f0" width={50} height={50} />
    {/* Img */}
  </DSBox>;
  //   </div>
  // );

  return (
    <div className="flex flex-col gap-4 p-4">
      <DSBox
        color="#f00"
        bgColor="#F5F6F7"
        border="all" // all | top | bottom
        borderRadius="xl" // none | xs | sm | md | lg | xl | circle
        borderWidth={1} // 0 | 1 | 2
        boxShadow="top" // none | top | bottom
        textAlign="right" // left | center | right
        // alignItems="start" // start | center | end | baseline
        // justifyContent="space-between" // start | center | end | space-between | space-around
        direction="none" // none | row | row-reverse | row-wrap | column | column-reverse
        hover={true}
        gap={10}
        px={24}
        py={24}
        fullWidth
      >
        <div>
          L1
          <span>span1</span>
          <div>div1</div>
          <div>
            div2 <div>div2.1</div>
          </div>
          <div>
            div3 <span>span3</span>{" "}
            <div>
              div3.1 <span>span3.1</span>
            </div>
          </div>
        </div>
        <div>
          L2
          <span>span1</span>
          <div>div1</div>
          <div>
            div2 <div>div2.1</div>
          </div>
          <div>
            div3 <span>span3</span>{" "}
            <div>
              div3.1 <span>span3.1</span>
            </div>
          </div>
        </div>
      </DSBox>
    </div>
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
