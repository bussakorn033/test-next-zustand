import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand";
import {bearSlice, BearState} from "./bearSlice";
import {fishSlice, FishState} from "./fishSlice";
import {sharedSlice, SharedState} from "./sharedSlice";

const globalSlice = create<BearState & FishState & SharedState>()(
  persist(
    (...a) => ({
      ...bearSlice(...a),
      ...fishSlice(...a),
      ...sharedSlice(...a),
    }),
    {
      name: "global-storage",
      storage: createJSONStorage(() => {
        return sessionStorage;
      }), // Keep is 'sessionStorage', Default: createJSONStorage(() => localStorage)
      partialize: (state) => ({
        bears: state.bears,
        // fishes: state.fishes,
        total: state.total,
      }),
      onRehydrateStorage: (state) => {
        return (state, error) => {
          if (error) {
          } else if (state) {
            const {bears, fishes} = {...state};
            const totalSum = Number(bears) + Number(fishes);
            state.total = totalSum; // or use state.calculateBearAndFish();
          }
        };
      },
    }
  )
);

export default globalSlice;
