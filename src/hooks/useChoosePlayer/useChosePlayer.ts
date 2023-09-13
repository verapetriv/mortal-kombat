import { IHero } from '../../data/heroes';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllCoordinatesType, Arrows } from './types';
import { PLAYERS } from '../../config';
import {
  getAllCoordinates,
  getKeyByValue,
  getNextCoordinates,
} from './helpers';
import { useAppDispatch } from '../useAppDispatch';
import {
  setMainPlayer,
  setEnemyPlayer,
} from '../../redux/players/playersSlice';
import { Routes } from '../../router/router';

export const useChoosePlayer = (heroes: IHero[], heroCardWidth: number) => {
  const defaultHero = heroes[0];

  const [activeHero, setActiveHero] = useState<IHero | null>(defaultHero);
  const [player, setPlayer] = useState<PLAYERS | null>(PLAYERS.MAIN);

  const [heroesCountInRow, setHeroesCountInRow] = useState<number>(0);

  const heroListRef = useRef<HTMLUListElement>(null);
  const countHeroes = heroes.length;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const countHeroesInColumn: () => number = useCallback(() => {
    return heroesCountInRow ? Math.ceil(countHeroes / heroesCountInRow) : 0;
  }, [countHeroes, heroesCountInRow]);

  const handleEnterClick = useCallback(() => {
    if (!activeHero) return;

    if (player === PLAYERS.MAIN) {
      dispatch(setMainPlayer(activeHero));
      setPlayer(PLAYERS.ENEMY);
      setActiveHero(defaultHero);
      return;
    }

    dispatch(setEnemyPlayer(activeHero));

    setActiveHero(null);
    setPlayer(null);

    setTimeout(() => {
      navigate(Routes.VERSUS);
    }, 2000);
  }, [dispatch, activeHero, player]);

  const handleArrowsClick = useCallback(
    (event: KeyboardEvent) => {
      if (!activeHero) return;

      const allCoordinates: AllCoordinatesType = getAllCoordinates(
        heroesCountInRow,
        countHeroesInColumn,
        countHeroes,
      );

      const activeHeroIndex = heroes.findIndex(
        ({ id }) => id === activeHero?.id,
      );

      const [x, y] = getNextCoordinates(
        allCoordinates,
        activeHeroIndex,
        heroesCountInRow,
        event.key as keyof Arrows,
      );

      const index = Number(getKeyByValue(allCoordinates, { x, y }));

      setActiveHero(heroes[index]);
    },
    [activeHero, heroesCountInRow],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleEnterClick();
        return;
      }

      if (Object.values(Arrows).includes(event.key as Arrows)) {
        handleArrowsClick(event);
      }
    },
    [handleEnterClick, handleArrowsClick],
  );

  const handleClickCard = (hero: IHero): void => setActiveHero(hero);

  useEffect(() => {
    const { current } = heroListRef;
    if (current) {
      setHeroesCountInRow(Math.floor(current.offsetWidth / heroCardWidth));
    }
  }, [heroListRef.current]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    heroListRef,
    activeHero,
    player,
    handleClickCard,
  };
};
