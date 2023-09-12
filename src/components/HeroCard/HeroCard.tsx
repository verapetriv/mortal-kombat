import React, { FC } from 'react';
import { IHero } from '../../data/heroes';
import cn from 'classnames';
import styles from './HeroCard.module.scss';

interface IProps {
  hero: IHero;
  width?: number;
  isActive: boolean;
  isMainHero: boolean;
  isChosenMainHero: boolean;
  isChosenEnemy: boolean;
  handleClick: () => void;
}

export const HeroCard: FC<IProps> = ({
  hero,
  width,
  isActive,
  isMainHero,
  isChosenMainHero,
  isChosenEnemy,
  handleClick,
}) => {
  return (
    <li
      className={cn(styles.card, {
        [styles.activeHero]: isActive && isMainHero,
        [styles.activeEnemy]: isActive && !isMainHero,
      })}
      style={{ width }}
      onClick={handleClick}
    >
      <img className={styles.img} src={hero.image} alt={hero.name} />
      {isChosenMainHero && (
        <span className={cn(styles.playerNumber, styles.firstNumber)}>1</span>
      )}
      {isChosenEnemy && (
        <span className={cn(styles.playerNumber, styles.secondNumber)}>2</span>
      )}
    </li>
  );
};
