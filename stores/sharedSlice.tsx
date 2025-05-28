import { StateCreator } from 'zustand';
import { BearState } from './bearSlice';
import { FishState } from './fishSlice';

export interface SharedState {
  total: number;
  addBearAndFish: () => void;
  calculateBearAndFish: () => void;
}

export const sharedSlice: StateCreator<BearState & FishState, [], [], SharedState> = (set, get) => ({
  total: 0,
  addBearAndFish: () => {
    get().addBear();
    get().addFish();
  },
  calculateBearAndFish: () => {
    const bears = get().bears;
    const fishes = get().fishes;
    const total = bears + fishes; // Calculate the total
    set((state) => ({ ...state, total })); // Update the state
    return total; // Return the calculated total
  }
});
