import React, { FC } from 'react';
import styles from './ChoosePlayer.module.scss';
import { heroes, IHero } from '../../data/heroes';
import { HeroCard } from '../../components/HeroCard/HeroCard';
import { useAppSelector } from '../../hooks/useAppSelector';
import { enemyPlayer, mainPlayer } from '../../redux/players/playersSlice';
import { useChoosePlayer } from '../../hooks/useChoosePlayer/useChosePlayer';
import { PLAYERS } from '../../hooks/useChoosePlayer/types';
import { HeroPreview } from '../../components/HeroPreview/HeroPreview';

const heroCardWidth = 160;

export const ChoosePlayer: FC = () => {
  const chosenMainHero = useAppSelector(mainPlayer);
  const chosenEnemy = useAppSelector(enemyPlayer);

  const { heroListRef, activeHero, player, handleClickCard } = useChoosePlayer(
    heroes,
    // width + margin
    heroCardWidth + 8,
  );

  const showMainHeroPreview =
    chosenMainHero || (player === PLAYERS.MAIN && activeHero);
  const showEnemyPreview =
    chosenEnemy || (player === PLAYERS.ENEMY && activeHero);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Select your fighter</p>
      <div className={styles.mainBlock}>
        <div className={styles.previewContainer}>
          {showMainHeroPreview && (
            <HeroPreview hero={chosenMainHero || (activeHero as IHero)} />
          )}
        </div>
        <div className={styles.heroesListWrapper}>
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
        <div className={styles.previewContainer}>
          {showEnemyPreview && (
            <HeroPreview hero={chosenEnemy || (activeHero as IHero)} isEnemy />
          )}
        </div>
      </div>
    </div>
  );
};
