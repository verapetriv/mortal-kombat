import React, { FC } from 'react';
import { IHero } from '../../data/heroes';
import styles from './HeroPreview.module.scss';
import cn from 'classnames';

interface IProps {
  hero: IHero;
  isEnemy?: boolean;
}

export const HeroPreview: FC<IProps> = ({ hero, isEnemy }) => (
  <div className={styles.wrapper}>
    <img
      className={cn(styles.image, {
        [styles.mirrorImage]: isEnemy,
      })}
      src={hero.preview}
      alt={hero.name}
    />
    <p className={styles.heroName}>{hero.name}</p>
  </div>
);
