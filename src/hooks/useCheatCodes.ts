import { useCallback, useEffect, useState } from 'react';
import { PLAYERS } from 'config';

const cheatCodesVariants = [
  {
    code: 'wq',
    player: PLAYERS.MAIN,
    power: 1,
  },
  {
    code: 'qwe',
    player: PLAYERS.MAIN,
    power: 2,
  },
  {
    code: 'tr',
    player: PLAYERS.ENEMY,
    power: 1,
  },
  {
    code: 'rty',
    player: PLAYERS.ENEMY,
    power: 2,
  },
];

const MAX_RATE = 10;

export const useCheatCodes = () => {
  const [entries, setEntries] = useState<string>('');

  const [mainHeroRates, setMainHeroRates] = useState<number>(0);
  const [enemyRates, setEnemyRates] = useState<number>(0);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    setEntries((prevState) => prevState + key);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    cheatCodesVariants.forEach(({ code, player, power }) => {
      const isRightCheatCode = entries.includes(code);

      if (!isRightCheatCode) return;

      if (player === PLAYERS.MAIN)
        setMainHeroRates((prevState) =>
          prevState + power > MAX_RATE ? MAX_RATE : prevState + power,
        );
      if (player === PLAYERS.ENEMY)
        setEnemyRates((prevState) =>
          prevState + power > MAX_RATE ? MAX_RATE : prevState + power,
        );

      setEntries('');
    });
  }, [entries]);

  return {
    mainHeroRates,
    enemyRates,
  };
};
