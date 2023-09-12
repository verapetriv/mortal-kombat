import React, { FC } from 'react';
import styles from './ChoosePlayer.module.scss';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { enemyPlayer, mainPlayer } from '../../redux/players/playersSlice';
import { useChoosePlayer } from '../../hooks/useChoosePlayer/useChosePlayer';
import { PLAYERS } from '../../hooks/useChoosePlayer/types';

const heroCardWidth = 160;

export const ChoosePlayer: FC = () => {
  const chosenMainHero = useAppSelector(mainPlayer);
  const chosenEnemy = useAppSelector(enemyPlayer);

  const { heroListRef, activeHero, player, handleClickCard } = useChoosePlayer(
    heroes,
    heroCardWidth,
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>Select your fighter</p>
      <div>
        <ul className={styles.heroesList} ref={heroListRef}>
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              width={heroCardWidth}
              isActive={activeHero?.id === hero.id}
              isMainHero={player === PLAYERS.MAIN}
              isChosenMainHero={chosenMainHero?.id === hero.id}
              isChosenEnemy={chosenEnemy?.id === hero.id}
              handleClick={() => handleClickCard(hero)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
