import React, { FC, useEffect } from 'react';
import styles from './ChoosePlayer.module.scss';
import { heroes, IHero } from 'data/heroes';
import { HeroCard } from 'components/HeroCard/HeroCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import {
  clearState,
  enemyPlayer,
  mainPlayer,
} from 'redux/players/playersSlice';
import { useChoosePlayer } from 'hooks/useChoosePlayer/useChosePlayer';
import { PLAYERS } from 'config';
import { HeroPreview } from 'components/HeroPreview/HeroPreview';
import { Container } from 'components/Container/Container';

const heroCardWidth = 160;

export const ChoosePlayer: FC = () => {
  const chosenMainHero = useAppSelector(mainPlayer);
  const chosenEnemy = useAppSelector(enemyPlayer);

  const dispatch = useAppDispatch();

  const {
    heroListRef,
    activeHero,
    player,
    handleSetActiveHero,
    handleChooseHero,
  } = useChoosePlayer(
    heroes,
    // width + margin
    heroCardWidth + 8,
  );

  const mainHeroPreview =
    chosenMainHero || (player === PLAYERS.MAIN && activeHero);
  const enemyPreview = chosenEnemy || (player === PLAYERS.ENEMY && activeHero);

  const handleDoubleCardClick = (hero: IHero): void => {
    if (chosenMainHero && chosenEnemy) return;

    handleChooseHero(hero);
  };

  useEffect(() => {
    dispatch(clearState());
  }, []);

  return (
    <Container>
      <p className={styles.title}>
        Select your {player === PLAYERS.MAIN ? 'fighter' : 'enemy'}
      </p>
      <div className={styles.mainBlock}>
        <div className={styles.previewContainer}>
          {mainHeroPreview && (
            <HeroPreview
              name={mainHeroPreview.name}
              imageSrc={mainHeroPreview.preview}
            />
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
                handleClick={() => handleSetActiveHero(hero)}
                handleDoubleClick={() => handleDoubleCardClick(hero)}
              />
            ))}
          </ul>
        </div>
        <div className={styles.previewContainer}>
          {enemyPreview && (
            <HeroPreview
              name={enemyPreview.name}
              imageSrc={enemyPreview.preview}
              isEnemy
            />
          )}
        </div>
      </div>
    </Container>
  );
};
