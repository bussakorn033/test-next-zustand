import { StateCreator } from 'zustand';
import { BearState } from './bearSlice';
import { SharedState } from './sharedSlice';

export interface FishState {
  fishes: number;
  addFish: () => void;
  eatBear: () => void;
}

export const fishSlice: StateCreator<BearState & FishState & SharedState, [], [], FishState> = (
  set,
  get
) => ({
  fishes: 0,
  addFish: () => {
    set((state) => ({ fishes: state.fishes + 1 }));
    get().calculateBearAndFish();
  },
  eatBear: () => {
    set((state) => ({ bears: state.bears - 1 }));
    get().calculateBearAndFish();
  }
});
