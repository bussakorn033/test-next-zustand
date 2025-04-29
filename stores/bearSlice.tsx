import {StateCreator} from "zustand";
import {FishState} from "./fishSlice";
import {SharedState} from "./sharedSlice";

export interface BearState {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

export const bearSlice: StateCreator<
  BearState & FishState & SharedState,
  [],
  [],
  BearState
> = (set, get) => ({
  bears: 0,
  addBear: () => {
    set((state) => ({bears: state.bears + 1}));
    get().calculateBearAndFish();
  },
  eatFish: () => {
    set((state) => ({fishes: state.fishes - 1}));
    get().calculateBearAndFish();
  },
});
