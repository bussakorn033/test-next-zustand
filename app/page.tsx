"use client";

import {Box} from "@/components/Box";
import {Button} from "@/components/Button";
import Icon from "@/components/Icon/Icon";
import {TextStyle} from "@/components/TextStyle";
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
    <>
      <Box fullHeight fullWidth bgColor="var(--color-bg-primary)">
        <Box direction="column" p={32} fullWidth>
          <Box direction="column" gap={24}>
            <Box direction="column" gap={48}>
              <Box direction="column" gap={0}>
                <TextStyle variant="h2" color="color-primary">
                  title
                </TextStyle>
                <TextStyle
                  variant="paragraphMedium"
                  color="color-neutral-grey-light"
                >
                  sub_title
                </TextStyle>
              </Box>
              <Box direction="row" justifyContent="space-between" gap={24}>
                <TextStyle variant="h4" color="color-primary">
                  title_table
                </TextStyle>
                <Box direction="row" gap={8}>
                  <Button variant="ghost-primary" iconLeft="refresh">
                    btn_refresh
                  </Button>
                  <Button variant="primary" iconLeft="plus">
                    btn_create_contract
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box direction="row" justifyContent="space-between">
              <Box direction="column" justifyContent="center" gap={8}>
                <Box direction="row" gap={8}>
                  <TextStyle variant="labelXSmall" color="color-secondary">
                    filter_by_user
                  </TextStyle>
                  <Icon icon="arrow_down" width={16} color="color-primary" />
                </Box>
              </Box>
              <Box direction="row" gap={8}>
                <Box direction="row" gap={8}>
                  <TextStyle variant="labelSmallBold" color="color-primary">
                    filter_by_type_doc
                  </TextStyle>
                  <Icon icon="arrow_down" width={16} />
                </Box>
                <Box direction="row" gap={8}>
                  <TextStyle variant="labelSmallBold" color="color-primary">
                    filter_by_status
                  </TextStyle>
                  <Icon icon="arrow_down" width={16} />
                </Box>
              </Box>
            </Box>
            <Box
              direction="column"
              gap={8}
              color="var(--color-table-border-dark)"
              bgColor="var(--color-neutral-light)"
              border="all"
              borderRadius="md"
              borderWidth={1}
            >
              <Box
                direction="column"
                gap={8}
                color="var(--color-table-border-dark)"
                bgColor="var(--color-table-header-dark)"
                borderWidth={1}
                border="bottom"
                px={8}
                py={10}
              >
                <Box direction="row" gap={8}>
                  <TextStyle variant="labelSmallBold" color="color-primary">
                    contract_table_header_row1
                  </TextStyle>
                  <Icon icon="sorting" width={16} />
                </Box>
              </Box>
              <Box
                direction="column"
                gap={8}
                color="var(--color-table-border-dark)"
                bgColor="var(--color-neutral-light)"
                px={8}
                py={10}
              >
                <TextStyle variant="labelSmallBold" color="color-primary">
                  contract_table_header_row1
                </TextStyle>
              </Box>
            </Box>
          </Box>
        </Box>
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
