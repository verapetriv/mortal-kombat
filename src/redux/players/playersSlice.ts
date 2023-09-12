import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IPlayersState } from './types';
import { IHero } from '../../data/heroes';

const initialState: IPlayersState = {
  main: null,
  enemy: null,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setMainPlayer: (state, { payload }: { payload: IHero }) => {
      state.main = payload;
    },
    setEnemyPlayer: (state, { payload }: { payload: IHero }) => {
      state.enemy = payload;
    },
  },
});

export const { setMainPlayer, setEnemyPlayer } = playersSlice.actions;

export const mainPlayer = (state: RootState) => state.players.main;
export const enemyPlayer = (state: RootState) => state.players.enemy;

export default playersSlice.reducer;
