import React, { FC, useEffect } from 'react';
import styles from './Versus.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { enemyPlayer, mainPlayer } from '../../redux/players/playersSlice';
import { Routes } from '../../router/router';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { HeroPreview } from '../../components/HeroPreview/HeroPreview';
import { useChangeIcons } from '../../hooks/useChangeIcons';
import { CheatIcons } from '../../components/CheatIcons/CheatIcons';
import { useCheatCodes } from '../../hooks/useCheatCodes';
import { Rate } from '../../components/Rate/Rate';
import { useTimerToRedirect } from '../../hooks/useTimerToRedirect';

export const Versus: FC = () => {
  const mainHero = useAppSelector(mainPlayer);
  const enemy = useAppSelector(enemyPlayer);

  const navigate = useNavigate();

  const { icons } = useChangeIcons();
  const { mainHeroRates, enemyRates } = useCheatCodes();

  useTimerToRedirect();

  useEffect(() => {
    if (!mainHero || !enemy) {
      navigate(Routes.CHOOSE_PLAYER);
    }
  }, [mainHero, enemy]);

  return (
    <Container>
      <div className={styles.heroesWrapper}>
        <div className={styles.heroWrapper}>
          <Rate value={mainHeroRates} />
          {mainHero && (
            <HeroPreview
              name={mainHero.name}
              imageSrc={mainHero.preview}
              hideName
              size={'large'}
            />
          )}
        </div>
        <div className={styles.heroWrapper}>
          {enemy && (
            <HeroPreview
              name={enemy.name}
              imageSrc={enemy.preview}
              hideName
              size={'large'}
              isEnemy
            />
          )}
          <Rate value={enemyRates} />
        </div>
      </div>
      <CheatIcons icons={icons} />
    </Container>
  );
};
