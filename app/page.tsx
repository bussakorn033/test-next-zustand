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
      <DSTextStyle variant="specialH1">
        สวัสดีครับ คุณชานนท์{" "}
        <DSTextStyle variant="span">
          ยินดีต้อนรับเข้าสู่ ttb e-contract portal
        </DSTextStyle>
      </DSTextStyle>

      <DSTextStyle variant="specialH1">Ekachon - specialH1</DSTextStyle>
      <DSTextStyle variant="specialH2">Ekachon - specialH2</DSTextStyle>
      <DSTextStyle variant="pageTitle">Ekachon - pageTitle</DSTextStyle>
      <DSTextStyle variant="h1">Ekachon - h1</DSTextStyle>
      <DSTextStyle variant="h2">Ekachon - h2</DSTextStyle>
      <DSTextStyle variant="h3">Ekachon - h3</DSTextStyle>
      <DSTextStyle variant="h4">Ekachon - h4</DSTextStyle>

      {/* Basic variant examples */}
      <DSTextStyle variant="specialH1">Special Heading 1</DSTextStyle>
      <DSTextStyle variant="h2">Heading 2</DSTextStyle>

      {/* Color examples */}
      <DSTextStyle color="color-primary">Primary Color Text</DSTextStyle>
      <DSTextStyle color="color-danger">Error Message</DSTextStyle>

      {/* Line limit examples */}
      <DSTextStyle limitLine={2} style={{width: "200px"}}>
        This is a very long text that will be limited to 2 lines with ellipsis
        at the end when it overflows
      </DSTextStyle>

      {/* White space examples */}
      <DSTextStyle whiteSpace="nowrap">
        This text won't wrap to new line
      </DSTextStyle>

      {/* Word break examples */}
      <DSTextStyle wordBreak="break-all" style={{width: "150px"}}>
        ThisIsAVeryLongWordThatWillBreak
      </DSTextStyle>

      {/* Combined examples */}
      <DSTextStyle
        variant="h1"
        color="color-primary"
        limitLine={3}
        whiteSpace="pre-line"
        wordBreak="break-word"
        style={{maxWidth: "300px"}}
      >
        This is a heading with multiple lines and custom styling
      </DSTextStyle>

      {/* <DSBox
        // color="#f00"
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
        <DSTextStyle variant="specialH1">Ekachon - specialH1</DSTextStyle>
      </DSBox> */}

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
        {[...Object.keys(iconList)].map((iconName) => (
          <DSBox key={iconName} direction="column" gap={4} alignItems="center">
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
      </DSBox>

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
        {[...Object.keys(galleryList)].map((iconName) => (
          <DSBox key={iconName} direction="column" gap={4} alignItems="center">
            <DSIcon icon={iconName} color="#0f0" width={50} height={50} />
            <span style={{fontSize: "12px"}}>{iconName}</span>
          </DSBox>
        ))}
      </DSBox>
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
