import { IHero } from '../../data/heroes';

export interface IPlayersState {
  main: IHero | null;
  enemy: IHero | null;
}
